/**
 * @description conpetency 920 - Fetch API
 * @name fetchFunc
 */

const fetchFunc = {

    getFirstName(data) {
        try {
            return (data[0].name);
        } catch (err) {
            throw err;
        }
    },

    getAllFirstNames(data) {
        try {
            return data.map(d => d.name);
        } catch (err) {
            throw err;
        }
    },

}

export default fetchFunc;