import React, { useMemo, useState } from "react";
import { Categories, Clubs, Courses, CoursesByClub } from "src/data";
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
			{dates.map((date) => (
				<div key={date}>{date}</div>
			))}

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
						tutte
					</option>
					{Courses.map((course) => (
						<option key={course.id} value={course.id}>
							{course.name}
						</option>
					))}
				</select>
			</div>

			<div>
				{selectedClub &&
					currentClubCourses.map((course) => (
						<div key={course.id}>{course.id}</div>
					))}
			</div>
		</div>
	);
};
