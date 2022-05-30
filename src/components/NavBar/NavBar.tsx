import React, { useMemo } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { ComponentNavBarProps } from "src/types";

export const NavBar: React.FC<ComponentNavBarProps> = ({ links }) => {
	const location = useLocation();

	const activeLink = useMemo(
		() =>
			(
				links.find((page) => matchPath(page.path, location.pathname)) ??
				links[0]
			).id,
		[links, location.pathname],
	);

	const linksElements = useMemo(
		() =>
			links.map(({ icon: Icon, id, path }) => (
				<div key={id}>
					{/* TODO: add style */}
					<Link to={path}>
						<Icon color={activeLink === id ? "red" : "gray"} />
					</Link>
				</div>
			)),
		[activeLink, links],
	);

	return <div>{linksElements}</div>;
};
