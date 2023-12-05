/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { RecoilRoot } from "recoil";
import App from "./App.jsx";
import "./App.css";


const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
		    <Provider store={store}>
				<RecoilRoot>
					<QueryClientProvider client={queryClient}>
						<App />
					</QueryClientProvider>
				</RecoilRoot>
		     </Provider>
		</BrowserRouter>
	</React.StrictMode>
);


