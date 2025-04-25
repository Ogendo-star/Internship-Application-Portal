import React, { useState } from 'react';
  import DatePicker from 'react-datepicker';
  import 'react-datepicker/dist/react-datepicker.css';
  


  function ApplicationForm(){
const generateYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear; i >= 1970; i--) {
    years.push(i);
  }
  return years;
};

  const [user, setUser] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: null,
    yearOfGraduation: '',
    opportunityOfInterest: '',
    educationLevel: '',
    address: '',
    gender: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const defaultStatus = "Pending"; 
  
    fetch('http://localhost:3000/applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...user, status: defaultStatus }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(user);
  
        setUser({
          firstName: '',
          middleName: '',
          lastName: '',
          email: '',
          phone: '',
          dob: '',
          yearOfGraduation: '',
          opportunityOfInterest: '',
          educationLevel: '',
          address: '',
          gender: ''
        });
      });
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg font-serif "
      >
        <h1 className="text-3xl font-bold mb-6">Internship Application Form</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="border p-2 rounded"
            value={user.firstName}
            onChange={handleChange}
            required
            
          />
          <input
            name="middleName"
            type="text"
            placeholder="Second Name"
            className="border p-2 rounded"
            value={user.secondName}
            onChange={handleChange}
            required
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="border p-2 rounded"
            value={user.lastName}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
            value={user.email}
            onChange={handleChange}
            required
          />
          <div className="col-span-2">
  <label className="block mb-1">Phone Number</label>
  <div className="flex">
    <select
      className="border p-2 rounded-l"
      onChange={(e) =>
        setUser((prev) => ({
          ...prev,
          phone: e.target.value + prev.phone.replace(/^\+\d+/, '')
        }))
      }
    >
      <option value="+254">+254 (KE)</option>
      <option value="+1">+1 (US)</option>
      <option value="+44">+44 (UK)</option>
    </select>
    <input
      name="phone"
      type="tel"
      placeholder="Phone Number"
      className="border p-2 rounded-r w-full"
      value={user.phone}
      onChange={handleChange}
      required
    />
  </div>
</div>

            <DatePicker
              selected={user.dob}
              onChange={(date) =>
                setUser((prevFormData) => ({ ...prevFormData, dob: date }))
              }
              dateFormat="yyyy-MM-dd"
              placeholderText="Date of Birth"
              className="w-full border p-2 rounded"
              maxDate={new Date()}
              showYearDropdown
              scrollableYearDropdown
          
          />
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700 mb-1">Gender</label>
            <div className="flex gap-4 border p-2 rounded">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={user.gender === "Male"}
                  onChange={handleChange}
                />
                Male
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={user.gender === "Female"}
                  onChange={handleChange}
                />
                Female
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={user.gender === "Other"}
                  onChange={handleChange}
                />
                Other
              </label>
            </div>
          </div>
          <select
            name="yearOfGraduation"
            className="border p-2 rounded"
            value={user.yearOfGraduation}
            onChange={handleChange}
            required
          >
            <option value="">Year of Graduation</option>
            {generateYears().map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <select
            name="opportunityOfInterest"
            className="border p-2 rounded"
            value={user.opportunityOfInterest}
            onChange={handleChange}
            required
          >
            <option value="">Opportunity of Interest</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Data Analysis">Data Analyst</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Backend Development">Backend Development</option>
            <option value="Content Writing">Content Writing</option>
            <option value="Cloud Engineering">Cloud Engineering</option>
            <option value="Graphic design">Graphic Design</option>
            <option value="Project management">Project Management</option>
            <option value="Mobile app development">Mobile App Development</option>
          </select>
          <select
            name="educationLevel"
            className="border p-2 rounded"
            value={user.educationLevel}
            onChange={handleChange}
            required
          >
            <option value="">Education Level</option>
            <option value="Diploma">Diploma</option>
            <option value="Degree">Degree</option>
            <option value="Masters">Masters</option>
            <option value="PhD">PhD</option>
          </select>
          <select
  name="address"
  className="border p-2 rounded"
  value={user.address}
  onChange={handleChange}
  required
>
  <option value="">Select Address</option>
  <option value="Kakamega">Kakamega</option>
  <option value="Nakuru">Nakuru</option>
  <option value="Mombasa">Mombasa</option>
  <option value="Kitale">Kitale</option>
  <option value="Nairobi">Nairobi</option>
  <option value="Kisumu">Kisumu</option>
  </select>
  
  </div>
  <button
   type="submit"
   className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
   >
    Submit
  </button>
      </form>
    </div>
  );
};

export default  ApplicationForm;
        
            
