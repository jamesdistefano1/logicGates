import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

function And(){

  return(
    <div>
      <Draggable grid={[50, 50]}>
        <img src={require('./AND.svg')} draggable = "false" width = '100' height = '50'/> 
      </Draggable>
    </div>
  );
}

export default And;
