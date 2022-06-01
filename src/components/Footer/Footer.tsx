import React from "react";
import { OpenAnnouncementIcon } from "src/icons";

type ComponentFooterProps = {};

export const Footer: React.FC<ComponentFooterProps> = () => {
	return (
		<footer>
			<a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
				<img src="/assets/instagram.png" alt="instagram" width="32px" />
			</a>
			<a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
				<img src="/assets/fb.png" alt="facebook" width="32px" />
			</a>
			<a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
				<img
					src="/assets/youtube.png"
					alt="youtube"
					width="32px"
					// height="32px"
					style={{ borderRadius: "50%" }}
				/>
			</a>

			<div>
				<img src="/assets/italy.png" alt="italiano" width="24px" />
				ITA <OpenAnnouncementIcon />
			</div>
			<p>
				Made by <strong>JadeMugs</strong> for <strong>PED</strong>
			</p>
		</footer>
	);
};
