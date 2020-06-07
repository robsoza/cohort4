import React, { useState, useEffect } from 'react';

function ListNodeListComp(props) {
    let myLinkedList;
    let nodesData = [];
    const [myNodes, setMyNodes] = useState(nodesData);

    useEffect(() => {
        function getData() {
            setMyNodes(nodesData);
        }
        getData()
    }, []);

    console.log(myNodes)

    if (props.list) {
        let currentNode = props.list.head;
        while (currentNode) {
            nodesData.push({
                subject: currentNode.subject,
                amount: currentNode.amount,
                key: currentNode.key,
                className: "Active-node"
            }); currentNode = currentNode.forwardNode;
        }

        if (props.list) {
            myLinkedList = Object.keys(nodesData).map(k => {
                const item = nodesData[k];
                return (<label key={item.key}>
                    (#{item.key})
                    {item.subject}
                     - {item.amount}
                </label>)
            });
        }


        const activeNodeStyle = {
            color: "blue",
            border: "solid",
            transform: "rotate(-360deg)",
        }


        function onClick(e) {
            props.showOne(e.target.getAttribute("mykey"));
        }

        const onAdd = () => {
            props.onAdd();
        }

        return (
            <div>
                <fieldset>
                    <legend>NodeList</legend>
                    <div>
                        <button onClick={setMyNodes}> First </button>
                        <button> Last </button>
                        <button> Next </button>
                        <button> Previous </button>
                        <button> Delete </button>
                    </div>
                    <div className="clList nodeList" onClick={onClick}>
                        {myLinkedList}
                    </div>
                </fieldset>
            </div>
        )
    }
}

export default ListNodeListComp;