import React from "react";
import LinksProjet from "./linksProjet";
import TitleNivDeux from "./TitleNivDeux";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

interface ProjetProps {
	titre: string;
	srcImage: string;
	lienProjet: string;
}

const Projet = ({ titre, srcImage, lienProjet }: ProjetProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start({ x: 0, opacity: 1 });
		}
	}, [isInView, controls]);

	return (
		<motion.div
			ref={ref}
			className="my-8"
			initial={{ x: -400, opacity: 0 }}
			animate={controls}
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
