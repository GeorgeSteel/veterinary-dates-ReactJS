import React, { Component } from 'react'
import Header from './Header';
import AddDate from './AddDate';
import ListDates from './ListDates';

export default class App extends Component {
  state = {
    dates: []
  }

  componentDidMount() {
    const datesLS = localStorage.getItem('dates');
    if (datesLS) {
      this.setState({
        dates: JSON.parse(datesLS)
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem('dates', JSON.stringify(this.state.dates));
  }

  createDate = (newDate) => {
    const dates = [ ...this.state.dates, newDate ];

    this.setState({
      dates
    });

    console.log(dates);
  }

  deleteDate = (id) => {
    const currentDates = [...this.state.dates];
    const dates = currentDates.filter(date => date.id !== id);

    this.setState({
      dates
    });
  }

  render() {
    return (
      <div className="container">
        <Header
          title="Veterinary Patient Manager"
        />
        <div className="row">
          <div className="col-md-6">
            <AddDate
              createDate={ this.createDate }
            />
          </div>
          <div className="col-md-6">
            <ListDates
              dates={ this.state.dates }
              deleteDate={ this.deleteDate }
            />
          </div>
        </div>
      </div>
    )
  }
}

