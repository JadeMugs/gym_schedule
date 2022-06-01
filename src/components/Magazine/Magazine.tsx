import React from "react";
import { ClosedAnnouncementIcon } from "src/icons";

export type ComponentMagazineProps = {};

export const Magazine: React.FC<ComponentMagazineProps> = () => {
	return (
		<div className="magazine card">
			<img
				src="https://s3.amazonaws.com/images.gearjunkie.com/uploads/2020/10/winter-hiking-1200x628.jpg"
				alt="magazine image"
				className="magazine-image"
				width={"100%"}
			/>
			<div className="icon">
				<ClosedAnnouncementIcon />
			</div>

			<div className="magazine-content">
				<h4>Gli eventi di Dicembre e Gennaio</h4>

				<p className="text-truncate">
					Massa id neque aliquam vestibulum morbi. Justo laoreet sit amet cursus
					sit amet. Elit sed vulputate mi sit. Viverra mauris in aliquam sem
					fringilla ut. Proin libero nunc consequat interdum varius sit amet
					mattis vulputate. Arcu ac tortor dignissim convallis aenean et tortor.
					Ut sem nulla pharetra diam sit. Tincidunt nunc pulvinar sapien et
					ligula ullamcorper malesuada proin libero. Id diam vel quam elementum
					pulvinar.
				</p>
				<p className="date">16/12/2019</p>
			</div>
		</div>
	);
};
