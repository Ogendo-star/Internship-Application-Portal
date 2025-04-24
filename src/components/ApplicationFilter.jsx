import React from 'react';

const ApplicationFilter = ({ 
  onOpportunityFilterChange, 
  onCompanyFilterChange, 
  onLocationFilterChange,
  companies,
  locations
}) => {
  return (
    <div className="bg-white shadow-md rounded p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      
      <div>
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

      
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
          Filter by Company
        </label>
        <select
          id="company"
          onChange={(e) => onCompanyFilterChange(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        >
          <option value="All">All Companies</option>
          {companies && companies.map((company, index) => (
            <option key={index} value={company}>{company}</option>
          ))}
        </select>
      </div>

    
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
          Filter by Location
        </label>
        <select
          id="location"
          onChange={(e) => onLocationFilterChange(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        >
          <option value="All">All Locations</option>
          {locations && locations.map((location, index) => (
            <option key={index} value={location}>{location}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ApplicationFilter;