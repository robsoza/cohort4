import React, { useState } from 'react';

export default function ListNodeFormComp(props) {

    function focusElement(name) {
        const el = document.querySelector(`[name=${name}]`);
        el.focus();
        el.select();
    }

    function onSave(e) {

        let name = document.querySelector('input[name="name"]').value;
        let rate = document.querySelector('input[name="rate"]:checked').value;

        // Do some simple validation
        try {
            if (!name) {
                focusElement('name');
                throw new Error('Name can not be blank');
            }

            if (!rate) {
                focusElement('rate');
                throw new Error('rate can not be blank');
            }

            props.save(name, rate);
            props.userMsg("Saved", "status");
            document.querySelector('input[name="name"]').value = "";

        } catch (e) {
            props.userMsg(e.message, "error");
        }
        e.preventDefault();
    }

    const [data] = useState({ one: "1", two: "2", three: "3", four: "4", five: "5" });
    const [myNum, setMyNum] = useInput('1');

    function useInput(initialValue) {
        const [value, setValue] = useState(initialValue);
        function handleChange(e) {
            setValue(e.target.value);
        }
        return [value, handleChange];
    }

    return (
        <div>
            <h1>LinkedList</h1>
            <form id="idnodeform" onSubmit={onSave}>
                <fieldset>
                    <legend>Subject & amount:</legend>
                    <div>
                        <label>Enter subject & amount:</label>
                        <input
                            name="name"
                            placeholder='name...'
                        />
                    </div>

                    <label>
                        <input type="radio" name="rate" value={data.one}
                            checked={data.one === myNum}
                            onChange={setMyNum}
                        /> 1
                    </label>
                    <label>
                        <input type="radio" name="rate" value={data.two}
                            checked={data.two === myNum}
                            onChange={setMyNum}
                        /> 2
                    </label>
                    <label>
                        <input type="radio" name="rate" value={data.three}
                            checked={data.three === myNum}
                            onChange={setMyNum}
                        /> 3
                    </label>
                    <label>
                        <input type="radio" name="rate" value={data.four}
                            checked={data.four === myNum}
                            onChange={setMyNum}
                        /> 4
                    </label>
                    <label>
                        <input type="radio" name="rate" value={data.five}
                            checked={data.five === myNum}
                            onChange={setMyNum}
                        /> 5
                    </label>
                    <div>
                        <button onClick={onSave}> Insert </button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}