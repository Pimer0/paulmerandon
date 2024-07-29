import Skills from "app/Me/skills";
import React from "react";
import { playfairDisplay, jetBrainsMono } from "../fonts";
import Link from "next/link";

interface ProjetProps {
	titre: string;
	lien: string;
	paragraph: string;
	id: string;
}

const Projet = ({ titre, paragraph, lien, id }: ProjetProps) => {
	return (
		<div id={id} className="my-8">
			<h2 className={`mt-6 mb-4 ${playfairDisplay.className}`}>
				<Link className={`mt-6 mb-4 ${playfairDisplay.className}`} href={lien}>
					{titre}
				</Link>
			</h2>

			<p className={`mt-6 mb-4 ${jetBrainsMono.className}`}>{paragraph}</p>
		</div>
	);
};

export default Projet;
