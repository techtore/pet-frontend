import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addActivity} from '../../actions/dailyActivities'

class Form extends Component {

    state= {
        date: '',
        kind: '',
        name: '',
        time: '',
        description: '',
        dogId: ''
        }


   handleChange = event => {
       const { name, value } = event.target;
       this.setState({
           [name]: value
       })
   }

   onFormSubmit = event => {
       event.preventDefault();
       const activity = {...this.state}

       this.props.addActivity(activity, this.props.dogId)
       this.setState({
        kind: '',
        name: '',
        time: '',
        description: ''
       });
   }

  

   render() {
       const {date, kind, name, time, description } = this.state;

        return (       
            <form onSubmit={this.onFormSubmit}>
                <label>Date(MM/DD/YY)</label>
                <input type="text" 
                            name="date" 
                            id="date"
                            value={date} 
                            onChange={this.handleChange}/>
                <label>Kind</label>
                <input type="text" 
                            name="kind" 
                            id="kind"
                            value={kind} 
                            onChange={this.handleChange}/>
                <label>Name</label>
                <input type="text" 
                            name="name" 
                            id="name"
                            value={name} 
                            onChange={this.handleChange}/>
                <label>Time(hh:mm)</label>
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


export default connect(null, {addActivity})(Form);