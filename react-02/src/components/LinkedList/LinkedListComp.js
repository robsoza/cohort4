import React, { useEffect, useContext, useRef } from 'react';
import Loading from '../Loading/LoadingComp';
import NodeFormComp from './NodeFormComp';
import NodeListComp from './NodeListComp';
import { AppContext } from '../AppContext';

function LinkedListComp() {
    const context = useContext(AppContext);
    const isCurrent = useRef(true);

    // const [node, setNode] = useState();
    useEffect(() => { if (isCurrent.current) getData() });
    useEffect(() => {
        isCurrent.current = false;
        setTimeout(() => { userMsg() }, 9000);
    });

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
        context.listCtrl.insert(subject, amount);
        context.handleStateChange([{
            state: 'node',
            newState: context.listCtrl.show()
        }]);
        context.handleStateChange([{
            state: 'total',
            newState: 'Total: ' + context.listCtrl.total()
        }]);
        userMsg("added", "status");

    }

    function onClick(buttonName) {
        //if not first
        if (!context.listCtrl.current) {
            userMsg("list is empty", "status")
        }
        //first
        else if (buttonName === "first") {
            context.listCtrl.first();
            context.handleStateChange([{
                state: 'node',
                newState: context.listCtrl.show()
            }])
        }
        //last
        else if (buttonName === "last") {
            context.listCtrl.last();
            context.handleStateChange([{
                state: 'node',
                newState: context.listCtrl.show()
            }])
        }
        //next
        else if (buttonName === "next") {
            context.listCtrl.next();
            context.handleStateChange([{
                state: 'node',
                newState: context.listCtrl.show()
            }])
        }
        //previous
        else if (buttonName === "previous") {
            context.listCtrl.prev();
            context.handleStateChange([{
                state: 'node',
                newState: context.listCtrl.show()
            }])
        }
        //delete
        else if (buttonName === "delete") {
            context.listCtrl.delete();
            if (!context.listCtrl.current) {
                context.handleStateChange([{
                    state: 'total',
                    newState: 'Total: ' + context.listCtrl.total()
                }])
                context.handleStateChange([{
                    state: 'node',
                    newState: 'LinkedList'
                }])

            } else {
                context.handleStateChange([{
                    state: 'node',
                    newState: context.listCtrl.show()
                }])
                context.handleStateChange([{
                    state: 'total',
                    newState: 'Total: ' + context.listCtrl.total()
                }])
            }
        }
    }

    // set the listMessage based on the class
    function userMsg(msg, type) {
        const cls = (type) ? 'cl' + type : 'clstatus';
        context.handleStateChange([{
            state: 'listMessage',
            newState: { text: msg, class: cls }
        }])
    }

    const linkedlist = <NodeListComp onClick={onClick} node={context.state.node} total={context.state.total} />

    const output =
        <div>
            <NodeFormComp
                list={context.listCtrl.list}
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
            <label className={context.state.listMessage.class}>{context.state.listMessage.text}</label>
        </div>
    );
}

export default LinkedListComp;