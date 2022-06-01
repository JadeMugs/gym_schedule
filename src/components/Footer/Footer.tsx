import React from "react";
import { OpenAnnouncementIcon } from "src/icons";

type ComponentFooterProps = {};

export const Footer: React.FC<ComponentFooterProps> = () => {
	return (
		<footer>
			<div>
				<a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
					<img src="/assets/instagram.png" alt="instagram" width="24px" />
				</a>
				<a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
					<img src="/assets/fb.png" alt="facebook" width="24px" />
				</a>
				<a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
					<img
						src="/assets/youtube.png"
						alt="youtube"
						width="24px"
						style={{ borderRadius: "50%" }}
					/>
				</a>
			</div>

			<div className="language">
				<img src="/assets/italy.png" alt="italiano" width="18px" />
				<p>ITA</p> <OpenAnnouncementIcon />
			</div>

			<small>
				Made by <strong>JadeMugs</strong> for <strong>PED</strong>
			</small>
		</footer>
	);
};
