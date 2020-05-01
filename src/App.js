import React from 'react';
import Tweet from './tewwt'
import Table from './table'
import Header from './header'

function App(){

  const sayHi = () => {
    document.write("Hi james");
  };

  const james = 0;

  return(
    <div className="app">
      <Header/>
      <Table/> 
    </div>
  );
}

export default App;