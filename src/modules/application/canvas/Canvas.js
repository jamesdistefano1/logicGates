import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import And from  './And.js';
import Or from  './Or.js';
import Nand from './Nand.js';
import Nor from './Nor.js';
import "./Canvas.css";
import $ from 'jquery';  

class Canvas extends React.Component{

  state = {
    numAND: 0, 
    numOR: 0,
    numNAND: 0, 
    numNOR: 0, 
  }

  createLogicGate = (x) => {
    console.log('CALLED');
    switch(x){
      case 0:
        this.setState({
          numAND: this.state.numAND + 1
        });
        console.log('AND');
        console.log(this.state.numAND);
        break; 
      case 1: 
      this.setState({
        numOR: this.state.numOR + 1
      });
      break; 
      case 2: 
      this.setState({
        numNAND: this.state.numNAND + 1
      });
      break; 
      case 3: 
      this.setState({
        numNOR: this.state.numNOR + 1
      });
      break; 
    }
  }
  


  render(){
    const andArr = [];
    const orArr = [];
    const nandArr = [];
    const norArr = [];

    // very inefficient, forgive me :( 
    for (var i = 0; i < this.state.numAND; i += 1) {
      andArr.push(<And key={i} number={i} />);
    };
    for (var i = 0; i < this.state.numOR; i += 1) {
      orArr.push(<Or key={i} number={i} />);
    };
    for (var i = 0; i < this.state.numNAND; i += 1) {
      nandArr.push(<Nand key={i} number={i} />);
    };
    for (var i = 0; i < this.state.numNOR; i += 1) {
      norArr.push(<Nor key={i} number={i} />);
    };

    return(
      <div class="canvas">
        {andArr}
        {orArr}
        {norArr}
        {nandArr}
      </div>
    );
  }
  
}

export default Canvas;
