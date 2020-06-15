import React, { useState, useEffect } from 'react';
import func from '../business/QueueStackFunc';
import FifoComp from './FifoComp';



function QueueStackComp() {

    const [queueCtrl] = useState(new func.FifoQueue());
    const [stackCtrl] = useState(new func.LifoStack());
    const [fifo, setFifo] = useState();
    const [lifo, setLifo] = useState();
    let [fifoNode, setFifoNode] = useState(1);
    let [lifoNode, setLifoNode] = useState(1);
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

    function onSave() {
        setFifoNode(fifoNode + 1)
        queueCtrl.enqueue(fifoNode);
        setFifo(queueCtrl.show());
    }


    function onDelete() {
        queueCtrl.dequeue(lifoNode);
        setFifo(queueCtrl.show());

        setLifoNode(lifoNode + 1)
        stackCtrl.putIn(lifoNode)
        setLifo(stackCtrl.show());
    }

    function onPutOut() {
        stackCtrl.takeOut();
        setLifo(stackCtrl.show());
    }

    return (
        <div>
            <FifoComp
                queue={fifo}
                stack={lifo}
                onSave={onSave}
                onDelete={onDelete}
                onPutOut={onPutOut}
                userMsg={userMsg} />
        </div>
    )
}

export default QueueStackComp; 