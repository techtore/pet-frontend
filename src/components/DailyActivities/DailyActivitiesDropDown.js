import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDogs } from '../../actions/dogs'
import Select from "react-dropdown-select";

class DailyActivitiesDropDown extends Component {
    componentDidMount(){
        this.props.getDogs()
    }

    render() {
      
        return(
            <div>
                <Select> 
                {this.props.dogs.map((dog) => <options key={dog.id} value={dog.name}>Select a dog </options>)}
                </Select>
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

export default connect(mapStateToProps, {getDogs})(DailyActivitiesDropDown);





// import React from 'react';
// import { connect } from 'react-redux'
// import { getDogs } from '../../actions/dogs'

// class DailyActivitiesDropDown extends React.Component {
//     componentDidMount(){
//         let dogs = this.props.getDogs()
//         console.log(dogs)
//     }

//     render(){
//         let dogs = this.props.dogs;
//         debugger
//         let optionItems = dogs.dogs.map(dog => 
//             <option key={dog.name}>{dog.name}</option>
//             );

//             return (
//                 <div>
//                     <select>
//                         {optionItems}
//                     </select>
//                 </div>
//             )
//     }
// }

// const mapStateToProps = state => {
//     return{
//         dogs: state.dogReducer.dogs
//     }
// }

// export default connect(mapStateToProps, { getDogs })(DailyActivitiesDropDown);