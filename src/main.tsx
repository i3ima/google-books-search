import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.render(
		<React.StrictMode>
		 <QueryClientProvider client={queryClient}>
			<Provider store={store}>
			 <App />
			</Provider>
		 </QueryClientProvider>
		</React.StrictMode>,
		document.getElementById('root'),
);
