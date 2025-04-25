import React from "react";

const FormStatus = ({ formData }) => {
  let statusMessage = "Pending";

  if (formData.age && formData.selectedSkills.length > 0 && formData.cvUploaded && formData.applicationListSubmitted) {
    statusMessage = "Accepted";
  } else if (formData.age && formData.selectedSkills.length > 0) {
    statusMessage = "Pending";
  }

  return (
    <div className="form-status">
      <h2>Application Status</h2>
      <p>{statusMessage}</p>
    </div>
  );
};

export default FormStatus;
