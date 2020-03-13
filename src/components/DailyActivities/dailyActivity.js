import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDailyActivities } from '../../actions/dailyActivities'


class DailyActivities extends Component {
    componentDidMount(){
        this.props.getDailyActivities()
    }
    render() {
       
        return(
            <div>
               
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

export default connect(mapStateToProps, {getDailyActivities})(DailyActivities);