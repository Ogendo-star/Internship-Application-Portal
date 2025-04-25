import React, { useState } from "react";
import './App.css'; // Ensure the path is correct here
import FormStatus from './components/FormStatus';

const ApplicationForm = () => {
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

  return (
    <div className="form-container">
      <h2 className="form-title">Internship Application</h2>
      <form className="application-form">
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            className="input-field"
            value={formData.age}
            onChange={handleChange}
            min="18" // Age validation: must be 18 or older
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="skills">Skills:</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="selectedSkills"
                value="JavaScript"
                checked={formData.selectedSkills.includes("JavaScript")}
                onChange={handleChange}
              />
              JavaScript
            </label>
            <label>
              <input
                type="checkbox"
                name="selectedSkills"
                value="React"
                checked={formData.selectedSkills.includes("React")}
                onChange={handleChange}
              />
              React
            </label>
            <label>
              <input
                type="checkbox"
                name="selectedSkills"
                value="Node.js"
                checked={formData.selectedSkills.includes("Node.js")}
                onChange={handleChange}
              />
              Node.js
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="whyChooseUs">Why should we choose you?</label>
          <textarea
            id="whyChooseUs"
            name="whyChooseUs"
            className="input-field"
            value={formData.whyChooseUs}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="cvUploaded"
              checked={formData.cvUploaded}
              onChange={handleChange}
            />
            I have uploaded my CV
          </label>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="applicationListSubmitted"
              checked={formData.applicationListSubmitted}
              onChange={handleChange}
            />
            I have submitted my application list
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      <FormStatus formData={formData} />
    </div>
  );
};

export default ApplicationForm;
