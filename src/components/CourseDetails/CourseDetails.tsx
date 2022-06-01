import React from "react";
import { ClosedAnnouncementIcon, DurationIcon } from "src/icons";
import { Category, ClubCourseByUser, Course, CourseByClub } from "src/types";
import { getCourseStatus, getCourseStatusElements } from "src/utils";

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
		<div
			key={course.id}
			style={{
				// TODO: move style to css file
				display: "inline-grid",
				gridTemplateColumns: "2fr 2fr 1fr 2fr 2fr 2fr 1fr",
				borderLeft: `10px solid ${courseCategory?.color}`,
				alignItems: "center",
				width: "100%",
				columnGap: "10px",
			}}
		>
			<div
				className="course-image"
				style={{
					width: "100%",
					height: "100%",
					backgroundImage: `linear-gradient(80deg, transparent 85%, #ffffff 85%), url(${courseData.imageUrl})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
				}}
			/>
			<p>{courseData.name}</p>
			<div>
				<DurationIcon /> {courseData.duration}
			</div>
			<p>
				<strong>{course.startingTime}</strong> {course.endingTime}
			</p>

			<div>
				{courseStatusElements.title}
				{courseStatusElements.subtitle}
			</div>
			{courseStatusElements.button || <div />}

			<div>
				<ClosedAnnouncementIcon />
			</div>
		</div>
	);
};
