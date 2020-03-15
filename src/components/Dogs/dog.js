import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom';
import { getDogs } from '../../actions/dogs'
import DogInput from '../../containers/DogInput'
import DailyActivities from '../../containers/DailyActivities'

class Dogs extends Component {
    componentDidMount(){
        this.props.getDogs()
    }

    render() {

        return(
            <div>
                <DogInput/>
                <h2>Your Dogs</h2>
                <ul>
                    {this.props.loading ? <h3>...loading dogs</h3> : this.props.dogs.map((dog, id) => <li key={id}><Link to={`/dogs/${dog.id}/activities`}>{dog.name}</Link></li>)}
                </ul>
                <hr />
               
                <Route path={`/dogs/:dogId/activities`} render={props => <DailyActivities {...props}/>}/>
                
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

export default connect(mapStateToProps, {getDogs})(Dogs);
