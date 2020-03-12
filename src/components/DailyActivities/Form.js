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


   render() {
       const {kind, name, time, description } = this.state;

        return (       
            <form onSubmit={this.onFormSubmit}>
                <label>Kind</label>
                <input type="text" 
                            name="kind" 
                            id="name"
                            value={kind} 
                            onChange={this.handleChange}/>
                <label>Name</label>
                <input type="text" 
                            name="name" 
                            id="name"
                            value={name} 
                            onChange={this.handleChange}/>
                <label>Name</label>
                <input type="text" 
                            name="name" 
                            id="name"
                            value={name} 
                            onChange={this.handleChange}/>
                <label>Time</label>
                <input type="text" 
                            name="time" 
                            id="time"
                            value={time} 
                            onChange={this.handleChange}/>
                <label>Description</label>
                <input type="text" 
                            name="description" 
                            id="description"
                            value={description} 
                            onChange={this.handleChange}/> 
                <button type="submit">Submit</button>  
            </form>
       )
   }
}

export default Form;