import React from 'react';
<<<<<<< HEAD
import Tweet from './tewwt'
import Table from './table'
import Header from './header'
=======
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import Canvas from './modules/application/canvas/Canvas.js';
import Selection from './modules/application/selection/Selection.js';
>>>>>>> Stephen1

function App(){

  return(
    <div className="app">
      <Header/>
      <Table/> 
      <Canvas />
      <Selection />
    </div>
  );
}

export default App;
