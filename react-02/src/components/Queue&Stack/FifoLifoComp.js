import React from 'react';

export default function FifoLifoComp(props) {

  return (
    <div>
      <h1>Queue & Stack</h1>
      <div className='fifo-lifo'>

        <fieldset className='ctrl'>
          <legend>Ctrl:</legend>
          <label>Click to EnQueue & Put In:</label><br />
          <button onClick={props.onSave}>EnQueue / Put In</button><br />
          <label>DeQueue & Put Out:</label><br />
          <button onClick={props.onDelete}>DeQueue / Put Out</button><br />
        </fieldset>

        <fieldset className='fifo'>
          <legend>FIFO Queue:</legend>
          <textarea readOnly value={props.queue} placeholder='queue...' ></textarea><br />
        </fieldset>

        <fieldset className='stack'>
          <legend>LIFO Stack:</legend>
          <textarea readOnly value={props.stack} placeholder='stack...' ></textarea>
        </fieldset>

      </div>
    </div>
  )
}