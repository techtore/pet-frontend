import React from 'react'
import { connect } from 'react-redux'
import Form from '../components/DailyActivities/Form'

class DailyActivities extends React.Component {
  
    render (){
       
        let dog = this.props.dogs.filter(dog => dog.id == this.props.match.params.dogId)[0]
        const activitiesList = dog.daily_activities.map((activity, i) => <p key={i}><strong>{activity.date}</strong><br/><strong>Time: </strong>{activity.time}<br/>
        <br/><strong>Kind:</strong> {activity.kind}<br/><br/><strong>Name:</strong> {activity.name}<br/><br/><strong>Description: </strong>{activity.description}<br/>
        
        </p>)
        const activity = activitiesList.length === 0 ? "No activities" : activitiesList

        return(
            <div>
               <div>
                   <h2>{dog.name}'s Activities</h2>
                       {activity}  
               </div>
            <strong><h3>Add a new Activity</h3></strong>
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



 
