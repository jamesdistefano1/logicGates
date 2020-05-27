import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

function Wire(){

  return(
    <div>
      <Draggable grid={[20, 20]}>
        <img src={require('./LINE_NODE.svg')} draggable = "false" width = '240' height = '120'/>
      </Draggable> 
      <Draggable grid={[20, 20]}>
        <img src={require('./LINE_NODE.svg')} draggable = "false" width = '240' height = '120'/>
      </Draggable>
    </div>
  );
}

export default Wire;
