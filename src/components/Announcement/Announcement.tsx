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
		<div className="announcement">
			<div onClick={() => onAnnouncementClick(title)}>
				{/* TODO: handle css class and style */}
				{isRead ? <>{""}</> : <>&bull;</>}
				{date}
				<h5>{title}</h5>

				{isOpen ? <OpenAnnouncementIcon /> : <ClosedAnnouncementIcon />}
			</div>

			{isOpen && <p>{details}</p>}
		</div>
	);
};
