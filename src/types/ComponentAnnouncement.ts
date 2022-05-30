export type Announcement = {
	title: string;
	date: string;
	details: string;
	isRead: boolean;
};

export type AnnouncementList = Announcement[];

export type ComponentAnnouncementProps = Announcement & {
	isOpen: boolean;
	onAnnouncementClick: (title: string) => void;
};
