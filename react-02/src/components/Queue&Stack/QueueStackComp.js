import React, { useState, useEffect } from 'react';
import func from '../../business/QueueStackFunc';
import FifoLifoComp from './FifoLifoComp';

function QueueStackComp() {

    const [queueCtrl] = useState(new func.FifoQueue());
    const [stackCtrl] = useState(new func.LifoStack());
    const [fifo, setFifo] = useState();
    const [lifo, setLifo] = useState();
    const [fifoNode, setFifoNode] = useState(1);
    const [lifoNode, setLifoNode] = useState(1);
    const [message, setMessage] = useState({ text: "", class: "" });

    useEffect(() => {
        setTimeout(() => { userMsg() }, 9000);
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
        const cls = (type) ? 'cl' + type : 'clstatus';
        setMessage({ text: msg, class: cls });
    }

    function onSave() {
        setFifoNode(fifoNode + 1);
        queueCtrl.enqueue(fifoNode);
        setFifo(queueCtrl.show());

        setLifoNode(lifoNode + 1);
        stackCtrl.putIn(lifoNode)
        setLifo(stackCtrl.show());
        userMsg("Added: " + fifoNode, "status");
    }

    function onDelete() {
        let qArr = queueCtrl.show();
        let sArr = stackCtrl.show();
        let first = qArr[0];
        let last = sArr[0];

        if (queueCtrl.show() !== 'Empty Queue') {
            userMsg("Deleted  Fifo:  " + first + ", Lifo:  " + last);
        } else { userMsg() }

        queueCtrl.dequeue();
        setFifo(queueCtrl.show());

        stackCtrl.takeOut();
        setLifo(stackCtrl.show());
    }

    return (
        <div>
            <FifoLifoComp
                queue={fifo}
                stack={lifo}
                onSave={onSave}
                onDelete={onDelete}
                userMsg={userMsg} />
            <label className={message.class}>{message.text}</label>
        </div>
    )
}

export default QueueStackComp; 