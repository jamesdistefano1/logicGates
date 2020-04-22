import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

function Canvas(){

  return(
    <div id="canvas" style={{height: '500px', width: '90%', position: 'relative', overflow: 'auto',  padding: '0'}}>
      <Draggable grid={[50, 50]}>
        <img src={require('./2input_base.svg')} draggable = "false" width = '100' height = '50'/> 
      </Draggable>
    </div>
  );
}

export default Canvas;
