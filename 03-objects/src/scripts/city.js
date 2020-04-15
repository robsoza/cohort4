/**
 * @description working with objects
 * @name City
 */

class City {

    constructor(name, lat, long, population) {
        this.name = name;
        this.latitude = Number(lat);
        this.longitude = Number(long);
        this.population = Number(population);
    }

    show() {
        return `City: ${this.name}, Lat: ${this.latitude}, Long: ${this.longitude}, Poulation: ${this.population}`
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
        } else if (this.population >= 1 && this.population < 100) {
            return "Hamlet";
        }
    }
}

class Community {

    constructor() {
        this.comms = [];
    }

    addCity(name, lat, long, population) {
        let postCity = new City(name, lat, long, population);
        fetch(ulr)
    }
}

export { City, Community };