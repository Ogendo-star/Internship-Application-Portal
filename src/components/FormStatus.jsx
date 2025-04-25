import React, { useState } from "react";

// Skills options for dropdown
const skillsOptions = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "SQL",
  "HTML/CSS",
  "Machine Learning",
  "Git/GitHub",
  "Django"
];

const FormStatus = () => {
  const [age, setAge] = useState("");
  const [skills, setSkills] = useState([]);
  const [cvUploaded, setCvUploaded] = useState(false);
  const [whyChooseUs, setWhyChooseUs] = useState("");
  const [status, setStatus] = useState("");

  // Handle skill selection
  const handleSkillsChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSkills((prevSkills) => [...prevSkills, value]);
    } else {
      setSkills((prevSkills) => prevSkills.filter((skill) => skill !== value));
    }
  };

  // Check if conditions are met
  const handleSubmit = (e) => {
    e.preventDefault();
    let newStatus = "Rejected"; // Default status

    if (age >= 18 && skills.length >= 3 && cvUploaded && whyChooseUs.trim()) {
      newStatus = "Accepted";
    } else if (age >= 18 && skills.length >= 1 && cvUploaded) {
      newStatus = "Pending";
    }

    setStatus(newStatus);
  };

  return (
    <div className="form-status">
      <h2>Internship Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            placeholder="Enter your age"
          />
        </div>

        <div className="form-group">
          <label>Skills:</label>
          {skillsOptions.map((skill, index) => (
            <div key={index}>
              <input
                type="checkbox"
                value={skill}
                onChange={handleSkillsChange}
              />
              <label>{skill}</label>
            </div>
          ))}
        </div>

        <div className="form-group">
          <label htmlFor="cv-upload">Upload CV:</label>
          <input
            type="file"
            id="cv-upload"
            onChange={(e) => setCvUploaded(e.target.files.length > 0)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="why-choose-us">Why Choose Us:</label>
          <textarea
            id="why-choose-us"
            value={whyChooseUs}
            onChange={(e) => setWhyChooseUs(e.target.value)}
            required
            placeholder="Why do you want to work with us?"
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {status && <h3>Status: {status}</h3>}
    </div>
  );
};

export default FormStatus;
