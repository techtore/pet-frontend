import React from 'react'
import { connect } from 'react-redux'
import Form from '../components/DailyActivities/Form'

class DailyActivities extends React.Component {
  

    render (){
       
        let dog = this.props.dogs.filter(dog => dog.id == this.props.match.params.dogId)[0]
        const activitiesList = dog.daily_activities.map((activity, i) => <li key={i}><strong>{activity.date}</strong><br/>{activity.time}<br/>
        <br/>Kind: {activity.kind}<br/><br/>Name: {activity.name}<br/><br/>Description: {activity.description}<br/>
        
        </li>)
        const activity = activitiesList.length === 0 ? "No activities" : activitiesList

        return(
            <div>
               Daily Activities 
               <div>
                   <h2>{dog.name}'s Activities</h2>
                       <ul>{activity}</ul>
                   
               </div>
            <strong><p>Add a new Activity</p></strong>
               <Form id={this.props.match.params.dogId}/>
            </div>
        )

    }
}

const mapStateToProps = state => {
    
    return{
        dogs: state.dogReducer.dogs,
        loading: state.dogReducer.loading
    }
}

export default connect(mapStateToProps)(DailyActivities);



 
