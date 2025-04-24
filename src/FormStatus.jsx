// src/FormStatus.jsx
import React from 'react';

const FormStatus = ({ formData }) => {
  const {
    age,
    skills,
    cvUploaded,
    whyChooseUs,
    applicationList
  } = formData;

  // Requirements
  const isAgeValid = age >= 18;
  const hasSkills = skills && skills.length > 0;
  const hasCV = cvUploaded === true;
  const hasReason = whyChooseUs && whyChooseUs.trim().length > 0;
  const hasApplicationList = applicationList && applicationList.length > 0;

  let status;
  if (isAgeValid && hasSkills && hasCV && hasReason && hasApplicationList) {
    status = "accepted";
  } else if (isAgeValid || hasSkills || hasCV || hasReason || hasApplicationList) {
    status = "pending";
  } else {
    status = "rejected";
  }

  let message;
  switch (status) {
    case "accepted":
      message = "Your application has been accepted!";
      break;
    case "pending":
      message = "Your application is still pending. Please complete all fields.";
      break;
    case "rejected":
      message = "Your application does not meet the requirements.";
      break;
    default:
      message = "Please start filling your application.";
  }

  return (
    <div style={{ padding: "1rem", fontSize: "1.2rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      {message}
    </div>
  );
};

export default FormStatus;
