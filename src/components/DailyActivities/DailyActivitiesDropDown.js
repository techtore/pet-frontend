import React from 'react';
import { connect } from "react-redux";
import Dropdown from "react-dropdown";
import dog from '../Dogs/dog';

const useReactDropdown = true;
const option = { value:  }

const DailyActivitiesDropDown = ({input}) => {
    return(
        <Dropdown
            {...input}
            options={[
                {
                    value:
                }
            ]}
        />

    )
}

const mapStateToProps = state => {
    return{
        dogs: state.dogReducer.dogs 
    }
}



export default connect(mapStateToProps, { dog })(DailyActivitiesDropDown);