import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

function Canvas(){

  return(
    <div id="canvas" style={{height: '50%', width: '90%', position: 'relative', overflow: 'auto', padding: '0'}}>
      <Draggable grid={[50, 50]}>
        <img src={require('./logo.svg')} draggable = "false"/> 
      </Draggable>
    </div>
  );
}

export default Canvas;
