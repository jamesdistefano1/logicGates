import React from "react";
import "./table.css";
import Canvas from './modules/application/canvas/Canvas.js';


class Table extends React.Component{

    triggerCreateLogicGate(x){
        this.refs.cvs.createLogicGate(x);
    }

    render(){
        return(
            <div>
                
                <div class="wrapper">
    
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>Toolkit</h3>
            </div>
    
            <ul class="list-unstyled components">
                <p>Select an option</p>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Logic Gates</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#" onClick={()=>{this.triggerCreateLogicGate(0)}}>AND gate</a>
                        </li>
                        <li>
                            <a href="#" onClick={()=>{this.triggerCreateLogicGate(1)}}>OR gate</a>
                        </li>
                        <li>
                            <a href="#" onClick={()=>{this.triggerCreateLogicGate(2)}}>NAND gate</a>
                        </li>
                        <li>
                            <a href="#" onClick={()=>{this.triggerCreateLogicGate(3)}}>NOR gate</a>
                        </li>
                    </ul>
                </li>
                <li class="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Input Controls</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#" onClick="testButton()">Test 1</a>
                        </li>
                        <li>
                            <a href="#" onClick="testButton()">Test 2</a>
                        </li>
                        <li>
                            <a href="#" onClick="testButton()">Test 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Output Controls</a>
                </li>
                <li>
                    <a href="#">Flip-Flops</a>
                </li>
                <li>
                    <a href="#">Others</a>
                </li>
            </ul>
        </nav>
    
    </div>
    <Canvas ref="cvs"/>
            </div>
        )

    }
    
}

export default Table;