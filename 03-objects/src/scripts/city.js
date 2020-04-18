/**
 * @description working with objects
 * @name City
 */

import functions from './fetch.js'

class City {

    constructor(name, lat, long, population) {
        this.name = name;
        this.latitude = Number(lat);
        this.longitude = Number(long);
        this.population = Number(population);
    }

    show() {
        try {
            return `City: ${this.name}, Lat: ${this.latitude}, Long: ${this.longitude}, Poulation: ${this.population}`
        } catch (error) {
            throw ('ERROR')
        }
    }

    movedIn(num) {
        try {
            this.population += Number(num);
        } catch (error) {
            throw ('ERROR')
        }
    }

    movedOut(num) {
        try {
            this.population -= Number(num);
        } catch (error) {
            throw ('ERROR')
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
            throw ('ERROR')
        }
    }
}

class Community {

    constructor() {
        this.url = 'http://localhost:5000/all';
    }

    whichSphere(city, community) {
        let myCity = community.find(c => c.name === name);
        if (myCity.latitude > 0) {
            return "Northern Hemisphere";
        } if (myCity.latitude < 0) {
            return 'Southern Hemisphere';
        } if (myCity.latitude === 0) {
            return 'The equator';
        } else return 'Error';
    }
}

export { City, Community };