import React, { useState, useEffect } from 'react';
import func from '../business/QueueStackFunc';
import FifoComp from './FifoComp';

function QueueStackComp() {

    const [ctrl] = useState(new func.FifoQueue());
    const [message, setMessage] = useState({ text: "", class: "" });

    useEffect(() => {
        // This effect will run any time a state variable changes
        console.log('----useEffect: general');
    });

    useEffect(() => {
        function fetchData() {
            try {
                userMsg("Welcome", "status");
            } catch (e) {
                userMsg("***** Error*****", "error");
            }
        }
        fetchData();
    }, []);

    function userMsg(msg, type) {
        // set the class based on the type of message
        const cls = (type) ? 'cl' + type : 'clstatus';
        setMessage({ text: msg, class: cls });
    }

    function save(el) {
        ctrl.enqueue(el);
    }

    return (
        <div>
            <FifoComp />
            <div className={message.class}>{message.text}</div>
        </div>
    )
}

export default QueueStackComp; 