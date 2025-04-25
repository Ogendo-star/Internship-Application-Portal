import React from 'react';

const ApplicationFilter = ({
  onOpportunityFilterChange,
  onCompanyFilterChange,
  onLocationFilterChange,
  companies,
  locations
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-blue-200 mb-6">
      <h3 className="text-lg font-semibold text-blue-800 mb-4">Filter Internships</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Opportunity</label>
          <select
            onChange={(e) => onOpportunityFilterChange(e.target.value)}
            className="block w-full border border-blue-300 rounded-md px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
          <select
            onChange={(e) => onCompanyFilterChange(e.target.value)}
            className="block w-full border border-blue-300 rounded-md px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="All">All</option>
            {companies.map((company, idx) => (
              <option key={idx} value={company}>{company}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <select
            onChange={(e) => onLocationFilterChange(e.target.value)}
            className="block w-full border border-blue-300 rounded-md px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="All">All</option>
            {locations.map((location, idx) => (
              <option key={idx} value={location}>{location}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ApplicationFilter;
