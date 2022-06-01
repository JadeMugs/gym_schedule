import React, { useMemo, useState } from "react";
import { ClubCourseByUser, PageDashboardProps } from "src/types";
import { AnnouncementList, UserCourses } from "src/data";
import { Announcement, Magazine, SectionTitle } from "src/components";
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

	const userWaitingList: ClubCourseByUser[] = Object.values(
		UserCourses,
	).flatMap((courses) => courses.filter(({ state }) => state === "waiting"));

	return (
		<div className="dashboard">
			<SectionTitle
				icon={<PlannerLinkIcon />}
				className="secondary"
				title="Le tue prossime attività"
			/>
			{userWaitingList.length > 0 && (
				<SectionTitle
					className="primary"
					title={`Hai ${userWaitingList.length} attività in lista d'attesa`}
				/>
			)}
			<div>
				<SectionTitle
					className="primary"
					title="Avvisi"
					icon={<NotificationIcon />}
					showButton={true}
				/>
				{AnnouncementsElement}
			</div>

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
