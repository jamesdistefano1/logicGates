import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

function Nor(){

  return(
    <div>
      <Draggable grid={[50, 50]}>
        <img src={require('./NOR.svg')} draggable = "false" width = '100' height = '50'/> 
      </Draggable>
    </div>
  );
}

export default Nor;
