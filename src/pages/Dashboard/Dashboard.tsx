import React, { useMemo, useState } from "react";
import { PageDashboardProps } from "src/types";
import { AnnouncementList } from "src/data";
import { Announcement } from "src/components";

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

	return <div className="dashboard">{AnnouncementsElement}</div>;
};
