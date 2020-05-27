import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

function Wire(){

  return(
    <div>
      <Draggable grid={[20, 20]} defaultPosition={{x: 0, y: 0}}>
        <img src={require('./WIRE_NODE.svg')} draggable = "false" width = '40' height = '40'/>
      </Draggable> 
      <Draggable grid={[20, 20]} defaultPosition={{x: 0, y: 0}}>
        <img src={require('./WIRE_NODE.svg')} draggable = "false" width = '40' height = '40'/>
      </Draggable>
    </div>
  );
}

export default Wire;
