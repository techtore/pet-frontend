import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDailyActivities } from '../actions/dailyActivities'
import Form from '../components/DailyActivities/Form'
// import dog from '../components/Dogs/dog'


class DailyActivities extends Component {
   componentDidMount(dogId){
       debugger
       this.props.getDailyActivities(dogId)
   }
    render() {
        debugger
        const dogs = this.props.dogs.map((dog, i) => <li key={i}>{dog.daily_activities.date}</li>)
       
        return(
            <div>
               Daily Activities 
               <div>
                   <ul>
                       {dogs}
                   </ul>
               </div>
          
               <Form/>
            </div>
        )
    }

}

const mapStateToProps = state => {

    return{
        dailyActivities: state.dailyActivities,
        loading: state.loading
    }
}

export default connect(mapStateToProps, {getDailyActivities})(DailyActivities);


 
