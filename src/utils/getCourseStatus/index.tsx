import { CourseByClub } from "src/types";

export const COURSE_STATUS = {
	FREE_COURSE: "FREE_COURSE",
	BOOKED: "BOOKED",
	WAITING: "WAITING",
	REGISTRATION_CLOSE: "REGISTRATION_CLOSE",
	SEATS_AVAILABLE: "SEATS_AVAILABLE",
	SEATS_ALMOST_FULL: "SEATS_ALMOST_FULL",
	SHOULD_WAIT: "SHOULD_WAIT",
};

export const getCourseStatus = (
	course: CourseByClub,
	bookingStatus?: "booked" | "waiting",
) => {
	if (!course.shouldBook) return COURSE_STATUS.FREE_COURSE;

	if (bookingStatus === "booked") return COURSE_STATUS.BOOKED;

	if (bookingStatus === "waiting") return COURSE_STATUS.WAITING;

	if (course.startingBookingTime) return COURSE_STATUS.REGISTRATION_CLOSE;

	if ((course.waitingPeople ?? 0) > 0) return COURSE_STATUS.SHOULD_WAIT;

	if (course.totalSeats && (course.availableSeats ?? 0) < 5) {
		return COURSE_STATUS.SEATS_ALMOST_FULL;
	}

	return COURSE_STATUS.SEATS_AVAILABLE;
};
