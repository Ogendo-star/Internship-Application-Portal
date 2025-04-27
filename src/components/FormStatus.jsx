import React, { useEffect, useState } from "react";

const FormStatus = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/internships")
      .then((res) => res.json())
      .then((data) => setApplications(data))
      .catch((error) => console.error("Error fetching applications:", error));
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-sky-900 mb-4 text-center">Submitted Applications</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-cyan-400">
          <thead className="bg-cyan-100 text-sky-900">
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Opportunity</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.length > 0 ? (
              applications.map((app, index) => (
                <tr key={index} className="text-center">
                  <td className="border px-4 py-2">{app.firstName} {app.lastName}</td>
                  <td className="border px-4 py-2">{app.email}</td>
                  <td className="border px-4 py-2">{app.opportunityOfInterest}</td>
                  <td className="border px-4 py-2">{app.address}</td>
                  <td className="border px-4 py-2 text-white">
                    <span className={`px-2 py-1 rounded text-sm ${
                      app.status === "Accepted"
                        ? "bg-green-500"
                        : app.status === "Rejected"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                    }`}>
                      {app.status || "pending"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">No applications found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormStatus;
