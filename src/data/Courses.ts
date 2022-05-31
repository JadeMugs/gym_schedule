import {
	CourseByClub,
	CoursesListByClub,
	CourseList,
	UserCoursesByClub,
} from "src/types";
import { Clubs } from "./Clubs";

const MOCK_STARTING_TIME = "08:30";
const MOCK_ENDING_TIME = "09:15";
const MOCK_BOOKING_TIME = "12 ore";

const MOCK_BASIC_COURSE_DATA: Partial<CourseByClub> = {
	startingTime: MOCK_STARTING_TIME,
	endingTime: MOCK_ENDING_TIME,
	startingBookingTime: MOCK_BOOKING_TIME,
};

const MOCK_EXTRA_COURSES_DATA: Partial<CourseByClub>[] = [
	{
		shouldBook: true,
		totalSeats: 30,
		availableSeats: 18,
		waitingPeople: undefined,
	},
	{
		shouldBook: true,
		totalSeats: 30,
		availableSeats: 18,
		waitingPeople: undefined,
	},
	{
		shouldBook: true,
		totalSeats: 30,
		availableSeats: 2,
		waitingPeople: 2,
	},
	{
		shouldBook: false,
		totalSeats: undefined,
		availableSeats: undefined,
		waitingPeople: undefined,
	},
	{
		shouldBook: true,
		totalSeats: undefined,
		availableSeats: undefined,
		waitingPeople: undefined,
	},
	{
		shouldBook: true,
		totalSeats: undefined,
		availableSeats: undefined,
		waitingPeople: 2,
	},
];

const COURSE_IDS_LIST = [
	"yoga",
	"pancafit",
	"bodypump",
	"yoga",
	"lesmillesgrit",
	"playwater",
	"yoga",
	"yoga",
	"pancafit",
	"bodypump",
	"yoga",
	"lesmillesgrit",
	"playwater",
];

const MOCK_COURSE_STATE = [
	"booked",
	undefined,
	undefined,
	undefined,
	"waiting",
];

// Courses Data

export const Courses: CourseList = [
	{
		id: "yoga",
		name: "Hatha Yoga",
		duration: "30m",
		categoryId: "tone",
	},
	{
		id: "pancafit",
		name: "PANCAFIT",
		duration: "45m",
		categoryId: "dance",
	},
	{
		id: "bodypump",
		name: "BODYPUMP",
		duration: "50m",
		categoryId: "strong",
	},
	{
		id: "lesmillesgrit",
		name: "LES MILLES GRIT",
		duration: "45m",
		categoryId: "jump",
	},
	{
		id: "playwater",
		name: "PLAY ACQUA",
		duration: "30m",
		categoryId: "water",
	},
];

export const CoursesByClub: CoursesListByClub = Clubs.reduce(
	(clubs, { id }) => ({
		...clubs,
		[id]: COURSE_IDS_LIST.map(
			(courseId, index) =>
				({
					id: `${index}-${id}-${courseId}`,
					courseId,
					clubId: id,
					daysOfWeek: [
						"Monday",
						"Tuesday",
						"Wednesday",
						"Thursday",
						"Friday",
						"Saturday",
						"Sunday",
					],
					room: "Conscious",
					...MOCK_BASIC_COURSE_DATA,
					...MOCK_EXTRA_COURSES_DATA[index % MOCK_EXTRA_COURSES_DATA.length],
				} as CourseByClub),
		),
	}),
	{},
);

export const UserCourses: UserCoursesByClub = Object.entries(
	CoursesByClub,
).reduce(
	(clubs, [clubId, courses]) => ({
		...clubs,
		[clubId]: courses.map(({ id }, index) => ({
			courseClubId: id,
			state: MOCK_COURSE_STATE[index % MOCK_COURSE_STATE.length],
		})),
	}),
	{},
);
