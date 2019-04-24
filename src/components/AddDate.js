import React, { Component } from 'react';
import uuid from 'uuid';

export default class AddDate extends Component {
    state = {
        error: false
    };

    // refs
    namePetRef = React.createRef();
    nameOwnerRef = React.createRef();
    dateRef = React.createRef();
    hourRef = React.createRef();
    symptomsRef = React.createRef();

    addDate = (e) => {
        e.preventDefault();

        const pet = this.namePetRef.current.value,
              owner = this.nameOwnerRef.current.value,
              date = this.dateRef.current.value,
              hour = this.hourRef.current.value,
              symptoms = this.symptomsRef.current.value;

        if (!pet || !owner || !date || !hour || !symptoms) {
            this.setState({
                error: true
            });
        } else {
            const newDate = {
                id: uuid(),
                pet,
                owner,
                date,
                hour,
                symptoms
            }
    
            this.props.createDate(newDate);
    
            e.currentTarget.reset();

            this.setState({
                error: false
            });
        }       
    }
  
    render() {
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Add the date here</h2>
                    <form onSubmit={this.addDate}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref={ this.namePetRef } type="text" className="form-control" placeholder="Nombre Mascota" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref={ this.nameOwnerRef } type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input ref={ this.dateRef } type="date" className="form-control" />
                            </div>                            

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input ref={ this.hourRef } type="time" className="form-control" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea ref={ this.symptomsRef } className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Agregar</button>
                            </div>
                        </div>
                    </form>
                    { this.state.error ? <div className="alert alert-danger text-center">All fields are required</div> : null }
                </div>
            </div>
        )
    }
}
