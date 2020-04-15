import { City, Community } from './city.js'

test('does the show function work?', () => {
    let myCity = new City('Amsterdam', 52.3667, 4.8945, 822000);
    expect(myCity.show()).toBe('City: Amsterdam, Lat: 52.3667, Long: 4.8945, Poulation: 822000');
});

test('does the movedIn function work?', () => {
    let myCity = new City('Amsterdam', 52.3667, 4.8945, 822000);
    myCity.movedIn(1);
    expect(myCity.population).toBe(822001);
    myCity.movedIn(10);
    expect(myCity.population).toBe(822011);

});

test('does the movedOut function work?', () => {
    let myCity = new City('Amsterdam', 52.3667, 4.8945, 822000);
    myCity.movedOut(1);
    expect(myCity.population).toBe(821999);
    myCity.movedOut(11);
    expect(myCity.population).toBe(821988);
});

test('does the howBig function work?', () => {
    let myCity = new City('Amsterdam', 52.3667, 4.8945, 822000);
    expect(myCity.howBig()).toBe('City');
});