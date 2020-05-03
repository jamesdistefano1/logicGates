import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import And from  './And.js';
function Canvas(){

  return(
    <div id="canvas" style={{height: '500px', width: '90%', position: 'relative', overflow: 'auto',  padding: '0'}}>
      <And />
    </div>
  );
}

export default Canvas;
