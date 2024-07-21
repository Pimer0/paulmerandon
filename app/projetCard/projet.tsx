import React from "react";
import Image from "next/image";
import LinksProjet from "./linksProjet";
import TitleNivDeux from "./TitleNivDeux";

interface ProjetProps {
	titre: string;
	srcImage: string;
	widthImage: number;
	heightImage: number;
	altImage: string;
	lienProjet: string;
	
}

const Projet = ({
	titre,
	srcImage,
	widthImage,
	heightImage,
	altImage,
	lienProjet,
	
}: ProjetProps) => {
	return (
		<div className="my-8">
			<TitleNivDeux text={titre} />
			<Image
				className="rounded-lg border border-gray-800 object-cover"
				src={srcImage}
				width={widthImage}
				height={heightImage}
				alt={altImage}
			/>
			<LinksProjet lien={lienProjet}/>
		</div>
	);
};

export default Projet;
