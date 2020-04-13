/**
 * @description conpetency 920 - Fetch API
 * @name functions
 */

const functions = {

    url: 'https://jsonplaceholder.typicode.com/users',

    getFirstName(data) {
        try {
            return data[0].name;
        } catch (error) {
            throw error;
        }
    },

    getAllFirstNames(data) {
        try {
            return data.map(d => d.name);
        } catch (error) {
            throw error;
        }
    },

    async getUsers() {
        try {
            const response = await fetch(this.url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw (error);
        }
    },

    async workWithData() {
        const data = await functions.getUsers();
        console.log(functions.getFirstName(data));
        console.log(functions.getAllFirstNames(data));
    },

    async postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force- cache, only -if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return await response.json(); // parses JSON response into native JavaScript objects
    }
}
export default functions;