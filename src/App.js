import * as React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import RootLayoutPage from './pages/RootLayout';
import HomePage from './pages/HomePage';
import ToDoPage from './pages/ToDoPage';

export default function App() {
	const router = createBrowserRouter([
		{
			path: '/', 
			element: <RootLayoutPage />,
			children: [
				{ index: true, element: <HomePage /> },
				{ path: '/todo', element: <ToDoPage /> },
			],
		}
	]);

  return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
  );
};
