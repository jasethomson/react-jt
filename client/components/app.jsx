import React from 'react';
import Header from './header';
import TotalSub from './totalsub';

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
      </div>
    )
  }
}

export default App;
