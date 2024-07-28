import React from "react";
import { playfairDisplay, jetBrainsMono } from "../fonts";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface LinksProjetProps {
	lien: string;
}

const LinksProjet: React.FC<LinksProjetProps> = ({ lien }) => {
	return (
		<div className="flex flex-row items-center mb-2 mt-4">
			<ArrowUpRightIcon className="w-5 h-5 mr-2" stroke="#463436" />
			<Link className={`${jetBrainsMono.className}`} key={lien} href={lien}>
				Vers le projet
			</Link>
		</div>
	);
};

export default LinksProjet;
