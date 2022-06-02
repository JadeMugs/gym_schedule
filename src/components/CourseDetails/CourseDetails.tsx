/* eslint-disable multiline-ternary */
import React from "react";
import { ClosedAnnouncementIcon, DurationIcon } from "src/icons";
import { Category, ClubCourseByUser, Course, CourseByClub } from "src/types";
import {
	COURSE_STATUS,
	getCourseStatus,
	getCourseStatusElements,
} from "src/utils";

type ComponentCourseDetailsProps = {
	courseByClub: CourseByClub;
	courseData: Course;
	userCourse?: ClubCourseByUser;
	courseCategory: Category | undefined;
};

export const CourseDetails: React.FC<ComponentCourseDetailsProps> = ({
	courseByClub: course,
	courseData,
	userCourse,
	courseCategory,
}) => {
	const currentUserCourseStatus = userCourse?.state;
	const courseStatus = getCourseStatus(course, currentUserCourseStatus);
	const courseStatusElements = getCourseStatusElements({
		course,
		courseStatus,
	});

	return (
		<div key={course.id} className="course-details card">
			<div
				className="course-image mobile-hidden"
				style={{
					borderLeft: `10px solid ${courseCategory?.color}`,
					backgroundImage: `linear-gradient(80deg, transparent 85%, #ffffff 85%), url(${courseData.imageUrl})`,
				}}
			/>
			<div className="title">
				<p>{courseData.name}</p>
				<ClosedAnnouncementIcon className="pc-hidden" />
			</div>
			<div className="duration duration-container">
				<DurationIcon size="20px" /> {courseData.duration}
			</div>
			<p className="timing">
				{course.startingTime} <span>{course.endingTime}</span>
			</p>

			{courseStatus === COURSE_STATUS.WAITING ? (
				[
					<p className="button-message pc-hidden" key="waitingMessage">
						{courseStatusElements.title}
					</p>,
					<div className="pc-hidden status-message" key="waitingDescription">
						<p className="status-title">{course.waitingPeople}</p>
						<p className="status-text-message">
							{courseStatusElements.subtitle}
						</p>
					</div>,
					<div className="mobile-hidden status-message" key="waitingMessagePC">
						<p className="status-title">{courseStatusElements.title}</p>
						<p className="status-text-message">
							{course.waitingPeople} {courseStatusElements.subtitle}
						</p>
					</div>,
				]
			) : (
				<div className="status-message">
					<p className="status-title">{courseStatusElements.title}</p>
					<p className="status-text-message">{courseStatusElements.subtitle}</p>
				</div>
			)}
			<span className="button">{courseStatusElements.button}</span>

			<ClosedAnnouncementIcon className="mobile-hidden" />
		</div>
	);
};

// timing
// duration
// title
// status-message
// status-description
// button
