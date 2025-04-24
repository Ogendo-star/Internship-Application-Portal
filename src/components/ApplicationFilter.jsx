import React from 'react';

const ApplicationFilter = ({ onOpportunityFilterChange }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <label htmlFor="opportunity" className="block text-sm font-medium text-gray-700 mb-2">
        Filter by Opportunity
      </label>
      <select
        id="opportunity"
        onChange={(e) => onOpportunityFilterChange(e.target.value)}
        className="w-full border border-gray-300 rounded p-2"
      >
        <option value="All">All Opportunities</option>
        <option value="Frontend Development">Frontend Developer</option>
        <option value="Data Analysis">Data Analysis</option>
        <option value="UI/UX Design">UI/UX Design</option>
        <option value="Digital Marketing">Digital Marketing</option>
        <option value="Backend Development">Backend Development</option>
        <option value="Content Writing">Content Writing</option>
        <option value="Cloud Engineering">Cloud Engineering</option>
        <option value="Graphic Design">Graphic Design</option>
        <option value="Project Management">Project Management</option>
        <option value="Mobile App Development">Mobile App Development</option>
      </select>
    </div>
  );
};

export default ApplicationFilter;