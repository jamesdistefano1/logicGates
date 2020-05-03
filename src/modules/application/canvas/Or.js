import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

function Or(){

  return(
    <div>
      <Draggable grid={[50, 50]}>
        <img src={require('./OR.svg')} draggable = "false" width = '100' height = '50'/> 
      </Draggable>
    </div>
  );
}

export default Or;
