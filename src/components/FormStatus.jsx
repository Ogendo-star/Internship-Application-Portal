import React, { useState } from 'react';

function FormStatus() {
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState([]);
  const [cvUploaded, setCvUploaded] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [status, setStatus] = useState('');

  const requiredSkills = ['JavaScript', 'React'];

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;
    setSkills((prevSkills) =>
      checked ? [...prevSkills, value] : prevSkills.filter((skill) => skill !== value)
    );
  };

  const checkStatus = () => {
    const ageValid = parseInt(age) >= 18;
    const descriptionValid = description.trim().length > 10;
    const skillsValid = requiredSkills.every((skill) => skills.includes(skill));
    const cvValid = cvUploaded;

    const conditionsMet = [ageValid, descriptionValid, skillsValid, cvValid].filter(Boolean).length;

    if (conditionsMet === 4) {
      setStatus('Accepted');
    } else if (conditionsMet === 0) {
      setStatus('Rejected');
    } else {
      setStatus('Pending');
    }
  };

  return (
    <div className="form-status">
      <h1>Internship Application Form</h1>

      <label>
        Age (18+):
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>

      <label>
        Description (10+ characters):
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>

      <fieldset>
        <legend>Skills (Required: JavaScript, React)</legend>
        <label><input type="checkbox" value="JavaScript" onChange={handleSkillChange} /> JavaScript</label>
        <label><input type="checkbox" value="React" onChange={handleSkillChange} /> React</label>
        <label><input type="checkbox" value="HTML" onChange={handleSkillChange} /> HTML</label>
        <label><input type="checkbox" value="CSS" onChange={handleSkillChange} /> CSS</label>
      </fieldset>

      <label>
        Phone Number:
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </label>

      <label>
        Portfolio URL:
        <input type="url" value={portfolioUrl} onChange={(e) => setPortfolioUrl(e.target.value)} />
      </label>

      <label>
        Upload CV:
        <input type="file" onChange={(e) => setCvUploaded(e.target.files.length > 0)} />
      </label>

      <button onClick={checkStatus}>Check Status</button>

      {status && (
        <div>
          <h2>Application Status: {status}</h2>
        </div>
      )}
    </div>
  );
}

export default FormStatus;
