import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import Canvas from './modules/application/canvas/Canvas.js';
import Selection from './modules/application/selection/Selection.js';

function App(){

  return(
    <div>
      <Canvas />
      <Selection />
    </div>
  );
}

export default App;
