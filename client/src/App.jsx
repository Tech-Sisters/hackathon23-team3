// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing';
import SubscriptionPage from './pages/subscription';




function App() {
	const routes = [
		{
			path: '/',
			element: <LandingPage />
		},
		{
			path: '/subcriptionPage',
			element: <SubscriptionPage />
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

