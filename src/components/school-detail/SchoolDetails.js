// SchoolDetails.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './SchoolDetails.css';

const SchoolDetails = () => {
  const { id } = useParams();
  const [school, setSchool] = useState([]);

  useEffect(() => {
    // Fetch the specific school data based on the id from the API
    try{
    const Schoolfetch=async()=>{
   const schoolApi=await axios.get(`http://localhost:4000/schools?id=${id}`)
const schoolData=schoolApi.data
setSchool(schoolData)


    }
    Schoolfetch()
}
catch(e){
    console.error('error fetching')
}
    
      
  }, []);

  if (!school) {
    return <div>School not found</div>;
  }

//   const {
//     name,
//     opensAt,
//     timings,
//     yearOfEstablishment,
//     rating,
//     educationFee,
//     transportation,
//     safety,
//     area,
//     board,
//     images,
//     location,
//   } = school;

  return (
    <div className="school-details-container">
      <div className="school-details-card">
        <div className="school-name">{school[0]?.name}</div>
        <div className="school-info d-flex">
        <div>
          <p>
            <strong>Opens at:</strong> {school[0]?.opensAt}
          </p>
          <p>
            <strong>Timings:</strong> {school[0]?.timings}
          </p>
          <p>
            <strong>Year of Establishment:</strong> {school[0]?.yearOfEstablishment}
          </p>
          <p>
            <strong>Rating:</strong> {school[0]?.rating}
          </p>
          <p>
            <strong>Education Fee:</strong> ${school[0]?.educationFee}
          </p>
          <p>
            <strong>Transportation:</strong> {school[0]?.transportation ? 'Available' : 'Not Available'}
          </p>
          <p>
            <strong>Safety:</strong> {school[0]?.safety}
          </p>
          <p>
            <strong>Area:</strong> {school[0]?.area}
          </p>
          <p>
            <strong>Board:</strong> {school[0]?.board}
          </p>
          <p>
            <strong>Location:</strong> {school[0]?.location}
          </p>
          </div>
          <div className='d-flex mx-5'><img className="img-fluid" width="300px" src={school[0]?.images} alt={` Image`} /></div>
          {console.log(school)}
          {/* {Array.isArray(images) && (
          <div>
            {images.map((imageUrl,index)=>(
                <img key={index} src={imageUrl} alt={`${name} Image ${index+1}`}/>
            ))}
          </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default SchoolDetails;