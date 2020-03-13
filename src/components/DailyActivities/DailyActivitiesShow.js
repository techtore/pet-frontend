import React from 'react'
import DailyActivitiesDropDown from './DailyActivitiesDropDown'
import Form from './Form'
import DailyActivitiesTable from './DailyActivitiesTable'

class DailyActivitiesShow extends React.Component {
    render() {
        return (
            <div>
                <DailyActivitiesDropDown/>
                <br></br>
                <Form/>
                <DailyActivitiesTable />
            </div>
        )
    }
}

export default DailyActivitiesShow;