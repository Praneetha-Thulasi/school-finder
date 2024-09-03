// SchoolList.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SchoolList.css';

const SchoolList = ({ schools }) => {
  const [selectedSchool, setSelectedSchool] = useState(null);
  const navigate = useNavigate();

  const handleShowDetails = (school) => {
    setSelectedSchool(school);
  };

  const handleCloseDetails = () => {
    setSelectedSchool(null);
  };

  const handleCardClick = (school) => {
    // Use React Router's navigate function to go to the school details page
    navigate(`/school/${school.id}`);
  };

  return (
    <div className="school-list">
      
      <h2>School Listing</h2>
      <div className="cards-container">
        {schools.map((school) => (
          <div key={school.id} className="school-card color">
            <Link to={`/school/${school.id}`}>
              <img src={`images/${school.id}.jpg`} alt={`${school.name} Image`} className='img-fluid'/>
              <div className="school-info">
                <div className="school-name fs-4">{school.name}</div>
                <button className="show-details btn btn-info mx-5" onClick={() => handleShowDetails(school)}>
                  Show Details
                </button>
              </div>
            </Link>
            {selectedSchool && selectedSchool.id === school.id && (
              <div className="school-details">
                <p>
                  <strong>Opens at:</strong> {selectedSchool.opensAt}
                </p>
                <p>
                  <strong>Timings:</strong> {selectedSchool.timings}
                </p>
                <p>
                  <strong>Year of Establishment:</strong> {selectedSchool.yearOfEstablishment}
                </p>
                <p>
                  <strong>Rating:</strong> {selectedSchool.rating}
                </p>
                {/* Add more details as needed */}
                <button className="close-details-btn" onClick={handleCloseDetails}>
                  Close Details
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolList;