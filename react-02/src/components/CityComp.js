import React, { useState, useEffect } from 'react';

import cityFunc from '../business/CityFunc';
import Loading from './LoadingComp';
import CitySearchComp from './CitySearchComp';
import CityListComp from './CityListComp';
import PopulationUpdateFormComp from './PopulationUpdateFormComp';
import CitySummaryComp from './CitySummaryComp';

function CityComp() {
    const [communityCtrl, setCommunityCtrl] = useState();
    const [city, setCity] = useState();
    const [loading, setLoading] = useState();
    const [message, setMessage] = useState({ text: "", class: "" });
    const [onDom, setOnDom] = useState();

    useEffect(() => {
        // This effect will run any time a state variable changes
    });

    useEffect(() => {
        // Load the community from the API only the first time
        async function fetchData() {
            try {
                startLoadingAnimation();
                const communityCtrl = new cityFunc.Community();
                setCommunityCtrl(communityCtrl);
                await communityCtrl.getCommunity();
                setOnDom('city-list');
                userMsg("Cities Loaded", "status");
            } catch (e) {
                userMsg("***** Turn the server on please! *****", "error");
            } finally {
                endLoadingAnimation();
            }
        }
        fetchData();
    }, []);

    function startLoadingAnimation() {
        setLoading(<Loading />);
    }

    function endLoadingAnimation() {
        setLoading('');
    }

    // onSave
    async function onSave(city) {
        await communityCtrl.addOrUpdate(city);
        setOnDom('city-list');
    }

    // on delete city
    async function onDelete(city) {
        await communityCtrl.delete(city);
        await communityCtrl.getCommunity();
        setOnDom('city-list');
        userMsg();
    }

    // Show onCancel
    function onCancel() {
        setOnDom('city-list');
        userMsg();
    }

    // Show Update form
    function onShow(key) {
        setCity(communityCtrl.get(key));
        setOnDom('PopulationUpdate-form');
        userMsg();
    }

    // set the message colour based on the class
    function userMsg(msg, type) {
        const cls = (type) ? 'cl' + type : 'clstatus';
        setMessage({ text: msg, class: cls });
    }

    async function updatePopulation(PopulationUpdate) {
        await communityCtrl.PopulationUpdate(PopulationUpdate);
        setOnDom('city-list');
        userMsg();
    }

    let output;
    if (onDom === "city-list") {
        output =
            <div>
            <CitySearchComp
                community={communityCtrl.community}
                save={onSave}
                userMsg={userMsg}
            />

                <CitySummaryComp
                    community={communityCtrl.community}
                />
                <CityListComp
                    community={communityCtrl.community}
                    save={onSave}
                    showOne={onShow}
                    userMsg={userMsg}
                />
            </div>
    } else if (onDom === "PopulationUpdate-form") {
        output =
            <PopulationUpdateFormComp
                city={city}
                update={updatePopulation}
                delete={onDelete}
                cancel={onCancel}
                userMsg={userMsg}
            />
    }

    return (
        <div>
            <main className="App-main">
                {output}
                {loading}
            </main>
            <label className={message.class}>{message.text}</label>
        </div>
    );
}

export default CityComp;