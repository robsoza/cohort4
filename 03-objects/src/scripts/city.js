import functions from './fetch.js'

/**
 * @description working with objects
 * @name City
 */

class City {

    constructor(name, lat, long, population, key) {
        this.name = name;
        this.latitude = Number(lat);
        this.longitude = Number(long);
        this.population = Number(population);
        this.key = key;
    }

    show() {
        return `City: ${this.name}, Lat: ${this.latitude}, Long: ${this.longitude}, Poulation: ${this.population}`;
    }

    movedIn(num) {
        this.population += Number(num);
    }

    movedOut(num) {
        this.population -= Number(num);
    }

    howBig() {
        if (this.population > 100000) {
            return "City";
        } if (this.population >= 20000 && this.population < 100000) {
            return "Large Town";
        } if (this.population >= 1000 && this.population < 20000) {
            return "Town";
        } if (this.population >= 100 && this.population < 1000) {
            return "Village";
        }
        return "Hamlet";
    }
}

class Community {

    constructor() {
        this.url = 'http://localhost:5000/';
        this.comms = [];
    }

    async createCity(city, lat, long, population) {
        let k;
        let data = await functions.postData(this.url + 'all');
        if (data.length === 0) { k = 0 } else {
            k = data.sort((a, b) => { return b.key - a.key });
            k = k[0].key;
        }
        let myCity = new City(city, lat, long, population, k + 1);
        data = await functions.postData(this.url + 'add', myCity);
        return data;
    }

    async getCommunity() {
        let data = await functions.postData(this.url + 'all');
        this.comms = [];
        this.comms = await JSON.parse(JSON.stringify(data));
        return this.comms;
    }

    getLocalData() {
        return this.comms;
    }

    async updatePopulation(c) {
        let data = await functions.postData(this.url + 'all');
        data = await functions.postData(this.url + 'update', { key: c.key, name: c.name, latitude: c.latitude, longitude: c.longitude, population: c.population });
        return data;

    }

    whichSphere(city) {
        let myCity = this.comms.find(c => c.name === city);
        if (myCity.latitude > 0) {
            return "Northern Hemisphere";
        } if (myCity.latitude < 0) {
            return 'Southern Hemisphere';
        }
        return 'The Equator';
    }

    async getMostNorthern() {
        let data = await functions.postData(this.url + 'all');
        data = data.sort((a, b) => { return b.latitude - a.latitude });
        return data[0].name;
    }

    async getMostSouther() {
        let data = await functions.postData(this.url + 'all');
        data = data.sort((a, b) => { return a.latitude - b.latitude });
        return data[0].name;
    }

    async getPopulation() {
        let data = await functions.postData(this.url + 'all');
        let pop = data.map(c => c.population);
        pop = pop.reduce((a, b) => (Number(a) + Number(b)));
        return Number(pop).toLocaleString();
    }

    async deleteCity(city) {
        let data = await functions.postData(this.url + 'all');
        let myCity = data.find(c => c.name === city);
        let k = { key: myCity.key };
        data = await functions.postData(this.url + 'delete', k);
        return data;
    }

    isNewCity(city) {
        for (let c in this.comms) {
            if (this.comms[c].name === city) {
                return 'ERROR';
            }
        } return city;
    }

    isAcoordinate(num) {
        if (isNaN(num)) {
            return 'ERROR';
        } return num;
    }
}

export { City, Community };