import { Announcement } from "src/types";

export type ComponentAnnouncementProps = Announcement & {
	isOpen: boolean;
	onAnnouncementClick: (title: string) => void;
};
