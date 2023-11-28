// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing';
import Footer from './components/footer';
import Header from './components/header'




function App() {
	const routes = [
		{
			path: '/',
			element: <LandingPage/>
		},
		

		

		
	];
	return (
		<div className="w-full">
			{/* do not touch >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
			<Routes>
				{routes.map(({path, element}) => (
					<Route
						key={path}
						path={path}
						element={element}
					/>
				))}
			</Routes>
			
		</div>
	);
}

export default App;

