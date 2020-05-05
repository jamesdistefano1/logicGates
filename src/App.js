import React from 'react';
import Tweet from './tewwt'

const express = require('express');
const app = express();
const router = express.Router();

const db = require('./db');










function App(){

  const sayHi = () => {
    document.write("Hi james");
  };

  const james = 0;

  return(
    <div className="app">
      <h1>yo</h1>
      <button onClick={sayHi}>hhhhhhh</button>
      <Tweet name="james"/>
      <Tweet name="chris"/>
    </div>
  );
}


export default App;