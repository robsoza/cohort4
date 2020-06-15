import React from 'react';

function FifoComp(props) {

  function onSave() {
    props.onSave();
  }

  function onDelete() {
    props.onDelete();
  }

  function onPutOut() {
    props.onPutOut();
  }

  return (
    <div>
      <div>
        <h1>My Queue & Stack</h1>
      </div>
      <h3>FIFO Queue:</h3>
      <h1>{props.queue}</h1><br />
      <button onClick={onSave}>EnQueue</button><br />
      <div>
        <button onClick={onDelete}>DeQueue / PutIn</button><br />
        <button onClick={onPutOut}>PutOut</button><br />
      </div>
      <h3>LIFO Stack:</h3>
      <textarea value={props.stack} ></textarea>
    </div>
  )
}

export default FifoComp;