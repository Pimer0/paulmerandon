import React from "react";
import LinksProjet from "./linksProjet";
import TitleNivDeux from "./TitleNivDeux";

interface ProjetProps {
	titre: string;
	srcImage: string;
	lienProjet: string;
}

const Projet = ({ titre, srcImage, lienProjet }: ProjetProps) => {
	return (
		<div className="my-8">
			<TitleNivDeux text={titre} />
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
			<LinksProjet lien={lienProjet} />
		</div>
	);
};

export default Projet;
