// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Filter from './components/filter/Filter';
import SchoolList from './components/school-list/SchoolList';
import SchoolDetails from './components/school-detail/SchoolDetails';
import Home from './components/home/Home'
import RootLayout from './RootLayout';

const App = () => {
  const [schools, setSchools] = useState([]);
  const [filteredSchools, setFilteredSchools] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    // Fetch data from the JSON file using Axios
    axios.get('http://localhost:4000/schools')
      .then(response => {
        setSchools(response.data);
        setFilteredSchools(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    // Apply filters to the school data
    const filteredData = applyFilters(schools, filters);
    setFilteredSchools(filteredData);
  }, [filters, schools]);

  const applyFilters = (data, filters) => {
    return data.filter((school) => {
      return (
        (filters.academics ? school.academics === filters.academics : true) &&
        (filters.coCurricular ? school.coCurricular === filters.coCurricular : true) &&
        (filters.infrastructure ? school.infrastructure === filters.infrastructure : true) &&
        (filters.distance ? school.distance <= parseInt(filters.distance) : true) &&
        (filters.educationFee ? school.educationFee <= parseInt(filters.educationFee) : true) &&
        (filters.transportation ? school.transportation.toString() === filters.transportation : true) &&
        (filters.safety ? school.safety === filters.safety : true) &&
        (filters.location ? school.location === filters.location : true)
      );
    });
  };

  const handleFilterChange = (newFilter) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilter }));
    console.log(newFilter);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/schoolist" element={<SchoolList schools={filteredSchools} />} />
          <Route path="/filter" element={<Filter onFilterChange={handleFilterChange} />} />
          <Route path="/school/:id" element={<SchoolDetails schools={filteredSchools} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
