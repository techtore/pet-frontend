import React from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Kind</th>
                <th>Name</th>
                <th>Time</th>
                <th>Description</th>
            </tr>
        </thead>
    )
 }
const TableBody = (props) => {
    const rows = props.activityData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.kind}</td>
                <td>{row.name}</td>
                <td>{row.time}</td>
                <td>{row.description}</td>
                <td><button onClick={() => props.removeActivity(index)}>Delete</button></td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>;
 }

const Table = props => {
  const { activityData, removeActivity } = props;
    return (
      <table>
        <TableHeader />
        <TableBody activityData={activityData} removeActivity={removeActivity}/>
      </table>
    )
  
}

export default Table;