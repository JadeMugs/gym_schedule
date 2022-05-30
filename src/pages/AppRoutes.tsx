import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Dashboard, Planning } from ".";
import { AppRoutesProps } from "src/types";
import { NavBar } from "src/components";
import { DashboardLinkIcon, PlannerLinkIcon } from "src/icons";

export const AppRoutes: React.FC<AppRoutesProps> = () => {
	return (
		<Routes>
			<Route path="/" element={<ProtectedRoute />}>
				<Route path="" element={<Dashboard />} />
				<Route path="planning" element={<Planning />} />
			</Route>
		</Routes>
	);
};

const ProtectedRoute = () => {
	const pages = [
		{ id: "Dashboard", path: "", icon: DashboardLinkIcon },
		{ id: "Planning", path: "planning", icon: PlannerLinkIcon },
	];

	return (
		<div>
			<NavBar links={pages} />
			<Outlet />
		</div>
	);
};
