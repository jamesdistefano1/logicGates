import React from 'react';
import Tweet from './tewwt';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

function App(){

  const sayHi = () => {
    document.write("Hi james");
  };

  const james = 0;

  return(
    //<h1>Project</h1>
    <div id="canvas">
      <Draggable>
        <div id="draggableText">I can now be moved </div>
      </Draggable>
    </div>
  );
}

export default App;
