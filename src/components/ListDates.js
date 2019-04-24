import React, { Component } from 'react'
import Date from './Date';
import PropTypes from 'prop-types';

export default class ListDates extends Component {
  render() {
    return (
      <div className="card mt-5">
        <div className="card-body">
            <h2 className="card-title text-center">{ this.props.dates <= 0 ? 'There are no dates' : 'List of dates:'}</h2>
            <div className="lista-citas">
                { Object.keys(this.props.dates).map(date => (
                    <Date
                        key={ date }
                        data={ this.props.dates[date] }
                        deleteDate={ this.props.deleteDate }
                    />
                )) }
            </div>
        </div>
      </div>
    )
  }
}

ListDates.propTypes = {
  dates: PropTypes.array.isRequired,
  deleteDate: PropTypes.func.isRequired
}