/* eslint-disable multiline-ternary */
import React from "react";
import { OpenAnnouncementIcon, ClosedAnnouncementIcon } from "src/icons";
import { ComponentAnnouncementProps } from "src/types";

export const Announcement: React.FC<ComponentAnnouncementProps> = ({
	title,
	date,
	details,
	isRead,
	isOpen,
	onAnnouncementClick,
}) => {
	return (
		<div className="announcement card">
			<div onClick={() => onAnnouncementClick(title)}>
				{/* TODO: handle css class and style */}
				{isRead ? (
					<div className="read-ribbon">{""}</div>
				) : (
					<div className="read-ribbon">&bull;</div>
				)}
				<small className="date">{date}</small>
				<h5 className="title">{title}</h5>

				{isOpen ? (
					<OpenAnnouncementIcon className="icon" />
				) : (
					<ClosedAnnouncementIcon className="icon" />
				)}
			</div>

			{isOpen && <p>{details}</p>}
		</div>
	);
};
