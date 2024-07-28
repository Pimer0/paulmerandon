import Skills from "app/Me/skills";
import React from "react";

interface ProjetProps {
	titre: string;
	srcImage: string;
	lienProjet: string;
	paragraph: string;
}

const Projet = ({ titre, srcImage, paragraph }: ProjetProps) => {
	return (
		<div className="my-8">
			<h2>{titre}</h2>
			<video width="auto" height="auto" loop autoPlay muted preload="auto">
				<source src={srcImage} type="video/mp4" />
			</video>

			<p>{paragraph}</p>
		</div>
	);
};

export default Projet;
