import Skills from "app/Me/skills";
import React from "react";
import { playfairDisplay, jetBrainsMono } from "../fonts";

interface ProjetProps {
	titre: string;
	srcImage: string;
	paragraph: string;
	id: string;
}

const Projet = ({ titre, srcImage, paragraph, id }: ProjetProps) => {
	return (
		<div id={id} className="my-8">
			<h2>{titre}</h2>
			<video
				className="border border-amber-950 rounded-2xl"
				width="auto"
				height="auto"
				loop
				autoPlay
				muted
				preload="auto"
                playsInline
			>
				<source src={srcImage} type="video/mp4" />
			</video>

			<p className={`mt-6 mb-4 ${jetBrainsMono.className}`}>{paragraph}</p>
		</div>
	);
};

export default Projet;
