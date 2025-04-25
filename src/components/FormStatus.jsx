import React from 'react';

const FormStatus = ({ formData }) => {
  const {
    age,
    cvUploaded,
    whyChooseUs,
    selectedSkills,
    applicationListSubmitted,
  } = formData;

  const isAccepted =
    age >= 18 &&
    cvUploaded &&
    whyChooseUs.trim().length > 10 &&
    selectedSkills.length > 0 &&
    applicationListSubmitted;

  const isRejected = age < 18 || !cvUploaded;

  const getStatus = () => {
    if (isAccepted) return "✅ Accepted";
    if (isRejected) return "❌ Rejected";
    return "⏳ Pending";
  };

  return (
    <div className="form-status">
      <h2>Application Status:</h2>
      <p>{getStatus()}</p>
    </div>
  );
};

export default FormStatus;
