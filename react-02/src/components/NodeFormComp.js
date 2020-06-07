import React, { useState } from 'react';

function ListNodeFormComp(props) {

    function focusElement(name) {
        const el = document.querySelector(`[name=${name}]`);
        el.focus();
        el.select();
    }

    function onSave(e) {

        const name = document.querySelector('input[name="name"]').value;
        const rate = document.querySelector('input[name="rate"]:checked').value;

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
            console.log(myNum)
            props.save(name, rate);
            props.userMsg("Saved", "status");
        } catch (e) {
            props.userMsg(e.message, "error");
        }
        e.preventDefault();
    }

    const [data] = useState({ one: "1", two: "2", three: "3", four: "4", five: "5" });
    const [myNum, setMyNum] = useInput('3');
    
    function useInput(initialValue) {
        const [value, setValue] = useState(initialValue);
        function handleChange(e) {
            setValue(e.target.value);
        }
            return [value, handleChange];  
    }

    return (
        <div>
            <h1>My LinkedList</h1>
            <form id="idnodeform" onSubmit={onSave}>
                <fieldset>
                    <legend>How do you feel today:</legend>
                    <div>
                        <label>Enter name & number:</label>
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
                        <button onClick={onSave}> Add </button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default ListNodeFormComp;