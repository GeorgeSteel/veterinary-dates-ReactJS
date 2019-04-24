import React, { Component } from 'react'

export default class Date extends Component {

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
