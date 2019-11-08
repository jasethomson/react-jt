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
      <div className="container">
        <div className="row">
          <Table dark>
            <thead>
              <tr>
                <th>Subscription</th>
                <th>Monthly</th>
                <th>YTD</th>
                <th>Next PMT due</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Netflix</td>
                <td>$10.99</td>
                <td>$120.89</td>
                <td>12/1/2019</td>
              </tr>
              <tr>
                <td>Amazon Prime</td>
                <td>$12.99</td>
                <td>$142.89</td>
                <td>12/6/2019</td>
              </tr>
              <tr>
                <td>Spotify</td>
                <td>$9.99</td>
                <td>$98.89</td>
                <td>12/3/2019</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="row">
          <Table dark>
            <thead>
              <tr>
                <th>Subscription</th>
                <th>Monthly</th>
                <th>YTD</th>
                <th>Next PMT due</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Netflix</td>
                <td>$10.99</td>
                <td>$120.89</td>
                <td>12/1/2019</td>
              </tr>
              <tr>
                <td>Amazon Prime</td>
                <td>$12.99</td>
                <td>$142.89</td>
                <td>12/6/2019</td>
              </tr>
              <tr>
                <td>Spotify</td>
                <td>$9.99</td>
                <td>$98.89</td>
                <td>12/3/2019</td>
              </tr>
              <tr>
                <td>Netflix</td>
                <td>$10.99</td>
                <td>$120.89</td>
                <td>12/1/2019</td>
              </tr>
              <tr>
                <td>Amazon Prime</td>
                <td>$12.99</td>
                <td>$142.89</td>
                <td>12/6/2019</td>
              </tr>
              <tr>
                <td>Spotify</td>
                <td>$9.99</td>
                <td>$98.89</td>
                <td>12/3/2019</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="row">
          <form>
            <input
              name="numberOfGuests"
              className="col-3"
              type="text"
              placeholder="Subscription Name"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
            <input
                name="numberOfGuests"
                className="col-3"
                type="text"
                placeholder="Monthly Cost"
                value={this.state.numberOfGuests}
                onChange={this.handleInputChange} />
            <input
              name="numberOfGuests"
              className="col-3 "
              type="text"
              placeholder="Subscribed since"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
            <input
              name="numberOfGuests"
              className="col-3 "
              type="text"
              placeholder="Next Payment Date"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </form>
        </div>
      </div>
    )
  }
}

export default MainSub;
