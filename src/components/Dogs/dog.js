import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Route, Switch } from 'react-router-dom';
import { getDogs } from '../../actions/dogs'
import DogInput from '../../containers/DogInput'
import DailyActivities from '../../containers/DailyActivities'

class Dogs extends Component {
    componentDidMount(){
        this.props.getDogs()
    }


    render() {
        const {match} = this.props;

        return(
            <div>
                <DogInput/>
                <h2>Your Dogs</h2>
                <ul>
                    {this.props.loading ? <h3>...loading dogs</h3> : this.props.dogs.map((dog, i) => <li key={i}><Link to={`${match.path}/${dog.id}/activities`}>{dog.name}</Link></li>)}
                </ul>
                <hr />
                <Switch>
                    <Route path={`${match.path}/:dogId/activities`} render={props  => <DailyActivities {...props}/>}/>
                </Switch>
                
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
