import postData from './Fetch.js'
global.fetch = require('node-fetch');
const url = 'http://localhost:5000/';

afterEach(async () => {
    await postData(url + 'clear');
})

test('test postdata gives a good error if api server not started', async () => {
    try {
        // dummy url:port that does not exist
        const url = 'http://localhost:5678/';
        const data = await postData(url);
        // The above line should throw an error and we should never get to the next line
        expect('').toBe('This bad port # should have caused an exception.');
    }
    catch (e) {
        expect(e.code).toBe('ECONNREFUSED');
    }
    finally {
    }
});

test('test that the fetch works?', async () => {

    const cities = [
        { key: 1, name: 'Saskatoon' },
        { key: 2, name: 'Amsterdam' },
    ]

    // Check that the server is running and clear any data
    let data = await postData(url + 'clear');

    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(0);

    data = await postData(url + 'add', cities[0]);
    expect(data.status).toEqual(200);

    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe('Saskatoon');

    // add a second with the same key which should be an error
    data = await postData(url + 'add', cities[0]);
    expect(data.status).toEqual(400);

    // add a second which should be oka
    data = await postData(url + 'add', cities[1]);
    expect(data.status).toEqual(200);

    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(2);
    expect(data[1].name).toBe('Amsterdam');

    data = await postData(url + 'read', { key: 1 });
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe('Saskatoon');

    data = await postData(url + 'update', { key: 1, name: 'Fort Mc' });
    expect(data.status).toEqual(200);

    data = await postData(url + 'read', { key: 1 });
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe('Fort Mc');

    data = await postData(url + 'delete', { key: 1 });
    expect(data.status).toEqual(200);

    data = await postData(url + 'read', { key: 1 });
    expect(data.status).toEqual(400);
});