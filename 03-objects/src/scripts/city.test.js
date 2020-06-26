import { City, Community } from './city.js'
import functions from './fetch.js'

global.fetch = require('node-fetch');
const url = 'http://localhost:5000/';

afterEach(async () => {
    await functions.postData(url + 'clear');
})

test('does the show function work?', () => {
    let myCity = new City('a', 1, -2, 3);
    expect(myCity.show()).toBe('City: a, Lat: 1, Long: -2, Poulation: 3');
    let myCity2 = new City('b', 1, 2, 3);
    expect(myCity2.show()).toBe('City: b, Lat: 1, Long: 2, Poulation: 3');
});

test('does the movedIn function work?', () => {
    let myCity = new City('a', 1, 2, 3);
    myCity.movedIn(1);
    expect(myCity.population).toBe(4);
    myCity.movedIn(10);
    expect(myCity.population).toBe(14);
    myCity.movedIn(100);
    expect(myCity.population).toBe(114);
});

test('does the movedOut function work?', () => {
    let myCity = new City('a', 1, 2, 10);
    myCity.movedOut(2);
    expect(myCity.population).toBe(8);
    myCity.movedOut(3);
    expect(myCity.population).toBe(5);
    myCity.movedOut(4);
    expect(myCity.population).toBe(1);
});

test('does the howBig function work?', () => {
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
});

test('does the createCity function work?', async () => {
    const control = new Community;
    let data = await control.createCity('a', 1, -2, 3);
    expect(data.status).toBe(200);
    data = await control.createCity('b', 1, -2, 3);
    expect(data.status).toBe(200);
});

test('does the getCommunity function work?', async () => {
    const control = new Community;
    let data = await control.createCity('a', 1, -2, 3);
    expect(data.status).toBe(200);

    data = await control.getCommunity();
    expect(data[0].name).toBe("a");
});

test('does the getLocalData function work?', async () => {
    const control = new Community;
    let data = await control.createCity('a', 1, -2, 3);
    expect(data.status).toBe(200);

    data = await control.getCommunity();
    expect(data[0].name).toBe("a");

    data = await control.getLocalData();
    expect(data[0].name).toBe("a");
});

test('does the updatePopulation function work?', async () => {
    const control = new Community;

    let data = await control.createCity('a', 1, -2, 3);
    data = await control.getCommunity();
    expect(data[0].name).toBe("a");

    let myCity = new City('b', 3, -4, 3, 1);
    await control.updatePopulation(myCity);
    let update = await control.getCommunity();
    expect(update[0].population).toBe(3);

});

test('does the whichSphere function work?', async () => {
    const control = new Community;
    let data = await control.createCity('a', 1, -2, 3);
    data = await control.getCommunity();
    expect(control.whichSphere("a")).toBe("Northern Hemisphere");

    data = await control.createCity('b', -1, 2, 3);
    data = await control.getCommunity();
    expect(control.whichSphere("b")).toBe("Southern Hemisphere");

    data = await control.createCity('c', 0, 2, 3);
    data = await control.getCommunity();
    expect(control.whichSphere("c")).toBe("The Equator");
});

test('does the getMostNorthern function work?', async () => {
    const control = new Community;
    let data = await control.createCity('a', 1, -2, 3);
    data = await control.createCity('b', 5, -6, 7);
 
    expect(await control.getMostNorthern()).toBe("b");
});

test('does the getMostSouther function work?', async () => {
    const control = new Community;
    let data = await control.createCity('a', 1, -2, 3);
    data = await control.createCity('b', 4, -5, 6);

    expect(await control.getMostSouther()).toBe("a");
});

test('does the getPopulation function work?', async () => {
    const control = new Community;
    let data = await control.createCity('a', 1, -2, 3);
    data = await control.createCity('b', 4, -5, 6);

    expect(await control.getPopulation()).toBe("9");
});

test('does the deleteCity function work?', async () => {
    const control = new Community;
    let data = await control.createCity('a', 1, -2, 3);
    expect(data.status).toBe(200);
    data = await control.createCity('b', 4, -5, 6);
    expect(data.status).toBe(200);

    data = await control.deleteCity('b');
    expect(data.status).toBe(200);
});

test('does the isNewCity function work?', async () => {
    const control = new Community;
    let data = await control.createCity('a', 1, -2, 3);
    data = await control.createCity('b', 4, -5, 6);

    let clone = await control.getCommunity();
    expect(control.isNewCity('a')).toBe('ERROR');
    expect(control.isNewCity('NYC')).toBe('NYC');
});

test('does the isAcoordinate function work?', async () => {
    const control = new Community;
    expect(control.isAcoordinate('a')).toBe('ERROR');
    expect(control.isAcoordinate(5)).toBe(5);
});

// 130E - Exercise - Object Reference
test('does the Object Reference function work?', async () => {
    const control = new Community;
    let myCity = await control.createCity('MyCity', 1, 2, 3);
    let myFav = myCity;
    console.log(myCity.population);
    console.log(myFav.population);

    myCity.population = 5;
    console.log(myCity);
    console.log(myFav);
});