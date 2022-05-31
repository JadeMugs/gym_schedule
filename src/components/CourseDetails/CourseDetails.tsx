import React from "react";
import { Category, ClubCourseByUser, Course, CourseByClub } from "src/types";
import { COURSE_STATUS, getCourseStatus } from "src/utils";

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

	const statusDetails = () => {
		const buttonElement = (
			text: string,
			classNames?: string,
			disabled?: boolean,
		) => (
			<button
				className={classNames}
				disabled={disabled ?? false}
				onClick={() => console.error("Oh no, I'm a dummy button!")}
			>
				{text.toUpperCase()}
			</button>
		);

		switch (courseStatus) {
			case COURSE_STATUS.FREE_COURSE:
				return (
					<div>
						<p>Attività libera</p>
					</div>
				);
			case COURSE_STATUS.BOOKED:
				return (
					<div>
						<p>Sei iscritto</p>
						{buttonElement("Annulla", "cancel-button")}
					</div>
				);
			case COURSE_STATUS.WAITING:
				return (
					<div>
						Sei in lista d&#39;attesa, {course.waitingPeople} prima di te
						{buttonElement("Annulla", "cancel-button")}
					</div>
				);
			case COURSE_STATUS.REGISTRATION_CLOSE:
				return (
					<div>
						<p>{course.startingBookingTime} </p>
						<p>All&#39;apertura dell&#39;iscrizione</p>

						{buttonElement("Iscriviti", "primary-button", true)}
					</div>
				);
			case COURSE_STATUS.SEATS_ALMOST_FULL:
			case COURSE_STATUS.SEATS_AVAILABLE:
				return (
					<div>
						<span className={courseStatus.toString()}>
							{course.availableSeats ?? 0}
						</span>
						/{course.totalSeats}
						<p>Posti disponibili</p>
						{buttonElement("Iscriviti", "primary-button")}
					</div>
				);
			case COURSE_STATUS.SHOULD_WAIT:
				return (
					<div>
						<p>{course.waitingPeople} </p>
						<p>persone in attesa</p>
						{buttonElement("Mettiti in attesa", "secondary-button")}
					</div>
				);
			default:
				return "";
		}
	};

	return (
		<div key={course.id} style={{ display: "flex" }}>
			<div style={{ width: "10px", backgroundColor: courseCategory?.color }} />
			<img src={courseData.imageUrl ?? ""} height="80px" />
			{/* TODO: use background image */}
			{courseData.name}
			{courseData.duration}
			{course.startingTime}
			{course.endingTime}

			{statusDetails()}
		</div>
	);
};
