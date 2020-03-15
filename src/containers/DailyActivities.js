import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux'
// import ReactTable from 'react-table'
// import { getDailyActivities } from '../actions/dailyActivities'


class DailyActivities extends Component {

//   componentDidMount(){
//       this.props.getDailyActivities(dog);
//       debugger
//   }
    render() {
    

        return(
            <div>
               Daily Activities 
             
            </div>
        )
    }
        // const dog = this.props.dogs.filter(dog => dog.id == this.props.match.params.dogId)
        // const columns = [
        //     {
        //         Header: "Date (MM/DD/YY)",
        //         accessor: "date", 
        //      },
        //     {
        //        Header: "Kind",
        //        accessor: "kind", 
        //     },
        //     {
        //         Header: "Name",
        //         accessor: "name", 
        //      },
        //      {
        //         Header: "Time (hh:mm)",
        //         accessor: "kind", 
        //      },
        //      {
        //         Header: "Description",
        //         accessor: "description", 
        //      }
        // ]

}

// const mapStateToProps = state => {
//     // debugger
//     return{
        
//         activities: state.activitiesReducer.dailyActivities,
//         loading: state.activitiesReducer.loading
//     }
// }

export default(DailyActivities);
// connect(mapStateToProps, {getDailyActivities})

// 
 /* <ReactTable 
              columns={columns} >
              </ReactTable> */