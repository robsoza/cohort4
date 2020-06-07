import React, { useState, useEffect } from 'react';

import nodeFunc from '../business/NodeLinkedListFunc';
import Loading from './LoadingComp';
import NodeFormComp from './NodeFormComp';
import NodeListComp from './NodeListComp';

function NodeComp() {
    const [listCtrl, setListCtrl] = useState();
    const [list, setList] = useState();
    const [loading, setLoading] = useState();
    const [message, setMessage] = useState({ text: "", class: "" });
    const [onDom, setOnDom] = useState();

    useEffect(() => {
        // Load the list only the first time
        function getData() {
            try {
                startLoadingAnimation();
                const listCtrl = new nodeFunc.LinkedList();
                setListCtrl(listCtrl);
                setList(listCtrl.getNewList());
                setOnDom('node-list');
                userMsg("Nodes Loaded", "status");
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
    function onSave(name, rate) {
        list.insert(name, rate);
        setOnDom('node-list');
        userMsg();
    }

    // on delete node
    function onDelete(node) {
        listCtrl.delete(node);
        listCtrl.get();
        setOnDom('node-list');
        userMsg();
    }

    // set the message based on the class
    function userMsg(msg, type) {
        const cls = (type) ? 'cl' + type : 'clstatus';
        setMessage({ text: msg, class: cls });
    }

    let output;
    if (onDom === "node-list") {
        output =
            <div>
                <NodeFormComp
                    list={list}
                    ctrl={listCtrl.list}
                    save={onSave}
                    userMsg={userMsg}
                />

                <NodeListComp
                    list={list}
                    ctrl={listCtrl.list}
                    userMsg={userMsg}
                />
            </div>
    } else if (onDom === "node-form") {
        output =
            <NodeFormComp
                list={list}
                ctrl={listCtrl.list}
                save={onSave}
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

export default NodeComp;