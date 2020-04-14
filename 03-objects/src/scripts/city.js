/**
 * @description working with objects
 * @name City
 */

class City {

    constructor(name, lat, long, pop) {
        this.name = name;
        this.latitude = lat;
        this.longitude = long;
        this.population = pop;
    }

    show() {
        return `City: ${this.name}, Lat: ${this.latitude}, Long: ${this.longitude}, Poulation: ${this.population}`
    }
}

class Community {

    constructor() {
        this.comms = [];
    }
}

export { City, Community };