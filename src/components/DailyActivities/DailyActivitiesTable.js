import React from 'react'
import DataTable from 'react-redux-datatable';
import 'react-redux-datatable/dist/styles.css';


const apiLocation = 'http://localhost:3000/dogs/dogId/daily_activities';

const tableSettings = {
  tableID: 'DisplayTitleTable',
  keyField: 'dog_id',
  displayTitle: 'Daily Activities Table', // This title will display above the table
  tableColumns: [
    {
      title: 'Dog Id',
      key: 'dog_id',
    },
    {
      title: 'Name',
      key: 'name',
    },
    {
      title: 'Kind',
      key: 'kind',
    },
    {
      title: 'Time(hh:mm)',
      key: 'time',
    },
    {
        title: 'Description',
        key: 'description',
      },
  ],
};

export const DailyActivitiesTable = () => (
    <DataTable
      tableSettings={tableSettings}
      apiLocation={apiLocation}
    />
);

