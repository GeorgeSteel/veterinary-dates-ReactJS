import React, { Component } from 'react'
import Header from './Header';
import AddDate from './AddDate';

export default class App extends Component {

  createDate = () => {
    console.log('from App.js');
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
