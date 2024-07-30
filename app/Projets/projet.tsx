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
	return (
		<motion.div
			className="my-8"
			initial={{ opacity: 0, x: -100 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
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
