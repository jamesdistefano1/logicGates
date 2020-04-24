import React from 'react';
import Tweet from './tewwt'
import Table from './table'
import Topper from './topheader'

function App(){

  const sayHi = () => {
    document.write("Hi james");
  };

  const james = 0;

  return(
    <div className="app">
      <Topper/>
      <Table/> 
    </div>
  );
}

export default App;