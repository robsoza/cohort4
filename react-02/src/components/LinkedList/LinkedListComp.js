import React, { useEffect, useContext } from 'react';
// import nodeFunc from '../../business/NodeLinkedListFunc';
import Loading from '../Loading/LoadingComp';
import NodeFormComp from './NodeFormComp';
import NodeListComp from './NodeListComp';
import { AppContext } from '../AppContext';

function LinkedListComp(props) {
    const context = useContext(AppContext);
    // const [ctrl] = useState(new nodeFunc.LinkedList());
    // const [node, setNode] = useState();
    // const [total, setTotal] = useState();
    // const [loading, setLoading] = useState();
    // const [message, setMessage] = useState({ text: "", class: "" });

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
        // setLoading(<Loading />);
        context.handleStateChange(
            [{
                state: 'loading',
                newState: <Loading />
            }]
        )
    }

    function endLoadingAnimation() {
        // setLoading('');
        context.handleStateChange(
            [{
                state: 'loading',
                newState: ''
            }]
        )
    }

    // onSave
    function onSave(subject, amount) {
        context.ctrl.insert(subject, amount);
        context.handleStateChange([{
            state: 'node',
            newState: context.ctrl.show()
        }]);
        context.handleStateChange([{
            state: 'total',
            newState: 'Total: ' + context.ctrl.total()
        }]);
        userMsg("added", "status");

    }

    function onClick(buttonName) {
        //if not first
        if (!context.ctrl.current) {
            userMsg("list is empty", "status")
        }
        //first
        else if (buttonName === "first") {
            context.ctrl.first();
            context.handleStateChange([{
                state: 'node',
                newState: context.ctrl.show()
            }])
        }
        //last
        else if (buttonName === "last") {
            context.ctrl.last();
            context.handleStateChange([{
                state: 'node',
                newState: context.ctrl.show()
            }])
        }
        //next
        else if (buttonName === "next") {
            context.ctrl.next();
            context.handleStateChange([{
                state: 'node',
                newState: context.ctrl.show()
            }])
        }
        //previous
        else if (buttonName === "previous") {
            context.ctrl.prev();
            context.handleStateChange([{
                state: 'node',
                newState: context.ctrl.show()
            }])
        }
        //delete
        else if (buttonName === "delete") {
            context.ctrl.delete();
            if (!context.ctrl.current) {
                context.handleStateChange([{
                    state: 'total',
                    newState: 'Total: ' + context.ctrl.total()
                }])
                context.handleStateChange([{
                    state: 'node',
                    newState: 'LinkedList'
                }])

            } else {
                context.handleStateChange([{
                    state: 'node',
                    newState: context.ctrl.show()
                }])
                context.handleStateChange([{
                    state: 'total',
                    newState: 'Total: ' + context.ctrl.total()
                }])
            }
        }
    }

    // set the message based on the class
    function userMsg(msg, type) {
        const cls = (type) ? 'cl' + type : 'clstatus';
        context.handleStateChange([{
            state: 'message',
            newState: { text: msg, class: cls }
        }])
    }

    const linkedlist = <NodeListComp onClick={onClick} node={context.state.node} total={context.state.total} />

    const output =
        <div>
            <NodeFormComp
                list={context.ctrl.list}
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
                {context.state.loading}
            </main>
            <label className={context.state.message.class}>{context.state.message.text}</label>
        </div>
    );
}

export default LinkedListComp;