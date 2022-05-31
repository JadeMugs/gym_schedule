// Announcements

export type Announcement = {
	title: string;
	date: string;
	details: string;
	isRead: boolean;
};

export type AnnouncementList = Announcement[];

// Couses categories

export type Category = {
	id: string;
	label: string;
	color?: string;
};

export type CategoriesList = Category[];

// Clubs

export type Club = {
	id: string;
	name: string;
	address: string;
};

export type ClubList = Club[];

// Courses

export type Course = {
	id: string;
	name: string;
	duration: string;
	categoryId: Category["id"];
	imageUrl?: string;
};

export type CourseList = Course[];

export type CourseByClub = {
	id: string;
	courseId: Course["id"];
	clubId: Club["id"];
	room: string;
	daysOfWeek:
		| "Monday"
		| "Tuesday"
		| "Wednesday"
		| "Thursday"
		| "Friday"
		| "Saturday"
		| "Sunday"[];
	startingTime: string;
	endingTime: string;
	startingBookingTime: string;
	shouldBook: boolean;
	totalSeats?: number;
	availableSeats?: number;
	waitingPeople?: number;
};

export type CoursesListByClub = {
	[clubId: string]: CourseByClub[];
};

export type ClubCourseByUser = {
	// date: Date; // Note: the date will not be used for now
	courseClubId: CourseByClub["id"];
	state: "booked" | "waiting" | undefined;
};

export type UserCoursesByClub = {
	[clubId: string]: ClubCourseByUser[];
};
