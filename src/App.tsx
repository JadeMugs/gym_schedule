import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "src/pages/AppRoutes";

const AppWrapper = () => {
	return (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
};

const App = () => {
	return <AppRoutes />;
};

export default AppWrapper;
