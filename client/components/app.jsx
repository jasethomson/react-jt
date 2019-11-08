import React from 'react';
import Header from './header';
import TotalSub from './totalsub';
import MainSub from './mainsub';
import PieChart from './pieChart';

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
        <div className="container">
          <div className="row">
            <div className="col-6">
              <MainSub />
            </div>
            <div className="col-6">
              <PieChart />
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default App;
