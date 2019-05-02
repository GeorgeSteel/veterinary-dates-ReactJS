import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
import { deleteDate } from '../actions/datesActions';

class Date extends Component {

    delete = () => {
        this.props.deleteDate(this.props.data.id);
    }

    render() {
        const { date, hour, pet, owner, symptoms } = this.props.data;
        return (
        <div className="media mt-3">
            <div className="media-body">
                <h3 className="mt-0">{ pet }</h3>
                <p className="card-text"><span>Owner's Name: </span> { owner }</p>
                <p className="card-text"><span>Date: </span> { date }</p>
                <p className="card-text"><span>Hour: </span> { hour }</p>
                <p className="card-text"><span>Symptoms: </span> </p>
                <p className="card-text">{ symptoms }</p>

                <button onClick={ this.delete } className="btn btn-danger">Delete &times;</button>
            </div>
        </div>
        )
    }
}

Date.propTypes = {
    info: PropTypes.shape({
        date: PropTypes.string.isRequired,
        hour: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired,
        pet: PropTypes.string.isRequired,
        symptoms: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }),
    deleteDate: PropTypes.func.isRequired
}

export default connect(null, { deleteDate }) (Date)