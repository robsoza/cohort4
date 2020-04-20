/**
 * @description working with objects
 * @name City
 */

import functions from './fetch.js'
global.fetch = require('node-fetch');

class City {

    constructor(name, lat, long, population, key) {
        this.name = name;
        this.latitude = Number(lat);
        this.longitude = Number(long);
        this.population = Number(population);
        this.key = key;
    }

    show() {
        try {
            return `City: ${this.name}, Lat: ${this.latitude}, Long: ${this.longitude}, Poulation: ${this.population}`;
        } catch (error) {
            throw (error);
        }
    }

    movedIn(num) {
        try {
            this.population += Number(num);
        } catch (error) {
            throw (error);
        }
    }

    movedOut(num) {
        try {
            this.population -= Number(num);
        } catch (error) {
            throw (error);
        }
    }

    howBig() {
        try {
            if (this.population > 100000) {
                return "City";
            } if (this.population >= 20000 && this.population < 100000) {
                return "Large Town";
            } if (this.population >= 1000 && this.population < 20000) {
                return "Town";
            } if (this.population >= 100 && this.population < 1000) {
                return "Village";
            } else if (this.population >= 1 && this.population < 100) {
                return "Hamlet";
            }
        } catch (error) {
            throw (error);
        }
    }
}

class Community {

    constructor() {
        this.url = 'http://localhost:5000/';
    }

    async createCity(city, lat, long, population) {
        try {
            let data = await functions.postData(this.url + 'all');
            let myCity = new City(city, lat, long, population, data.length + 1);
            data = await functions.postData(this.url + 'add', myCity);
            data = await functions.postData(this.url + 'all');
            return data;
        } catch (error) {
            throw (error);
        }
    }

    async deleteCity(city) {
        try {
            let data = await functions.postData(this.url + 'all');
            if (data.length > 0) {
                let myCity = data.find(c => c.name === city);
                let k = 'key: ' + myCity.key;
                data = await functions.postData(this.url + 'delete', { k });
                data = await functions.postData(this.url + 'all');
                return data;
            } return 'ERROR';
        } catch (error) {
            throw (error);
        }
    }

    async whichSphere(city) {
        try {
            let data = await functions.postData(this.url + 'all');
            if (data.length > 0) {
                let myCity = data.find(c => c.name === city);
                if (myCity.latitude > 0) {
                    return "Northern Hemisphere";
                } if (myCity.latitude < 0) {
                    return 'Southern Hemisphere';
                } if (myCity.latitude === 0) {
                    return 'The Equator';
                }
            } return 'ERROR';
        } catch (error) {
            throw (error);
        }
    }

    async getMostNorthern() {
        try {
            let data = await functions.postData(this.url + 'all');
            if (data.length > 0) {
                data = data.sort((a, b) => { return b.latitude - a.latitude });
                return data[0].name;
            } return 'ERROR';
        } catch (error) {
            throw (error);
        }
    }

    async getMostSouther() {
        try {
            let data = await functions.postData(this.url + 'all');
            if (data.length > 0) {
                data = data.sort((a, b) => { return a.latitude - b.latitude });
                return data[0].name;
            } return 'ERROR';
        } catch (error) {
            throw (error);
        }
    }

    async getPopulation() {
        try {
            let data = await functions.postData(this.url + 'all');
            if (data.length > 0) {
                let pop = data.map(c => c.population);
                pop = pop.reduce((a, b) => (Number(a) + Number(b)));
                return Number(pop).toLocaleString();
            } return 'ERROR';
        } catch (error) {
            throw (error);
        }
    }

    async isNewCity(city) {
        try {
            let data = await functions.postData(this.url + 'all');
            for (let c in data) {
                if (data[c].name === city) {
                    return 'ERROR';
                }
            } return city;
        } catch (error) {
            throw (error);
        }
    }

    isAcoordinate(num) {
        if (isNaN(num)) {
            return 'ERROR';
        } return num;
    }

}

export { City, Community };