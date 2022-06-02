import React, { useMemo, useState } from "react";
import "src/styles/dashboard.scss";
import { ClubCourseByUser, PageDashboardProps } from "src/types";
import {
	AnnouncementList,
	ClubCoursesById,
	CoursesById,
	UserCourses,
} from "src/data";
import {
	Ads,
	Announcement,
	CourseReminder,
	Magazine,
	SectionTitle,
} from "src/components";
import { MagazineIcon, NotificationIcon, PlannerLinkIcon } from "src/icons";

export const Dashboard: React.FC<PageDashboardProps> = () => {
	const [openAnnouncements, setOpenAnnouncements] = useState<string[]>([]);

	const toggleAnnouncement = (title: string) => {
		setOpenAnnouncements((current) => {
			if (current.includes(title)) {
				return current.filter((announcement) => announcement !== title);
			} else {
				return [...current, title];
			}
		});
	};

	const AnnouncementsElement = useMemo(
		() =>
			AnnouncementList.map(({ title, ...props }) => (
				<Announcement
					key={title}
					title={title}
					{...props}
					isOpen={openAnnouncements.includes(title)}
					onAnnouncementClick={toggleAnnouncement}
				/>
			)),
		[openAnnouncements],
	);

	const userCourses: ClubCourseByUser[] = Object.values(UserCourses).flatMap(
		(courses) => courses,
	);

	const userBookedList = userCourses.filter(({ state }) => state === "booked");
	const userWaitingList = userCourses.filter(
		({ state }) => state === "waiting",
	);
	const courseReminderElement = (
		courseClubId: string,
		useWaitingPeople?: boolean,
	) => {
		const clubCourse = ClubCoursesById[courseClubId];
		const couserId = clubCourse.courseId;
		const waitingPeople = useWaitingPeople
			? clubCourse.waitingPeople
			: undefined;

		return (
			<CourseReminder
				key={courseClubId}
				courseData={CoursesById[couserId]}
				clubCourseData={clubCourse}
				waitingPeople={waitingPeople}
			/>
		);
	};

	return (
		<div className="dashboard">
			<div className="dashboard-courses">
				<div>
					<SectionTitle
						icon={<PlannerLinkIcon />}
						className="secondary"
						title="Le tue prossime attività"
					/>
					<div className="courses-booked">
						{userBookedList.map(({ courseClubId }) =>
							courseReminderElement(courseClubId),
						)}
					</div>
				</div>

				<div>
					<SectionTitle
						className="primary"
						title={`Hai ${userWaitingList.length} attività in lista d'attesa`}
					/>
					<div className="courses-waiting">
						{userWaitingList.map(({ courseClubId }) =>
							courseReminderElement(courseClubId, true),
						)}
					</div>
				</div>
			</div>

			<Ads />

			<div>
				<SectionTitle
					className="primary"
					title="Avvisi"
					icon={<NotificationIcon />}
					showButton={true}
				/>
				{AnnouncementsElement}
			</div>

			<Ads />

			<div>
				<SectionTitle
					className="primary"
					title="Magazine"
					icon={<MagazineIcon />}
					showButton={true}
				/>
				<div className="magazines">
					{/* TODO: add mobile responsiveness */}
					{Array.from(Array(4)).map((_, index) => (
						<Magazine key={index} />
					))}
				</div>
			</div>
		</div>
	);
};
