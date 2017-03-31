import React from 'react';
import moment from 'moment';
import DatePicker from 'material-ui/DatePicker';

const FilterDates = ({ startDate, endDate, changeDate }) => (
  <div className='filter-dates'>
    <p className='date-padding'>Filter Dates from:</p>
    <DatePicker
      value={startDate}
      maxDate={endDate}
      formatDate={date => moment(date).format('MMMM Do YYYY')}
      mode="landscape"
      autoOk={true}
      id='start-date'
      onChange={changeDate.bind(null, 'start')} />
    <p className='date-padding'>to</p>
    <DatePicker
      minDate={startDate}
      value={endDate}
      formatDate={date => moment(date).format('MMMM Do YYYY')}
      mode="landscape"
      autoOk={true}
      id='end-date'
      onChange={changeDate.bind(null, 'end')} />
    </div>
);

export default FilterDates;
