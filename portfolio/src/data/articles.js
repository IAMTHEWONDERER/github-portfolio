import React from "react";

function article_1() {
	return {
		date: "23th June 2023",
		title: "Geometrical and Physical Properties of the Universe",
		description:
			"An end of studies project with Mr. Mohammed Ouachou, that delves into the aspect of the expansion of the Universe through studying Hubble's Law and the redshift, Einstein's equations and the expansion equations.",
		keywords: [
			"Geometrical and Physical Properties of the Universe",
			"Oussama",
			"Oussama A",
			"Oussama Alouche",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}


const myArticles = [article_1];

export default myArticles;
