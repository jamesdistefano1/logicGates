import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

function Nand(){

  return(
    <div>
      <Draggable grid={[20, 20]}>
        <img src={require('./2_input_base.svg')} draggable = "false" width = "240" height = "120" /> 
      </Draggable>
    </div>
  );
}

export default Nand;
