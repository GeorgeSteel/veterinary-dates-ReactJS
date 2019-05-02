import React, { Component } from 'react'
import Date from './Date';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
import { getDates } from '../actions/datesActions';
import store from '../store';
store.subscribe(() => {
  localStorage.setItem('dates', JSON.stringify(store.getState()));
})

class ListDates extends Component {

  componentDidMount() {
    this.props.getDates();
  }

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
                    />
                )) }
            </div>
        </div>
      </div>
    )
  }
}

ListDates.propTypes = {
  dates: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  dates: state.dates.dates
});

export default connect(mapStateToProps, { getDates }) (ListDates);