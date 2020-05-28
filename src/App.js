import React from 'react';
import Tweet from './tewwt'
import Table from './table'
import Header from './header'
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import Canvas from './modules/application/canvas/Canvas.js';
import Selection from './modules/application/selection/Selection.js';

class App extends React.Component{

  render(){
    return(
    <div className="app">
      <Header />
      <Table /> 
    </div>
  );
}
}

export default App;
