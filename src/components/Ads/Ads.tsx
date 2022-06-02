import React from "react";

type ComponentAdsProps = {};

export const Ads: React.FC<ComponentAdsProps> = () => {
	return (
		<div className="ads grid-half  mobile-hidden">
			<div>
				<p style={{ color: "white" }}>Allenati con noi</p>
				<button className="primary-button-filled ">SCOPRI DI PIÙ</button>
			</div>
			<div>Image</div>
		</div>
	);
};
