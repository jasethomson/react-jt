import React from 'react';
import {Table} from 'reactstrap';

class MainSub extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      placeholder: null
    }
  }



  render(){
    return (
      <Table dark>
        <thead>
          <tr>
            <th>#</th>
            <th>Subscription</th>
            <th>Monthly</th>
            <th>YTD</th>
            <th>Next PMT due</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Netflix</td>
            <td>$10.99</td>
            <td>$120.89</td>
            <td>12/1/2019</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Amazon Prime</td>
            <td>$12.99</td>
            <td>$142.89</td>
            <td>12/6/2019</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Spotify</td>
            <td>$9.99</td>
            <td>$98.89</td>
            <td>12/3/2019</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Netflix</td>
            <td>$10.99</td>
            <td>$120.89</td>
            <td>12/1/2019</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Amazon Prime</td>
            <td>$12.99</td>
            <td>$142.89</td>
            <td>12/6/2019</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Spotify</td>
            <td>$9.99</td>
            <td>$98.89</td>
            <td>12/3/2019</td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default MainSub;
