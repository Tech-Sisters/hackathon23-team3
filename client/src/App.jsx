// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import MoviePage from "./pages/moviepage";
import BookPage from "./pages/bookpage";
import User from "./pages/userprofile/user";
import HomePage from "./pages/homepage";
import SubscriptionPage from "./pages/subscription";
import Faq from "./pages/faq/faq";
import ReviewEdit from "./pages/review/reviewedit";
import MovieDetails from "./pages/moviepage/moviedetails";

function App() {
	const routes = [
		{
			path: "/",
			element: <HomePage/>
		},
		{
			path: "/movies",
			element: <MoviePage/>
		},
		{
			path: "/books",
			element: <BookPage/>
		},
		{
			path: "/user-profile",
			element: <User />
		},
		{
			path: "/subscribe",
			element: <SubscriptionPage />
		},
		{
			path: "/faq",
			element: <Faq />
		}, 
		{
			path: "/reviewedit",
			element: <ReviewEdit />
		},
		{
			path: "/movies/:id",
			element: <MovieDetails />
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

