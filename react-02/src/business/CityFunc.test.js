import funcs from './CityFunc';
import postData from './Fetch';
global.fetch = require('node-fetch');

afterEach(async () => {
    await postData(funcs.url + 'clear');
})

test('test getNewCity', () => {
    const Ctrl = new funcs.Community();
    let city1 = Ctrl.getNewCity();

    expect(city1.city).toBe('');
    expect(city1.latitude).toBe(0);
    expect(city1.longitude).toBe(0);
    expect(city1.population).toBe(0);
    expect(city1.key).toBe('');

    city1.movedIn(100);
    expect(city1.population).toBe(100);

    city1.movedOut(50);
    expect(city1.population).toBe(50);

});

test('test load Community from api', async () => {

    // crreate controller
    const ctrl = new funcs.Community();

    try {
        const url = funcs.url;

        // clear the server and check length
        let data = await postData(url + 'clear');
        await ctrl.getCommunity();
        expect(ctrl.length()).toBe(0);

        // add first city
        let city1 = ctrl.getNewCity();
        city1.city = 'City1';
        city1.latitude = 10;
        city1.longitude = 20;
        city1.population = 30

        await ctrl.addOrUpdate(city1);

        // check community length
        await ctrl.getCommunity();
        expect(ctrl.length()).toBe(1);

        // add second city
        let city2 = ctrl.getNewCity();
        city2.city = 'City2';
        city2.latitude = 10;
        city2.longitude = 20;
        city2.population = 30
        await ctrl.addOrUpdate(city2);

        // check community length
        await ctrl.getCommunity();
        expect(ctrl.length()).toBe(2);

        // check community city
        city1 = ctrl.get('1');
        expect(city1.city).toBe('City1');
        city2 = ctrl.get('2');
        expect(city2.city).toBe('City2');

        // update city1 info
        city1 = ctrl.get('1');
        city1.city = 'City1+';
        city1.latitude = 20;
        city1.longitude = 30;
        city1.population = 40

        await ctrl.addOrUpdate(city1);

        // check updated community info
        await ctrl.getCommunity();
        city1 = ctrl.get('1');
        expect(city1.city).toBe('City1+');
        expect(city1.latitude).toBe(20);
        expect(city1.longitude).toBe(30);
        expect(city1.population).toBe(40);

        // Test the last key works
        expect(ctrl.lastKey).toBe(2);

        const ctrl2 = new funcs.Community();
        await ctrl2.getCommunity();
        expect(ctrl2.lastKey).toBe(2);

    } catch (e) {
        console.log('*** Start the server please ***');
        // expect('').toBe(e.message);
    }
});

test('does that updatePopulation function work', async () => {

    // crreate controller
    const ctrl = new funcs.Community();

    const url = funcs.url;

    // clear the server and check length
    let data = await postData(url + 'clear');
    await ctrl.getCommunity();
    expect(ctrl.length()).toBe(0);

    // add first city
    let city1 = ctrl.getNewCity();
    city1.city = 'City1';
    city1.latitude = 1;
    city1.longitude = 2;
    city1.population = 3;

    await ctrl.addOrUpdate(city1);

    // check community length
    await ctrl.getCommunity();
    expect(ctrl.length()).toBe(1);

    // add second city
    let city2 = ctrl.getNewCity();
    city2.city = 'City2';
    city2.latitude = 10;
    city2.longitude = 20;
    city2.population = 30;
    await ctrl.addOrUpdate(city2);

    // check community length
    await ctrl.getCommunity();
    expect(ctrl.length()).toBe(2);
    expect(city2.key).toBe(2);

    // movedin
    let updateCity = { key: 1, numOfPeople: '20', city: 'city1', type: 'movedIn' };
    await ctrl.populationUpdate(updateCity);
    expect(data.status).toBe(200);
    city1 = await ctrl.get(1);
    expect(city1.population).toBe(23);

    // movedout
    updateCity = { key: 1, numOfPeople: '10', city: 'city1', type: 'movedOut' };
    await ctrl.populationUpdate(updateCity);
    expect(data.status).toBe(200);
    city1 = await ctrl.get(1);
    expect(city1.population).toBe(13);

});

test('does that delete function work', async () => {
    const ctrl = new funcs.Community();
    let city1 = ctrl.getNewCity();
    city1.city = 'City1';
    city1.latitude = 1;
    city1.longitude = 2;
    city1.population = 3;
    await ctrl.addOrUpdate(city1);
    expect(ctrl.length()).toBe(1);

    let city2 = ctrl.getNewCity();
    city2.city = 'City2';
    city2.latitude = 10;
    city2.longitude = 20;
    city2.population = 30;
    await ctrl.addOrUpdate(city2);
    expect(ctrl.length()).toBe(2);

    await ctrl.delete(city1);
    await ctrl.getCommunity();
    expect(ctrl.length()).toBe(1);
    expect(ctrl.total()).toBe(30);

});

//test deep cloning copies methods too
test('test load city instance from city copy', async () => {
    const ctrl = new funcs.Community();

    // clear the server
    let data = await postData(funcs.url + 'clear');

    // create new city
    let city1 = ctrl.getNewCity();
    city1.city = 'City1';
    city1.latitude = 1;
    city1.longitude = 2;
    city1.population = 3;
    await ctrl.addOrUpdate(city1);
    expect(ctrl.length()).toBe(1);

    // deep clone the new city
    const newCity = { ...city1 };
    await ctrl.addOrUpdate(newCity);
});

//Make sure addOrUpdate updates the internal storage
test('test addOrUpdate updates internal storage', async () => {

    // clear the server
    let data = await postData(funcs.url + 'clear');
    funcs.City.lastKey = 0;
    const ctrl = new funcs.Community();

    let city1, city2;
    city1 = ctrl.getNewCity();
    city1.city = 'City1';
    city1.latitude = 1;
    city1.longitude = 2;
    city1.population = 3;
    await ctrl.addOrUpdate(city1);

    // console.log(ctrl.community);

    city2 = ctrl.get('1');
    expect(city2.city).toBe('City1');

    city2.city = 'City2';
    await ctrl.addOrUpdate(city2);
    city2 = ctrl.get('1');
    expect(city2.city).toBe('City2');
});