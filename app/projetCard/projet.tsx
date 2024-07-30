import React from "react";
import LinksProjet from "./linksProjet";
import TitleNivDeux from "./TitleNivDeux";
import { motion } from "framer-motion";

interface ProjetProps {
	titre: string;
	srcImage: string;
	lienProjet: string;
}

const Projet = ({ titre, srcImage, lienProjet }: ProjetProps) => {
	return (
		<motion.div
			className="my-8"
			initial={{ opacity: 0, x: -100 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 1 }}
		>
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
		</motion.div>
	);
};

export default Projet;
