import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactTable from 'react-table'

// import { DailyActivitiesTable } from '../components/DailyActivities/DailyActivitiesTable'
// import { getDailyActivities } from '../../actions/dailyActivities'


class DailyActivities extends Component {
  state= {
      activiies: []
  }

  componentDidMount(){
      this.props.getDailyActivities();
  }
    render() {
        // const dog = this.props.dogs.filter(dog => dog.id == this.props.match.params.dogId)
        // debugger
        const columns = [
            {
                Header: "Date (MM/DD/YY)",
                accessor: "date", 
             },
            {
               Header: "Kind",
               accessor: "kind", 
            },
            {
                Header: "Name",
                accessor: "name", 
             },
             {
                Header: "Time (hh:mm)",
                accessor: "kind", 
             },
             {
                Header: "Description",
                accessor: "description", 
             }
        ]
        return(
          
            <div>
               Daily Activities Container
              <ReactTable 
              columns={columns} >
              </ReactTable>
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