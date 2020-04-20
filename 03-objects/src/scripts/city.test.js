import { City, Community } from './city.js'

import functions from './fetch.js'
global.fetch = require('node-fetch');
const url = 'http://localhost:5000/';

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
    let data = await functions.postData(url + 'clear');
    data = await control.createCity('Saskatoon', 52.13049, -106.65926, 278500);
    expect(data.status).toBe(200);
    let data2 = await control.createCity('Banff', 51.17578, -115.57274, 8142);
    expect(data2.status).toBe(200);
});

test('does the deleteCity function work?', async () => {
    const control = new Community;
    let data = await control.deleteCity('Saskatoon');
    expect(data.status).toBe(200);
});

test('does the whichSphere function work?', async () => {
    const control = new Community;
    expect(await control.whichSphere("Saskatoon")).toBe("Northern Hemisphere");
});

test('does the getMostNorthern function work?', async () => {
    const control = new Community;
    expect(await control.getMostNorthern()).toBe("Saskatoon");
});

test('does the getMostSouther function work?', async () => {
    const control = new Community;
    expect(await control.getMostSouther()).toBe("Banff");
});

test('does the getPopulation function work?', async () => {
    const control = new Community;
    expect(await control.getPopulation()).toBe("286,642");
});

test('does the isNewCity function work?', async () => {
    const control = new Community;
    expect(await control.isNewCity('Saskatoon')).toBe('ERROR');
    expect(await control.isNewCity('NYC')).toBe('NYC');
});

test('does the isAcoordinate function work?', () => {
    const control = new Community;
    expect(control.isAcoordinate('Saskatoon')).toBe('ERROR');
    expect(control.isAcoordinate(5)).toBe(5);
});