// Tiny conflict between linter and prettier rules, disable rules for now
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
import React from "react";
import { Clubs } from "src/data";
import { ClosedAnnouncementIcon, DurationIcon } from "src/icons";
import { Course, CourseByClub } from "src/types";

export type ComponentCourseReminderProps = {
	courseData: Course;
	clubCourseData: CourseByClub;
	waitingPeople?: number;
};

export const CourseReminder: React.FC<ComponentCourseReminderProps> = ({
	courseData,
	clubCourseData,
	waitingPeople,
}) => (
	<div className={`course-reminder card ${waitingPeople ? "with-button" : ""}`}>
		<div
			className={`image ${waitingPeople ? "mobile-hidden" : ""}`}
			style={{
				backgroundImage: `url(${courseData.imageUrl})`,
			}}
		/>
		<div className={`name ${waitingPeople ? "" : "name-overlay"}`}>
			<p>{courseData.name}</p>
			<ClosedAnnouncementIcon className="icon" />
		</div>
		<div className="timing">
			<strong>Oggi</strong>
			<p>
				<strong>{clubCourseData.startingTime}</strong>{" "}
				{clubCourseData.endingTime}
			</p>
		</div>
		<div className="duration duration-container">
			<DurationIcon size="20px" /> {courseData.duration}
		</div>
		{waitingPeople && waitingPeople > 0
			? [
					<p key="message" className="message">
						{waitingPeople} persone prima di te
					</p>,
					<button key="button" className="button cancel-button">
						ANNULLA
					</button>,
			  ]
			: [
					<div className="club" key="club">
						<p className="club-name">Club</p>
						<p>
							{Clubs.find(({ id }) => id === clubCourseData.clubId)?.name ??
								"-"}
						</p>
					</div>,
					<div className="room" key="room">
						<p className="room-name">Sala</p>
						<p> {clubCourseData.room}</p>
					</div>,
			  ]}
	</div>
);
