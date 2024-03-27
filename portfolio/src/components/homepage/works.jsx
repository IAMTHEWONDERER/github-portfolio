import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/D4E0BAQE-buuRkMtrLQ/company-logo_200_200/0/1709130348011/arkx_education_logo?e=1719446400&v=beta&t=cTg2nz7eqo4QCaB77rqqKEAU2InVqKkOBmWEby2dXNA"
								alt="arkx"
								className="work-image"
							/>
							<div className="work-title">Ark-x Talent Factory</div>
							<div className="work-subtitle">
								Fullstack Web Developer Intern
							</div>
							<div className="work-duration">Jan 2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAdVBMVEX4+PjtGyT////5+fnsAADs7OzsAAv4zs70ra3pISjp6eny8vLtGCH76evv7+/pAAD0uLjtERztBxb319fzv8DwoaP3/fztl5n43t/ukZDqO0HrREfsUFXvjI3ynqHrSk/sX2PnJC7scnX88fHtam7ufoDsWFuJxHw7AAACg0lEQVRIieWWW5uiMAyGS3qApdBCEURxRhT1///EDQhMgVqd293vqvDwkkPTJoT8C6Ko3zOESIWSz/WnlIy5JBWgKqJ4LD9iKYk5ASBFVu73ZVZQXHNO3qGUcAVQH46MCWOMEEw3+xRAcT9JFQfYNVrkwaxcsFMIgA57uJhAcWQWNbLslIL0GI0BvrbYgOpvoPErMgZ6Zi6sF2vRXSdJY+gu5hUXBKJxk5QDvTjdnGQaoNs4qSJw9tgbbLYg5cYihy/t5zDOaOMsBli8zMuPdAprZxUcvQGOYbYrEA3uPjCIzhZLkipongYNGzU8JtPTlLZ8ZVKS+mnQfHVprzpr+xdJPTyl4XVKnO7k0tODGN6LCCah78kf+2n6wDKJmz+mxgLxXxYIt9zlqyQ/P5zVaRvMxPgFKDvIwgHCJbfAyVeWWkHKav6fDR5tMBq/YOFiM0rjAI3t6nmsD5FV0gL3DjBjFkjvczDvwC5JbItwNS6w3MQY6jxYgLXeuOpOznEFgtgkx70dqUicoL0dRFG9Tc6OLcCUjQWwLLlmW3J4VdrgfUhOfluAMew3RY46WeCeOYoca3V0xNyLcFZxNeNqd7iIxHGsel9Pq4P8PL7z6okF5rq6ATiEn10ddaWWt5Wai9Enc1vfcmiyfnutBonuqvX1iOT3W2dZ5ugeUkIr/Jy4g9q2AOwn0Hibh3i4ms5QBbTx2ETudYOE9nVjvb7iepJCqZ27YnTmaeUYp4T0sZ0CDLt1/okFZyqAol2NK/pWoznfuDIYxUmnKx8aJyTRz0e6jTqo+JsBiQyzFTqM5zaMoigLcarCCUe9HckGtGdxpysUkbwf5H4xQPZzp5RyXP6n+gvC9iVcNu7rgQAAAABJRU5ErkJggg=="
								alt="redbubble"
								className="work-image"
							/>
							<div className="work-title">Redubble Freelance Designer</div>
							<div className="work-subtitle">
								Freelance Designer
							</div>
							<div className="work-duration">2021 - 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
