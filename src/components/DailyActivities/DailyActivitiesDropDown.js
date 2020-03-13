import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDogs } from '../../actions/dogs'
import Select from "react-dropdown-select";

class DailyActivitiesDropDown extends Component {
    componentDidMount(){
        this.props.getDogs()
    }

    render() {
    const dogList = this.props.dogs.map((dog) => {
    debugger
        return  {label: dog.name,
                  value: dog,
                  key: dog.id
        }
    })
    debugger
        return(
            <div> 
                <Select options={dogList}  onChnage={this.handleChange}/> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        dogs: state.dogReducer.dogs
    }
}

export default connect(mapStateToProps, {getDogs})(DailyActivitiesDropDown);
