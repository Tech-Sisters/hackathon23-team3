// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing';
import Login from './pages/login/Login';
import Signup from './pages/signup/signup';
import User from './pages/UserProfile/user';
import HomePage from './pages/homepage';
import SubscriptionPage from './pages/subscription';
import Faq from "./pages/FAQ/faq";




function App() {
	const routes = [
		{
			path: '/',
			element: <LandingPage/>
		},
		{
			path: '/home',
			element: <HomePage/>
		},
		{
			path: '/login',
			element: <Login />
		},
		{
			path: '/signup',
			element: <Signup />
		},
		{
			path: '/user-profile',
			element: <User />
		},
		{
			path: '/subscribe',
			element: <SubscriptionPage />
		}
		
		
		

		

		
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

