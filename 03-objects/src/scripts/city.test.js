import { City, Community } from './city.js'
import functions from './fetch.js'

global.fetch = require('node-fetch');
const url = 'http://localhost:5000/';

beforeEach(async () => {
    await functions.postData(url + 'clear');
})

test('does the show function work?', () => {
    let myCity = new City('Saskatoon', 52.13049, -106.65926, 278500);
    expect(myCity.show()).toBe('City: Saskatoon, Lat: 52.13049, Long: -106.65926, Poulation: 278500');
    let myCity2 = new City('Amsterdam', 52.3667, 4.8945, 822000);
    expect(myCity2.show()).toBe('City: Amsterdam, Lat: 52.3667, Long: 4.8945, Poulation: 822000');
});

test('does the movedIn function work?', () => {
    let myCity = new City('Amsterdam', 52.3667, 4.8945, 822000);
    myCity.movedIn(1);
    expect(myCity.population).toBe(822001);
    myCity.movedIn(10);
    expect(myCity.population).toBe(822011);
    myCity.movedIn(100);
    expect(myCity.population).toBe(822111);
});

test('does the movedOut function work?', () => {
    let myCity = new City('Amsterdam', 52.3667, 4.8945, 822000);
    myCity.movedOut(2);
    expect(myCity.population).toBe(821998);
    myCity.movedOut(11);
    expect(myCity.population).toBe(821987);
    myCity.movedOut(111);
    expect(myCity.population).toBe(821876);
});

test('does the howBig function work?', () => {
    let myCity = new City('Amsterdam', 52.3667, 4.8945, 822000);
    expect(myCity.howBig()).toBe('City');
    let myTown = new City('Banff', 51.17578, -115.57274, 8142);
    expect(myTown.howBig()).toBe('Town');
    let myVillage = new City('Hanapepe', 21.91401, -159.59276, 999);
    expect(myVillage.howBig()).toBe('Village');
    let myHamlet = new City('Crystal Lake', 51.8500, -102.4342, 99);
    expect(myHamlet.howBig()).toBe('Hamlet');
});

test('does the createCity function work?', async () => {
    const control = new Community;
    let data = await control.createCity('Saskatoon', 52.13049, -106.65926, 278500);
    expect(data.status).toBe(200);
    data = await control.createCity('Banff', 51.17578, -115.57274, 8142);
    expect(data.status).toBe(200);
});

test('does the getCommunity function work?', async () => {
    const control = new Community;
    let data = await control.createCity('Saskatoon', 52.13049, -106.65926, 278500);
    expect(data.status).toBe(200);

    data = await control.getCommunity();
    expect(data[0].name).toBe("Saskatoon");
});

test('does the getLocalData function work?', async () => {
    const control = new Community;
    let data = await control.createCity('Saskatoon', 52.13049, -106.65926, 278500);
    expect(data.status).toBe(200);

    data = await control.getCommunity();
    expect(data[0].name).toBe("Saskatoon");

    data = await control.getLocalData();
    expect(data[0].name).toBe("Saskatoon");
});

test('does the updatePopulation function work?', async () => {
    const control = new Community;
    let data = await control.createCity('Saskatoon', 52.13049, -106.65926, 278500);
    expect(data.status).toBe(200);
    data = await control.getCommunity();
    expect(data[0].name).toBe("Saskatoon");

    let myCity = new City('Saskatoon', 52.13049, -106.65926, 278501, 1);
    await control.updatePopulation(myCity);
    let update = await control.getCommunity();
    expect(update[0].population).toBe(278501);
});

test('does the whichSphere function work?', async () => {
    const control = new Community;
    let data = await control.createCity('Saskatoon', 52.13049, -106.65926, 278500);
    expect(data.status).toBe(200);
    data = await control.getCommunity();
    if (data.status == 200)
        expect(control.whichSphere("Saskatoon")).toBe("Northern Hemisphere");
});

test('does the getMostNorthern function work?', async () => {
    const control = new Community;
    let data = await control.createCity('Saskatoon', 52.13049, -106.65926, 278500);
    expect(data.status).toBe(200);
    data = await control.createCity('Banff', 51.17578, -115.57274, 8142);
    expect(data.status).toBe(200);

    expect(await control.getMostNorthern()).toBe("Saskatoon");
});

test('does the getMostSouther function work?', async () => {
    const control = new Community;
    let data = await control.createCity('Saskatoon', 52.13049, -106.65926, 278500);
    expect(data.status).toBe(200);
    data = await control.createCity('Banff', 51.17578, -115.57274, 8142);
    expect(data.status).toBe(200);

    expect(await control.getMostSouther()).toBe("Banff");
});

test('does the getPopulation function work?', async () => {
    const control = new Community;
    let data = await control.createCity('Saskatoon', 52.13049, -106.65926, 278500);
    expect(data.status).toBe(200);
    data = await control.createCity('Banff', 51.17578, -115.57274, 8142);
    expect(data.status).toBe(200);

    expect(await control.getPopulation()).toBe("286,642");
});

test('does the deleteCity function work?', async () => {
    const control = new Community;
    let data = await control.createCity('Saskatoon', 52.13049, -106.65926, 278500);
    expect(data.status).toBe(200);
    data = await control.createCity('Banff', 51.17578, -115.57274, 8142);
    expect(data.status).toBe(200);

    data = await control.deleteCity('Saskatoon');
    expect(data.status).toBe(200);
});

test('does the isNewCity function work?', async () => {
    const control = new Community;
    let data = await control.createCity('Saskatoon', 52.13049, -106.65926, 278500);
    expect(data.status).toBe(200);
    data = await control.createCity('Banff', 51.17578, -115.57274, 8142);
    expect(data.status).toBe(200);
    let clone = await control.getCommunity();
    if (clone.status == 200)
        expect(control.isNewCity('Saskatoon')).toBe('ERROR');
    expect(control.isNewCity('NYC')).toBe('NYC');
});

test('does the isAcoordinate function work?', async () => {
    const control = new Community;
    expect(control.isAcoordinate('Saskatoon')).toBe('ERROR');
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