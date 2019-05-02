import React, { Component } from 'react'
import Header from './Header';
import AddDate from './AddDate';
import ListDates from './ListDates';
// Redux
import { Provider } from 'react-redux';
import store from '../store';

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Header
            title="Veterinary Patient Manager"
          />
          <div className="row">
            <div className="col-md-6">
              <AddDate/>
            </div>
            <div className="col-md-6">
              <ListDates/>
            </div>
          </div>
        </div>
      </Provider>      
    )
  }
}

