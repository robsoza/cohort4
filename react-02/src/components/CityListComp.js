import React from 'react';
import cityData from '../json/cityData.json'

function CityListComp(props) {

    let myCityList;
    if (props.community) {
        myCityList = Object.keys(props.community).map(k => {
            const c = props.community[k];
            return (
                <li key={c.key} mykey={c.key}> {c.city} <br></br>
                    <span mykey={c.key}> Lat: {c.latitude}</span>,
                    <span mykey={c.key}> long: {c.longitude}</span>,
                    <span mykey={c.key}> pupulation: {c.population}</span><br></br>
                    <span mykey={c.key}> Is a {howBig(c)}</span>,
                    <span mykey={c.key}> in the {whichSphere(c)}</span>
                </li>
            )
        });
    }

    function howBig(city) {
        if (city.population > 100000) {
            return "City";
        } if (city.population >= 20000 && city.population < 100000) {
            return "Large Town";
        } if (city.population >= 1000 && city.population < 20000) {
            return "Town";
        } if (city.population >= 100 && city.population < 1000) {
            return "Village";
        } else if (city.population >= 1 && city.population < 100) {
            return "Hamlet";
        }
    }

    function whichSphere(city) {
        if (city.latitude > 0) {
            return "Northern Hemisphere";
        } if (city.latitude < 0) {
            return 'Southern Hemisphere';
        } if (city.latitude === 0) {
            return 'The Equator';
        } return 'error';
    }

    function onSave(e) {
        let randomCity = {};

        Object.keys(cityData).forEach(k => {
            randomCity = cityData[Math.floor(Math.random() * cityData.length)]
        });

        try {
            if (!randomCity) {
                throw new Error('No cities are available');
            }

            if (!isNewCity(randomCity.city)) {
                throw new Error('City exists');
            }

            props.save(randomCity);
            props.userMsg("Added", "clstatus");
        } catch (e) {
            props.userMsg(e.message, "error");
        }
        e.preventDefault();
    }

    function onClick(e) {
        props.showOne(e.target.getAttribute("mykey"));
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
            <fieldset>
                <legend>City History</legend>
                <ol className="clList cityList" onClick={onClick}>
                    {myCityList}
                </ol>
                <button onClick={onSave}>Add Random City</button>
            </fieldset>
        </div>
    )
}

export default CityListComp;