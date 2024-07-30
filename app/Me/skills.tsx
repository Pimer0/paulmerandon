"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface SkillsProps {
	srcImage: string;
	altImage: string;
}

const Skills = ({
	srcImage,

	altImage,
}: SkillsProps) => {
	return (
		<motion.div
			className="my-8 "
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1 }}
			initial={{ opacity: 0, scale: 0.5 }}
		>
			<Image
				className="rounded-lg border border-gray-800 p-2"
				src={srcImage}
				width={52}
				height={52}
				alt={altImage}
			/>
		</motion.div>
	);
};

export default Skills;
