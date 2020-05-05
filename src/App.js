import React from 'react';
import Tweet from './tewwt'
import Table from './table'
import Header from './header'
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import Canvas from './modules/application/canvas/Canvas.js';
import Selection from './modules/application/selection/Selection.js';

const express = require('express');
const app = express();
const router = express.Router();

const db = require('./db');










function App(){

  return(
    <div className="app">
      <Header />
      <Table /> 
      <Canvas />
    </div>
  );
}

export default App;
