import React, { useMemo } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { ComponentNavBarProps } from "src/types";
import { NotificationIcon } from "src/icons";

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
				<span key={id}>
					<Link
						to={path}
						className={activeLink === id ? "active-link link" : "link"}
					>
						<Icon size={32} />
						{/* TODO: fix the size */}
					</Link>
				</span>
			)),
		[activeLink, links],
	);

	const notificationElement = <NotificationIcon size={32} className="link" />;
	const avatarElement = (
		<img src="https://i.pravatar.cc/100?img=16" className="avatar" />
	);

	return (
		<nav>
			<div>
				{linksElements}
				{notificationElement}
				{avatarElement}
			</div>
		</nav>
	);
};
