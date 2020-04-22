import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

function App(){

  const sayHi = () => {
    document.write("Hi james");
  };

  const james = 0;

  return(
    //<h1>Project</h1>
    <div id="canvas" style={{height: '50%', width: '90%', position: 'relative', overflow: 'auto', padding: '0'}}>
      <Draggable grid={[50, 50]}>
        <img src={require('./logo.svg')} draggable = "false"/> 
      </Draggable>
    </div>
  );
}

export default App;
