import React, { useState, useEffect } from 'react';
import nodeFunc from '../../business/NodeLinkedListFunc';
import Loading from '../Loading/LoadingComp';
import NodeFormComp from './NodeFormComp';
import NodeListComp from './NodeListComp';

function LinkedListComp(props) {
    const [ctrl] = useState(new nodeFunc.LinkedList());
    const [node, setNode] = useState();
    const [total, setTotal] = useState();
    const [loading, setLoading] = useState();
    const [message, setMessage] = useState({ text: "", class: "" });

    useEffect(() => {
        console.log('----useEffect: general');
    });

    useEffect(() => {
        // Load the list only the first time
        function getData() {
            try {
                startLoadingAnimation();
                userMsg("LinkedList", "status");
            } catch (e) {
                userMsg("***** Turn the server on please! *****", "error");
            } finally {
                endLoadingAnimation();
            }
        }
        getData();
    }, []);

    function startLoadingAnimation() {
        setLoading(<Loading />);
    }

    function endLoadingAnimation() {
        setLoading('');
    }

    // onSave
    function onSave(subject, amount) {
        ctrl.insert(subject, amount);
        setNode(ctrl.show())
        setTotal('Total: ' + ctrl.total());
        userMsg();
    }

    function onClick(buttonName) {
        //if not first
        if (!ctrl.current) {
            userMsg("list is empty", "status")
        }
        //first
        else if (buttonName === "first") {
            ctrl.first();
            setNode(ctrl.show());
        }
        //last
        else if (buttonName === "last") {
            ctrl.last();
            setNode(ctrl.show());
        }
        //next
        else if (buttonName === "next") {
            ctrl.next();
            setNode(ctrl.show());
        }
        //previous
        else if (buttonName === "previous") {
            ctrl.prev();
            setNode(ctrl.show());
        }
        //delete
        else if (buttonName === "delete") {
            ctrl.delete();
            if (!ctrl.current) {
                setTotal('Total: ' + ctrl.total());
                setNode("LinkedList");
            } else {
                setNode(ctrl.show())
                setTotal('Total: ' + ctrl.total());
            }
        }
    }

    // set the message based on the class
    function userMsg(msg, type) {
        const cls = (type) ? 'cl' + type : 'clstatus';
        setMessage({ text: msg, class: cls });
    }

    const linkedlist = <NodeListComp onClick={onClick} node={node} total={total} />

    const output =
        <div>
            <NodeFormComp
                list={ctrl.list}
                save={onSave}
                userMsg={userMsg}
            />
            <div className="node-list">
                {linkedlist}
            </div>
        </div>

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

export default LinkedListComp;