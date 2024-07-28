import React from "react";
import Image from "next/image";

interface SkillsProps {
	srcImage: string;
	altImage: string;
}

const Skills = ({
	srcImage,

	altImage,
}: SkillsProps) => {
	return (
		<div className="my-8 ">
			<Image
				className="rounded-lg border border-gray-800 p-2"
				src={srcImage}
				width={52}
				height={52}
				alt={altImage}
			/>
		</div>
	);
};

export default Skills;
