import { City, Community } from './city.js'

test('does the show function work?', () => {
    let myCity = new City('Amsterdam', 52.3667, 4.8945, 822000);
    expect(myCity.show()).toBe('City: Amsterdam, Lat: 52.3667, Long: 4.8945, Poulation: 822000');
});
