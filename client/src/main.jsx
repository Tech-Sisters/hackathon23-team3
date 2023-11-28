import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './App.jsx';
import './App.css';


const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<RecoilRoot>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			</RecoilRoot>
		</BrowserRouter>
	</React.StrictMode>
);


