import React, { useState } from 'react';
import ApplicationFilter from './components/ApplicationFilter';
import InternshipData from './data/Internship';

const App = () => {
  const [opportunityFilter, setOpportunityFilter] = useState('All');

  const filteredInternships = InternshipData.filter((item) =>
    opportunityFilter === 'All' || item.opportunity === opportunityFilter
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-800">Available Internships</h1>

      <div className="max-w-md mx-auto">
        <ApplicationFilter onOpportunityFilterChange={setOpportunityFilter} />
      </div>

      <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredInternships.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold text-gray-800">Opportunity: {item.opportunity}</h2>
            <p className="text-gray-600 mt-2">Company: {item.company}</p>
            <p className="text-gray-600">Location: {item.location}</p>
            <p className="text-gray-500 mt-2 text-sm">Description: {item.description}</p>
            <p className="text-gray-500 mt-2 text-sm">Type: {item.type}</p>
          </div>
        ))}

        {filteredInternships.length === 0 && (
          <p className="col-span-full text-center text-gray-500">No opportunities match your filter.</p>
        )}
      </div>
    </div>
  );
};

export default App;