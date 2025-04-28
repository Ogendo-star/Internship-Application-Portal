import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
	useLocation,
} from 'react-router-dom';
import ApplicationFilter from './components/ApplicationFilter';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ApplicationForm from './components/ApplicationForm';
import FormStatus from './components/FormStatus';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ROUTES = {
	HOME: '/',
	APPLY: '/apply',
	STATUS: '/apply-with-filter',
};

function App() {
	const [internships, setInternships] = useState([]);
	const [opportunityFilter, setOpportunityFilter] =
		useState('All Opportunities');
	const [companyFilter, setCompanyFilter] = useState('All Companies');
	const [locationFilter, setLocationFilter] = useState('All Locations');
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [selectedInternship, setSelectedInternship] = useState(null);
	const [visibleCount, setVisibleCount] = useState(4);

	useEffect(() => {
		const fetchInternships = async () => {
			try {
				setLoading(true);
				const res = await axios.get(
					'http://localhost:3000/internships'
				);
				setInternships(res.data);
				toast.success('Internships loaded successfully!');
			} catch (err) {
				setError('Error fetching internships');
				toast.error('Failed to load internships');
			} finally {
				setLoading(false);
			}
		};

		fetchInternships();
	}, []);

	const onOpportunityFilterChange = (selectedValue) => {
		setOpportunityFilter(selectedValue);
	};

	const onCompanyFilterChange = (selectedValue) => {
		setCompanyFilter(selectedValue);
	};

	const onLocationFilterChange = (selectedValue) => {
		setLocationFilter(selectedValue);
	};

	const uniqueCompanies = [
		...new Set(internships.map((item) => item.company)),
	];
	const uniqueLocations = [
		...new Set(internships.map((item) => item.location)),
	];

	const filteredInternships = internships.filter((item) => {
		const isOpportunityMatch =
			opportunityFilter === 'All Opportunities' ||
			item.opportunity
				.toLowerCase()
				.includes(opportunityFilter.toLowerCase());
		const isCompanyMatch =
			companyFilter === 'All Companies' ||
			item.company.toLowerCase().includes(companyFilter.toLowerCase());
		const isLocationMatch =
			locationFilter === 'All Locations' ||
			item.location.toLowerCase().includes(locationFilter.toLowerCase());

		return isOpportunityMatch && isCompanyMatch && isLocationMatch;
	});

	const currentInternships = filteredInternships.slice(0, visibleCount);

	const handleInternshipSelect = (internship) => {
		setSelectedInternship(internship);
		toast.info(
			`Applying to ${internship.opportunity} at ${internship.company}`
		);
	};

	useEffect(() => {
		setVisibleCount(4);
	}, [opportunityFilter, companyFilter, locationFilter]);

	const MainContent = () => {
		const location = useLocation();
		const path = location.pathname;

		useEffect(() => {
			if (path !== ROUTES.APPLY) setSelectedInternship('All');
		}, [path]);

		if (loading)
			return (
				<div className="flex justify-center items-center h-60 text-blue-700 text-xl">
					Loading internships...
				</div>
			);
		if (error)
			return (
				<div className="flex justify-center items-center h-60 text-red-600 text-lg">
					{error}
				</div>
			);

		switch (path) {
			case ROUTES.HOME:
				return (
					<>
						<h1
							className="text-3xl font-bold text-center mb-6"
							style={{ color: '#001f3f' }}
						>
							Available Internships
						</h1>

						<ApplicationFilter
							onOpportunityFilterChange={
								onOpportunityFilterChange
							}
							onCompanyFilterChange={onCompanyFilterChange}
							onLocationFilterChange={onLocationFilterChange}
							companies={uniqueCompanies}
							locations={uniqueLocations}
							locationFilter={locationFilter}
							companyFilter={companyFilter}
							opportunityFilter={opportunityFilter}
						/>

						<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
							{currentInternships.map((item) => (
								<div
									key={item.id}
									className="bg-white shadow-md rounded-lg p-4"
								>
									<h2 className="text-xl font-semibold text-gray-800">
										Opportunity: {item.opportunity}
									</h2>
									<p className="text-gray-600 mt-2">
										Company: {item.company}
									</p>
									<p className="text-gray-600">
										Location: {item.location}
									</p>
									<p className="text-gray-500 mt-2 text-sm">
										Description: {item.description}
									</p>
									<p className="text-gray-500 mt-2 text-sm">
										Type: {item.type}
									</p>
									<div className="mt-4">
										<NavLink
											to="/apply"
											className="inline-block px-4 py-2 bg-[#001f3f] text-white rounded hover:bg-blue-800 transition"
											onClick={() =>
												handleInternshipSelect(item)
											}
										>
											Apply Now
										</NavLink>
									</div>
								</div>
							))}

							{filteredInternships.length === 0 && (
								<p className="col-span-full text-center text-gray-500">
									No internships match your filters.
								</p>
							)}
						</div>

						{filteredInternships.length > visibleCount && (
							<div className="flex justify-center mt-4">
								<button
									className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-900 transition"
									onClick={() =>
										setVisibleCount((prev) => prev + 4)
									}
								>
									Load More
								</button>
							</div>
						)}
					</>
				);
			case ROUTES.APPLY:
				return (
					<ApplicationForm selectedInternship={selectedInternship} />
				);
			case ROUTES.STATUS:
				return <FormStatus internships={internships} />;
			default:
				return (
					<div className="text-center py-10 text-lg">
						Page not found
					</div>
				);
		}
	};

	return (
		<Router>
			<div className="flex flex-col min-h-screen">
				<ToastContainer position="top-right" autoClose={3000} />
				<NavBar />
				<main className="flex-grow bg-gray-100 p-6">
					<Routes>
						<Route path="/*" element={<MainContent />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
