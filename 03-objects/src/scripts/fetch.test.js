import functions from './fetch.js'
global.fetch = require('node-fetch');

const data = [
    {
        "name": "Maricica", "surname": "Ghinea", "gender": "female",
        "region": "Romania"
    },
    {
        "name": "Nishant", "surname": "Bhattarai", "gender": "male",
        "region": "Nepal"
    },
    {
        "name": "Nicuță", "surname": "Lotru", "gender": "male",
        "region": "Romania"
    },
    {
        "name": "Barbara", "surname": "Schneider", "gender": "female",
        "region": "United States"
    },
    {
        "name": "Stanca", "surname": "Grigoriu", "gender": "female",
        "region": "Romania"
    },
    {
        "name": "Bella", "surname": "Musker", "gender": "female",
        "region": "New Zealand"
    },
    {
        "name": "Fabian", "surname": "Dediu", "gender": "male",
        "region": "Romania"
    },
    {
        "name": "Славчо", "surname": "КОСТАДИНОВ",
        "gender": "male", "region": "Bulgaria"
    },
    {
        "name": "Upendra", "surname": "Ranjit", "gender": "male",
        "region": "Nepal"
    },
    {
        "name": "Dumitra", "surname": "Vicovean", "gender": "female",
        "region": "Romania"
    }
]

test('does the getFirstName function work?', () => {
    expect(functions.getFirstName(data)).toBe('Maricica');
});

test('does the getAllFirstNames function work?', () => {
    expect(functions.getAllFirstNames(data)).toStrictEqual(["Maricica", "Nishant", "Nicuță", "Barbara", "Stanca", "Bella", "Fabian", "Славчо", "Upendra", "Dumitra"]);
});

const url = 'http://localhost:5000/';

test('test that the fetch works?', async () => {

    const cities = [
        { key: 1, name: "Saskatoon" },
        { key: 2, name: "Amsterdam" },
    ]

    // Check that the server is running and clear any data
    let data = await functions.postData(url + 'clear');

    data = await functions.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(0);

    data = await functions.postData(url + 'add', cities[0]);
    expect(data.status).toEqual(200);

    data = await functions.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("Saskatoon");

    // add a second with the same key which should be an error
    data = await functions.postData(url + 'add', cities[0]);
    expect(data.status).toEqual(400);

    // add a second which should be ok
    data = await functions.postData(url + 'add', cities[1]);
    expect(data.status).toEqual(200);

    data = await functions.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(2);
    expect(data[1].name).toBe("Amsterdam");

    data = await functions.postData(url + 'read', { key: 1 });
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("Saskatoon");

    data = await functions.postData(url + 'update', { key: 1, name: "Fort Mc" });
    expect(data.status).toEqual(200);

    data = await functions.postData(url + 'read', { key: 1 });
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("Fort Mc");

    data = await functions.postData(url + 'delete', { key: 1 });
    expect(data.status).toEqual(200);

    data = await functions.postData(url + 'read', { key: 1 });
    expect(data.status).toEqual(400);
});