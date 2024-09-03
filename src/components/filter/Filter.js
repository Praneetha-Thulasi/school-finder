// Filter.js
import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [filtershow, setFiltershow] = useState(false);

  const handleToggleFilters = () => {
    setFiltershow((prevShow) => !prevShow);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    onFilterChange({ [name]: value });
  };

  return (
    <div className='container'>
      <button className='btn btn-light fs-5 mb-3' onClick={handleToggleFilters}>
        {filtershow ? 'Hide Filters' : 'Show Filters'}
      </button>

      {filtershow && (
        <>
          <label className='me-4 mx-5'>
            Location:&ensp;
            <select name="location" onChange={handleFilterChange}>
              <option value="">Any</option>
              <option value="New Delhi">New Delhi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
            </select>
          </label>

          <label className='me-4'>
            Academics:&ensp;
            <select name="academics" onChange={handleFilterChange}>
              <option value="">Any</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Average">Average</option>
            </select>
          </label>

          <label className='me-4'>
            Co-curricular:&ensp;
            <select name="coCurricular" onChange={handleFilterChange}>
              <option value="">Any</option>
              <option value="High">High</option>
              <option value="Moderate">Moderate</option>
              <option value="Low">Low</option>
            </select>
          </label>

          <label>
            Transportation:&ensp;
            <select name="transportation" onChange={handleFilterChange}>
              <option value="">Any</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </label>
        </>
      )}
    </div>
  );
};

export default Filter;
