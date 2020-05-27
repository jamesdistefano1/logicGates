import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

function Wire(){

  return(
    <div>
      <Draggable grid={[20, 20]}>
        <img src={require('./WIRE_NODE.svg')} draggable = "false" width = '20' height = '20'/>
      </Draggable> 
      <Draggable grid={[20, 20]}>
        <img src={require('./WIRE_NODE.svg')} draggable = "false" width = '20' height = '20'/>
      </Draggable>
    </div>
  );
}

export default Wire;
