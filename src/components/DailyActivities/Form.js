import React, { Component } from 'react';

class Form extends Component {
   constructor(props) {
       super(props);

        this.initialState= {
        kind: '',
        name: '',
        time: '',
        desription: ''
        }
        this.state = this.initialState;
    }

   handleChange = event => {
       const { name, value } = event.target;
       this.setState({
           [name] : value
       })
   }

   onFormSubmit = event => {
       event.preventDefault();

       this.props.handleSubmit(this.state)
       this.setState(this.initialState);
   }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }


   render() {
       const {kind, name, time, description } = this.state;

        return (       
            <form onSubmit={this.onFormSubmit}>
                <label for="kind">Kind</label>
                <input> type="text" 
                            name="kind" 
                            id="name"
                            value={kind} 
                            onChange={this.handleChange}</input>
                <label for="name">Name</label>
                <input> type="text" 
                            name="name" 
                            id="name"
                            value={name} 
                            onChange={this.handleChange}</input>
                <label for="name">Name</label>
                <input> type="text" 
                            name="name" 
                            id="name"
                            value={name} 
                            onChange={this.handleChange}</input>
                <label for="time">Time</label>
                <input> type="text" 
                            name="time" 
                            id="time"
                            value={time} 
                            onChange={this.handleChange}</input>
                <label for="description">Description</label>
                <input> type="text" 
                            name="description" 
                            id="description"
                            value={description} 
                            onChange={this.handleChange}</input> 
                <input type="button" value="Submit" onClick={this.submitForm}></input>   
            </form>
       )
   }
}

export default Form;