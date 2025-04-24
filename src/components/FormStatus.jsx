import React from 'react';

const FormStatus = ({ application }) => {
  const { age, skills, cvUploaded } = application;

  let status = 'Pending';

  if (!age || !skills || !cvUploaded) {
    status = 'Rejected';
  }

  if (age && skills && cvUploaded) {
    status = 'Accepted';
  }

  return (
    <div>
      <h2>Application Status</h2>
      <p>Status: <strong>{status}</strong></p>

      <h3>Application Details</h3>
      <ul>
        <li>Age: {age ?  : }</li>
        <li>Skills: {skills ?  :}</li>
        <li>CV Uploaded: {cvUploaded ?  : }</li>
      </ul>
    </div>
  );
};

export default FormStatus;
