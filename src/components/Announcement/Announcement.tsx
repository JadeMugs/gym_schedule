/* eslint-disable multiline-ternary */
// TODO: disable rule
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
			<div className="summary" onClick={() => onAnnouncementClick(title)}>
				{isRead ? (
					<div className="read-ribbon" />
				) : (
					<div className="read-ribbon bullet" />
				)}
				<small className="date">{date}</small>
				<p className={`title ${!isRead && "bold-title"}`}>{title}</p>

				{isOpen ? (
					<OpenAnnouncementIcon className="icon" />
				) : (
					<ClosedAnnouncementIcon className="icon" />
				)}
			</div>

			{isOpen && (
				<div className="content">
					<p className="text-truncate">{details}</p>
				</div>
			)}
		</div>
	);
};
