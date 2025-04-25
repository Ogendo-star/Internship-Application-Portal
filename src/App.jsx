import React, { useState } from "react";
import './App.css'; // Make sure the path is correct here
import FormStatus from './components/FormStatus';

const ApplicationForm = () => {
  // State to track form data
  const [formData, setFormData] = useState({
    age: "",
    cvUploaded: false,
    whyChooseUs: "",
    selectedSkills: [],
    applicationListSubmitted: false,
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle skill checkbox change
  const handleSkillChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      selectedSkills: checked
        ? [...prevData.selectedSkills, value]
        : prevData.selectedSkills.filter((skill) => skill !== value),
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Internship Application Form</h1>
      <form onSubmit={handleSubmit} className="application-form">
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="1"
            required
            className="input-field"
            placeholder="Enter your age"
          />
        </label>
        <br />
        <label>
          Why Choose Us:
          <textarea
            name="whyChooseUs"
            value={formData.whyChooseUs}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="Tell us why you are a good fit"
          />
        </label>
        <br />
        <label>
          Upload CV:
          <input
            type="file"
            name="cvUploaded"
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                cvUploaded: e.target.files.length > 0,
              }))
            }
            className="input-field"
          />
        </label>
        <br />
        <label>Skills (Select all that apply):</label>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              value="JavaScript"
              onChange={handleSkillChange}
            />
            JavaScript
          </label>
          <label>
            <input
              type="checkbox"
              value="React"
              onChange={handleSkillChange}
            />
            React
          </label>
          <label>
            <input
              type="checkbox"
              value="Node.js"
              onChange={handleSkillChange}
            />
            Node.js
          </label>
          <label>
            <input
              type="checkbox"
              value="Python"
              onChange={handleSkillChange}
            />
            Python
          </label>
          <label>
            <input
              type="checkbox"
              value="CSS"
              onChange={handleSkillChange}
            />
            CSS
          </label>
          {/* Add more checkboxes for additional skills */}
        </div>
        <br />
        <label>
          Application List Submitted:
          <input
            type="checkbox"
            name="applicationListSubmitted"
            checked={formData.applicationListSubmitted}
            onChange={handleChange}
            className="input-field"
          />
        </label>
        <br />
        <button type="submit" className="submit-btn">Submit Application</button>
      </form>

      {/* Show FormStatus Component with current formData */}
      <FormStatus formData={formData} />
    </div>
  );
};

export default ApplicationForm;
