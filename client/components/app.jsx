import React from 'react';
import Header from './header';
import TotalSub from './totalsub';
import MainSub from './mainsub';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      placeHolder: null
    }
  }
  render(){
    return (
      <div>
        <Header />
        <TotalSub />
        <MainSub />
      </div>
    )
  }
}

export default App;
