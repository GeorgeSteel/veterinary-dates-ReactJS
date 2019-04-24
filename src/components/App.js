import React, { Component } from 'react'
import Header from './Header';
import AddDate from './AddDate';

export default class App extends Component {
  state = {
    dates: []
  }

  createDate = (newDate) => {
    const dates = [ ...this.state.dates, newDate ];
    
    this.setState({
      dates
    });

    console.log(dates);
  }

  render() {
    return (
      <div className="Container">
        <Header
          title="Veterinary Patient Manager"
        />
        <div className="row">
          <div className="col-md-6 m-5">
            <AddDate
              createDate={ this.createDate }
            />
          </div>
        </div>
      </div>
    )
  }
}
