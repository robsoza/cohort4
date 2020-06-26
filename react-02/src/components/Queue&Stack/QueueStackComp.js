import React, { useContext, useEffect, useRef } from 'react';
import FifoLifoComp from './FifoLifoComp';
import { AppContext } from '../AppContext';

export default function QueueStackComp() {
    const context = useContext(AppContext);
    const isCurrent = useRef(true);

    useEffect(() => {
        if (isCurrent.current) getData()
        const timer = setTimeout(() => { userMsg() }, 5000);
        return () => clearTimeout(timer);
    });

    function getData() {
        try {
            userMsg("Welcome", "status");
            isCurrent.current = false;
        } catch (e) {
            userMsg("***** Error*****", "error");
        }
    }

    function userMsg(msg, type) {
        const cls = (type) ? 'cl' + type : 'clstatus';
        context.handleStateChange([{
            state: 'fifoLifoMessage',
            newState: { text: msg, class: cls }
        }])
    }

    function onSave() {
        context.handleStateChange([{
            state: 'fifoNode',
            newState: context.state.fifoNode + 1
        }]);
        context.queueCtrl.enqueue(context.state.fifoNode);
        context.handleStateChange([{
            state: 'fifoQueue',
            newState: context.queueCtrl.show()
        }]);

        context.handleStateChange([{
            state: 'lifoNode',
            newState: context.state.lifoNode + 1
        }]);
        context.stackCtrl.putIn(context.state.lifoNode);
        context.handleStateChange([{
            state: 'lifoStack',
            newState: context.stackCtrl.show()
        }]);

        userMsg("Added: " + context.state.fifoNode, "status");
    }

    function onDelete() {
        let qArr = context.queueCtrl.show();
        let sArr = context.stackCtrl.show();
        let first = qArr[0];
        let last = sArr[0];

        if (context.queueCtrl.show() !== 'Empty Queue') {
            userMsg("Deleted  Fifo:  " + first + ", Lifo:  " + last);
        } else { userMsg() }

        context.queueCtrl.dequeue();
        context.handleStateChange([{
            state: 'fifoQueue',
            newState: context.queueCtrl.show()
        }]);

        context.stackCtrl.takeOut();
        context.handleStateChange([{
            state: 'lifoStack',
            newState: context.stackCtrl.show()
        }]);
    }

    return (
        <div>
            <FifoLifoComp
                queue={context.state.fifoQueue}
                stack={context.state.lifoStack}
                onSave={onSave}
                onDelete={onDelete}
                userMsg={userMsg} />
            <label className={context.state.fifoLifoMessage.class}>{context.state.fifoLifoMessage.text}</label>
        </div>
    )
}