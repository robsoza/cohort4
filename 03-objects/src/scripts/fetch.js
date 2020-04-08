/**
 * @description conpetency 920 - Fetch API
 * @name fetchFunc
 */

const fetchFunc = {

    getFirstName(data) {
        try {
            return (data[0].name);
        } catch (err) {
            console.log(err);
            throw err;
        }
    },
}

export default fetchFunc;