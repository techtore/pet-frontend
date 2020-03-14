import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { DailyActivitiesTable } from '../components/DailyActivities/DailyActivitiesTable'
// import { getDailyActivities } from '../../actions/dailyActivities'


class DailyActivities extends Component {
    render() {
        // const dog = this.props.dogs.filter(dog => dog.id == this.props.match.params.dogId)
        // debugger

        return(
           
            <div>
               Daily Activities Container
              
            </div>
        )
    }
}

const mapStateToProps = state => {
    debugger
    return{
        
        dogs: state.dogReducer.dogs,
        loading: state.dogReducer.loading
    }
}

export default connect(mapStateToProps)(DailyActivities);