import React from "react";
import { ComponentSectionTitleProps } from "src/types";

export const SectionTitle: React.FC<ComponentSectionTitleProps> = ({
	title,
	icon,
	showButton,
	className,
}) => {
	return (
		<div className={`section-title ${className}`}>
			<span>
				{icon}
				<h2>{title.toUpperCase()}</h2>
			</span>
			{showButton && (
				<button className="section-button warning">Vedi tutti</button>
			)}
		</div>
	);
};
