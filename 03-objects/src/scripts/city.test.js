import { City, Community } from './city.js'
import functions from './fetch.js'

global.fetch = require('node-fetch');
const url = 'http://localhost:5000/';

test('does the show function work?', async () => {
    await functions.postData(url + 'clear');
    let myCity = new City('a', 1, -2, 3);
    expect(myCity.show()).toBe('City: a, Lat: 1, Long: -2, Poulation: 3');
    let myCity2 = new City('b', 1, 2, 3);
    expect(myCity2.show()).toBe('City: b, Lat: 1, Long: 2, Poulation: 3');
    await functions.postData(url + 'clear');
});

test('does the movedIn function work?', async () => {
    await functions.postData(url + 'clear');
    let myCity = new City('a', 1, 2, 3);
    myCity.movedIn(1);
    expect(myCity.population).toBe(4);
    myCity.movedIn(10);
    expect(myCity.population).toBe(14);
    myCity.movedIn(100);
    expect(myCity.population).toBe(114);
    await functions.postData(url + 'clear');
});

test('does the movedOut function work?', async () => {
    await functions.postData(url + 'clear');
    let myCity = new City('a', 1, 2, 10);
    myCity.movedOut(2);
    expect(myCity.population).toBe(8);
    myCity.movedOut(3);
    expect(myCity.population).toBe(5);
    myCity.movedOut(4);
    expect(myCity.population).toBe(1);
    await functions.postData(url + 'clear');
});

test('does the howBig function work?', async () => {
    await functions.postData(url + 'clear');
    let myCity = new City('a', 1, 2, 822000);
    expect(myCity.howBig()).toBe('City');
    let myLargeTown = new City('b', 1, 2, 20000);
    expect(myLargeTown.howBig()).toBe('Large Town');
    let myTown = new City('c', 1, 2, 8142);
    expect(myTown.howBig()).toBe('Town');
    let myVillage = new City('d', 1, 2, 999);
    expect(myVillage.howBig()).toBe('Village');
    let myHamlet = new City('e', 1, 2, 99);
    expect(myHamlet.howBig()).toBe('Hamlet');
    let hamlet = new City('e', 1, 2, 1);
    expect(myHamlet.howBig()).toBe('Hamlet');
    await functions.postData(url + 'clear');
});

test('does the createCity function work?', async () => {
    await functions.postData(url + 'clear');
    const control = new Community;
    let data = await control.createCity('a', 1, -2, 3);
    expect(data.status).toBe(200);
    data = await control.createCity('b', 1, -2, 3);
    expect(data.status).toBe(200);

    data = await control.getCommunity();
    expect(data[0].name).toBe("a");
    expect(data[1].name).toBe("b");
    await functions.postData(url + 'clear');
});

test('does the getCommunity function work?', async () => {
    await functions.postData(url + 'clear');
    const control = new Community;
    let data = await control.createCity('a', 1, -2, 3);
    expect(data.status).toBe(200);

    data = await control.getCommunity();
    expect(data[0].name).toBe("a");
    await functions.postData(url + 'clear');
});

test('does the getLocalData function work?', async () => {
    await functions.postData(url + 'clear');
    const control = new Community;
    let data = await control.createCity('a', 1, -2, 3);
    expect(data.status).toBe(200);

    data = await control.getCommunity();
    expect(data[0].name).toBe("a");

    data = await control.getLocalData();
    expect(data[0].name).toBe("a");
    await functions.postData(url + 'clear');
});

test('does the updatePopulation function work?', async () => {
    await functions.postData(url + 'clear');
    const control = new Community;

    let data = await control.createCity('a', 1, -2, 3);
    data = await control.getCommunity();
    expect(data[0].name).toBe("a");

    let myCity = new City('b', 3, -4, 6, 1);
    await control.updatePopulation(myCity);
    let update = await control.getCommunity();
    expect(update[0].population).toBe(6);
    await functions.postData(url + 'clear');
});

test('does the whichSphere function work?', async () => {
    await functions.postData(url + 'clear');
    const control = new Community;
    await control.createCity('a', 1, -2, 3);
    await control.getCommunity();
    expect(control.whichSphere("a")).toBe("Northern Hemisphere");

    await control.createCity('b', -1, 2, 3);
    await control.getCommunity();
    expect(control.whichSphere("b")).toBe("Southern Hemisphere");

    await control.createCity('c', 0, 2, 3);
    await control.getCommunity();
    expect(control.whichSphere("c")).toBe("The Equator");
    await functions.postData(url + 'clear');
});

test('does the getMostNorthern function work?', async () => {
    await functions.postData(url + 'clear');
    const control = new Community;
    await control.createCity('a', 1, -2, 3);
    await control.createCity('b', 5, -6, 7);

    expect(await control.getMostNorthern()).toBe("b");
    await functions.postData(url + 'clear');
});

test('does the getMostSouther function work?', async () => {
    await functions.postData(url + 'clear');
    const control = new Community;
    await control.createCity('a', 1, -2, 3);
    await control.createCity('b', 4, -5, 6);

    expect(await control.getMostSouther()).toBe("a");
    await functions.postData(url + 'clear');
});

test('does the getPopulation function work?', async () => {
    await functions.postData(url + 'clear');
    const control = new Community;
    await control.createCity('a', 1, -2, 3);
    await control.createCity('b', 4, -5, 6);

    expect(await control.getPopulation()).toBe("9");
    await functions.postData(url + 'clear');
});

test('does the deleteCity function work?', async () => {
    await functions.postData(url + 'clear');
    const control = new Community;

    let data = await control.createCity('a', 1, -2, 3);
    expect(data.status).toBe(200);

    data = await control.getCommunity();
    expect(data.length).toBe(1);

    data = await control.createCity('b', 4, -5, 6);
    expect(data.status).toBe(200);

    data = await control.getCommunity();
    expect(data.length).toBe(2);

    data = await control.deleteCity('b');
    expect(data.status).toBe(200);

    data = await control.getCommunity();
    expect(data.length).toBe(1);
    await functions.postData(url + 'clear');
});

test('does the isNewCity function work?', async () => {
    await functions.postData(url + 'clear');
    const control = new Community;
    await control.createCity('a', 1, -2, 3);
    await control.createCity('b', 4, -5, 6);

    await control.getCommunity();
    expect(control.isNewCity('a')).toBe('ERROR');
    expect(control.isNewCity('b')).toBe('ERROR');
    expect(control.isNewCity('NYC')).toBe('NYC');
    await functions.postData(url + 'clear');
});

test('does the isAcoordinate function work?', async () => {
    await functions.postData(url + 'clear');
    const control = new Community;
    expect(control.isAcoordinate('a')).toBe('ERROR');
    expect(control.isAcoordinate(5)).toBe(5);
    await functions.postData(url + 'clear');
});

// 130E - Exercise - Object Reference
test('does the Object Reference function work?', async () => {
    await functions.postData(url + 'clear');
    const control = new Community;
    await control.createCity('MyCity', 1, 2, 3);
    let data = await control.getCommunity();

    let myCity = data[0];
    let myFav = myCity

    console.log(myCity.population);
    console.log(myFav.population);

    myCity.population = 5;
    console.log(myCity);
    console.log(myFav);

    //myFav is a reference to myCity and it won't change the population
    myFav.population = 2;
    console.log(myCity);
    console.log(myFav);
    await functions.postData(url + 'clear');
});