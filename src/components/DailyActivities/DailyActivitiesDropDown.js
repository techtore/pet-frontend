import React from 'react';
import { connect } from 'react-redux'
import { getDogs } from '../../actions/dogs'

class DailyActivitiesDropDown extends React.Component {

    render(){
        let dogs = this.props.state.dogs;
        let optionItems = dogs.map(dog => 
            <option key={dog.name}>{dog.name}</option>
            );

            return (
                <div>
                    <select>
                        {optionItems}
                    </select>
                </div>
            )
    }
}

const mapStateToProps = state => {
    return{
        dogs: state.dogReducer.dogs
    }
}




export default connect(mapStateToProps, { getDogs })(DailyActivitiesDropDown);