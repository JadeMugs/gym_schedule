import React, { useMemo, useState } from "react";
import { CourseDetails } from "src/components/CourseDetails";
import {
	Categories,
	Clubs,
	Courses,
	CoursesByClub,
	UserCourses,
} from "src/data";
import { PagePlanningProps } from "src/types";

export const Planning: React.FC<PagePlanningProps> = () => {
	const today = new Date("2019-12-16");
	const dates = Array.from(Array(7).keys()).map((i) => i + today.getDate());

	// State

	const [selectedClub, setSelectedClub] = useState<string | undefined>(
		Clubs[0].id,
	);
	const [selectedCourse, setSelectedCourse] = useState<string | undefined>();
	const [selectedCategory, setSelectedCategory] = useState<
		string | undefined
	>();

	// Memoized data

	const coursesData = useMemo(
		() => Object.fromEntries(Courses.map((course) => [course.id, course])),
		[],
	);

	const currentClubCourses = useMemo(() => {
		if (!selectedClub) return [];
		let courses = CoursesByClub[selectedClub];

		if (selectedCourse) {
			courses = courses.filter((course) => course.courseId === selectedCourse);
		}
		if (selectedCategory && selectedCategory !== "all") {
			courses = courses.filter(
				(course) =>
					coursesData[course.courseId]?.categoryId === selectedCategory,
			);
		}
		return courses;
	}, [selectedClub, selectedCourse, selectedCategory, coursesData]);

	// JSX

	return (
		<div>
			{/* Dates are not handled */}
			{dates.map((date) => (
				<div key={date}>{date}</div>
			))}

			{/* Filters */}
			<div>
				<select name="club" onChange={(e) => setSelectedClub(e.target.value)}>
					{Clubs.map((club) => (
						<option key={club.id} value={club.id}>
							{club.name}
						</option>
					))}
				</select>

				<select
					name="category"
					onChange={(e) => setSelectedCategory(e.target.value)}
				>
					{Categories.map((category) => (
						<option key={category.id} value={category.id}>
							{category.label}
						</option>
					))}
				</select>

				<select
					name="course"
					onChange={(e) => setSelectedCourse(e.target.value)}
				>
					<option key="empty" value={undefined}>
						{/* TODO: use a dictionary */}
						Tutte
					</option>
					{Courses.map((course) => (
						<option key={course.id} value={course.id}>
							{course.name}
						</option>
					))}
				</select>
			</div>

			{/* Courses */}
			<div>
				{selectedClub &&
					currentClubCourses.map((course) => {
						const courseData = coursesData[course.courseId];
						const currentUserCourse = UserCourses[selectedClub].find(
							(userCourse) => userCourse.courseClubId === course.id,
						);
						const category = Categories.find(
							({ id }) => courseData.categoryId === id,
						);

						return (
							<CourseDetails
								key={course.id}
								courseByClub={course}
								courseData={courseData}
								userCourse={currentUserCourse}
								courseCategory={category}
							/>
						);
					})}
			</div>
		</div>
	);
};
