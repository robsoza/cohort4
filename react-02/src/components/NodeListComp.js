import React from 'react';

function NodeListComp(props) {

    const onClick = (e) => {
        props.onClick(e.target.name)
    }

    return (
        <div>
            <fieldset>
                <legend>Linked List</legend>
                <label className='my-node'>{props.node}</label>
                <div>
                    <button name="first" onClick={onClick}> First </button>
                    <button name="last" onClick={onClick}> Last </button>
                    <button name="next" onClick={onClick}> Next </button>
                    <button name="previous" onClick={onClick}> Previous </button>
                    <button name="delete" onClick={onClick}> Delete </button>
                </div>
                <label className='my-node'>{props.total}</label>
            </fieldset>
        </div>
    )
}

export default NodeListComp;