import React, { useState } from 'react';
import FormStatus from './FormStatus';

const App = () => {
  const [age, setAge] = useState('');
  const [skills, setSkills] = useState([]);
  const [cvUploaded, setCvUploaded] = useState(false);
  const [whyChooseUs, setWhyChooseUs] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showSkillsDropdown, setShowSkillsDropdown] = useState(false);

  const requiredSkills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js",
    "MongoDB", "Git", "REST API", "Figma", "Testing"
  ];

  const handleCVUpload = (e) => {
    setCvUploaded(e.target.files.length > 0);
  };

  const handleSkillToggle = (skill) => {
    setSkills((prevSkills) =>
      prevSkills.includes(skill)
        ? prevSkills.filter((s) => s !== skill)
        : [...prevSkills, skill]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const formData = {
    age: Number(age),
    skills,
    cvUploaded,
    whyChooseUs
  };

  return (
    <div style={{
      padding: "2rem",
      fontFamily: "Arial, sans-serif",
      maxWidth: "700px",
      margin: "0 auto"
    }}>
      <h1>Internship Application Portal</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div>
          <label><strong>Age</strong></label><br />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={{ width: "100%", padding: "10px" }}
            required
          />
        </div>

        <div>
          <label><strong>Skills</strong></label><br />
          <button
            type="button"
            onClick={() => setShowSkillsDropdown(!showSkillsDropdown)}
            style={{
              padding: "10px",
              backgroundColor: "#f0f0f0",
              border: "1px solid #ccc",
              borderRadius: "8px",
              cursor: "pointer",
              width: "100%",
              textAlign: "left"
            }}
          >
            Select Skills
          </button>
          {showSkillsDropdown && (
            <div style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              marginTop: "10px",
              backgroundColor: "#fafafa"
            }}>
              {requiredSkills.map(skill => (
                <label key={skill} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "8px"
                }}>
                  <input
                    type="checkbox"
                    value={skill}
                    checked={skills.includes(skill)}
                    onChange={() => handleSkillToggle(skill)}
                  />
                  {skill}
                </label>
              ))}
            </div>
          )}
        </div>

        <div>
          <label><strong>Upload CV</strong></label><br />
          <input type="file" onChange={handleCVUpload} required />
        </div>

        <div>
          <label><strong>Why choose us?</strong></label><br />
          <textarea
            value={whyChooseUs}
            onChange={(e) => setWhyChooseUs(e.target.value)}
            style={{ width: "100%", padding: "10px", height: "100px" }}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "12px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Submit Application
        </button>
      </form>

      {submitted && (
        <>
          <h2 style={{ marginTop: "2rem" }}>Application Status:</h2>
          <FormStatus formData={formData} />
        </>
      )}
    </div>
  );
};

export default App;
