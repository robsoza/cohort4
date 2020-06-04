import React from 'react';
import cityData from '../json/cityData.json'

function CitySearchComp(props) {

    function focusElement(name) {
        const el = document.querySelector(`[name=${name}]`);
        el.focus();
        el.select();
    }

    function onSave(e) {
        // Get all the input values into a city object to save
        let myCity = {};
        const idcityform = document.getElementById('idcityform');
        const inputs = idcityform.getElementsByTagName('input');
        let input = inputs[0].value.toUpperCase();

        Object.keys(cityData).forEach(k => {
            let cityName = cityData[k].city.toUpperCase();
            if (cityName === input) {
                let defaults = {
                    city: cityData[k].city,
                    latitude: cityData[k].latitude,
                    longitude: cityData[k].longitude,
                    population: cityData[k].population,
                    country: cityData[k].country
                };
                myCity = { ...defaults };
            }
        });

        // Do some simple validation
        try {

            if (!myCity.city) {
                focusElement('city');
                throw new Error(`Please check city's name`);
            }

            if (!isNewCity(myCity.city)) {
                throw new Error('City exists');
            }

            props.save(myCity);
            props.userMsg("Saved", "status");
            input = "";
        } catch (e) {
            props.userMsg(e.message, "error");
        }
        e.preventDefault();
    }

    function isNewCity(myCity) {
        myCity = myCity.toUpperCase()
        Object.keys(props.community).forEach(key => {
            let cityName = props.community[key].city.toUpperCase();
            if (cityName === myCity) { myCity = null }
        }); return myCity;
    }

    return (
        <div>
            <h1>My Community</h1>
            <form id="idcityform" onSubmit={onSave}>
                <fieldset>
                    <legend>Add a City</legend>
                    <div>
                        <label>Enter Your City's name:</label>
                        <input
                            name="city"
                            type='search'
                            className="city-input"
                            placeholder='City...'
                        />
                    </div>

                    <div>
                        <label>&nbsp;</label>
                        <button onClick={onSave}> Add </button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default CitySearchComp;