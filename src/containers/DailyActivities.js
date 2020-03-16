import React from 'react'
import { connect } from 'react-redux'
import Form from '../components/DailyActivities/Form'
// import dog from '../components/Dogs/dog'


class DailyActivities extends React.Component {

    render (){
   
        debugger
        let dog = this.props.dogs.filter(dog => dog.id == this.props.match.params.dogId)[0]
        const activitiesList = dog.daily_activities.map((activity, i) => <li key={i}>{activity.date}</li>)
        const activity = activitiesList.length === 0 ? "No activities" : activitiesList

        return(
            <div>
               Daily Activities 
               <div>
                   <h2>{dog.name}'s Activities</h2>
                       {activity}
                   
               </div>
          
               <Form/>
            </div>
        )

    }
}

const mapStateToProps = state => {
    // debugger
    return{
        dogs: state.dogReducer.dogs,
        loading: state.dogReducer.loading
    }
}

export default connect(mapStateToProps)(DailyActivities);



 
