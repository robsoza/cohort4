import React from 'react';

function PopulationUpdateFormComp(props) {
    let city = props.city;
    console.log(city);
    function focusElement(name) {
        const cityForm = document.getElementById('idcityform');
        const el = cityForm.querySelector(`[name=${name}]`);
        el.focus();
        el.select();
    }

    function onSave(e) {
        const update = {};
        update.key = city.key;
        const idcityform = document.getElementById('idcityform');
        const inputs = idcityform.querySelectorAll('input,select');

        for (let i = 0; i < inputs.length; i++) {
            update[inputs[i].name] = inputs[i].value;
        }

        try {
            if (!update.numOfPeople) {
                focusElement('numOfPeople');
                throw new Error('Number of People can not be blank');
            }

            if (!update.city) {
                focusElement('city');
                throw new Error('Name can not be blank');
            }

            if (!update.type) {
                throw new Error('Type can not be blank');
            }

            props.updatePopulation(update);
            props.userMsg("Added", "clstatus");
        } catch (e) {
            props.userMsg(e.message, "error");
        }
        e.preventDefault();
    }

    function onDelete(e) {
        const cityToDelete = {};
        cityToDelete.key = city.key;
        const idcityform = document.getElementById('idpopulationform');
        const inputs = idcityform.getElementsByTagName('input');

        for (let i = 0; i < inputs.length; i++) {
            cityToDelete[inputs[i].name] = inputs[i].value;
        }

        try {
            if (!cityToDelete.city) {
                focusElement('city');
                throw new Error('Name can not be blank');
            }

            props.delete(cityToDelete);
            props.userMsg("Deleted", "clstatus");
        } catch (e) {
            props.userMsg(e.message, "error");
        }
        e.preventDefault();
    }

    function onCancel(e) {
        props.cancel(city);
        e.preventDefault();
    }

    return (
        <div>
            <h1>My Citys</h1>
            <fieldset>
                <legend>Make A Population Update</legend>
                <form id="idpopulationform" onSubmit={onSave}>
                    <label>Number of People:</label>
                    <input name="numOfPeople" placeholder="Enter number of people..." />

                    <label>City's Name:</label>
                    <input name='city' defaultValue={city.city} />

                    <label>Update's Type:</label>
                    <select name='type'>
                        <option value=''>Select a type...</option>
                        <option value="movedIn">Moved In</option>
                        <option value="movedOut">Moved Out</option>
                    </select>
                    <div>
                        <label>&nbsp;</label>
                        <button onClick={onSave}>Save</button>
                        <button onClick={onDelete}>Delete</button>
                        <button onClick={onCancel}>Cancel</button>
                    </div>
                </form>
            </fieldset>
        </div>
    )
}

export default PopulationUpdateFormComp;