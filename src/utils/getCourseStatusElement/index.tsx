import React from "react";
import { CourseByClub } from "src/types";
import { COURSE_STATUS } from "src/utils";

export const getCourseStatusElements = ({
	course,
	courseStatus,
}: {
	course: CourseByClub;
	courseStatus: string;
}) => {
	const result: {
		title?: JSX.Element;
		subtitle?: JSX.Element;
		button?: JSX.Element;
	} = {};

	const buttonElement = (
		text: string,
		classNames?: string,
		disabled?: boolean,
	) => (
		<button
			className={classNames}
			disabled={disabled ?? false}
			onClick={() => console.error("Oh no, I'm a dummy button!")}
		>
			{text.toUpperCase()}
		</button>
	);

	switch (courseStatus) {
		case COURSE_STATUS.FREE_COURSE:
			result.title = <p>Attività libera</p>;
			break;
		case COURSE_STATUS.BOOKED:
			result.title = <p>Sei iscritto</p>;
			result.button = buttonElement("Annulla", "cancel-button");
			break;
		case COURSE_STATUS.WAITING:
			result.title = <p>Sei in lista d&#39;attesa</p>;
			result.subtitle = <p>{course.waitingPeople} persone prima di te</p>;
			result.button = buttonElement("Annulla", "cancel-button");
			break;
		case COURSE_STATUS.REGISTRATION_CLOSE:
			result.title = <p>{course.startingBookingTime} </p>;
			result.subtitle = <p>All&#39;apertura dell&#39;iscrizione</p>;

			result.button = buttonElement("Iscriviti", "primary-button", true);
			break;
		case COURSE_STATUS.SEATS_ALMOST_FULL:
		case COURSE_STATUS.SEATS_AVAILABLE:
			result.title = (
				<div>
					<span className={courseStatus.toString()}>
						{course.availableSeats ?? 0}
					</span>
					/{course.totalSeats}
				</div>
			);

			result.subtitle = <p>Posti disponibili</p>;
			result.button = buttonElement("Iscriviti", "primary-button");
			break;
		case COURSE_STATUS.SHOULD_WAIT:
			result.title = <p>{course.waitingPeople} </p>;
			result.subtitle = <p>persone in attesa</p>;
			result.button = buttonElement("Mettiti in attesa", "secondary-button");
			break;
		default:
			break;
	}

	return result;
};
