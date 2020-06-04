import postData from './Fetch.js'
const url = 'http://localhost:5000/';

class Community {

    constructor() {
        this.community = {};
        this.lastKey = 0;
    }

    length() {
        return Object.keys(this.community).length;
    }

    get(key) {
        return this.community[key];
    }

    getNewCity() {
        return new City({});
    }

    async getCommunity() {
        const data = await postData(url + "all");
        const community = {};
        data.forEach(x => {
            community[x.key] = x;
            this.lastKey = (x.key > this.lastKey) ? x.key : this.lastKey;
        });

        this.community = community;
    }

    async addOrUpdate(city) {
        let theUrl;

        if (city.key) {
            theUrl = url + "update"
        } else {
            theUrl = url + "add"
            this.lastKey++;
            city.key = this.lastKey;
        }

        await postData(theUrl, city);
        this.community[city.key] = city;
    }

    async populationUpdate(cityUpdate) {
        let theUrl = url + "update";
        let city = new City(this.get(cityUpdate.key));

        if (cityUpdate.type === "movedIn") {
            city.movedIn(Number(cityUpdate.numOfPeople));
        } else if (cityUpdate.type === "movedOut") {
            city.movedOut(Number(cityUpdate.numOfPeople));
        }

        await postData(theUrl, city);
        this.community[city.key] = city;
    }

    total() {
        const a = this.community;
        let total = 0;
        Object.keys(a).forEach(function (key) {
            total += a[key].balance;
        })
        return total;
    }

    async delete(city) {
        let theUrl;
        if (city.key) {
            theUrl = url + "delete";
        }
        await postData(theUrl, city);
        this.community[city.key] = city;
    }
}

class City {
    static lastKey = 0;
    constructor(obj) {
        const defaults = { city: '', latitude: "", longitude: "", population: "", country: "", key: "" }
        const data = { ...defaults, ...obj };
        this.city = data.city;
        this.latitude = Number(data.latitude);
        this.longitude = Number(data.longitude);
        this.population = Number(data.population);
        this.country = Number(data.country);
        this.key = data.key;
    }

    newKey() {
        City.lastKey++;
        this.key = City.lastKey;
    }

    movedIn(num) {
        this.population += Number(num);
    }

    movedOut(num) {
        this.population -= Number(num);
    }
}

export default { City, Community, url };