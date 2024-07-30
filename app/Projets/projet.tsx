"use client";

import React, { useRef } from "react";
import { playfairDisplay, jetBrainsMono } from "../fonts";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";

interface ProjetProps {
	titre: string;
	lien: string;
	paragraph: string;
	id: string;
}

const Projet = ({ titre, paragraph, lien, id }: ProjetProps) => {
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
			id={id}
			className="my-8"
			initial={{ x: -400, opacity: 0 }}
			animate={controls}
			transition={{ duration: 1 }}
		>
			<h2 className={`mt-6 mb-4 ${playfairDisplay.className}`}>
				<Link className={`mt-6 mb-4 ${playfairDisplay.className}`} href={lien}>
					{titre}
				</Link>
			</h2>

			<p className={`mt-6 mb-4 ${jetBrainsMono.className}`}>{paragraph}</p>
		</motion.div>
	);
};

export default Projet;
