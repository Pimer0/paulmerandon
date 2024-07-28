import React from "react";
import Image from "next/image";
import { copernicusBold, jetBrainsMono } from "../fonts";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface CardProps {
	srcImage: string;
	niveauDeux: string;
	altImage: string;
	niveauUn: string;
	path: string;
}

const Card = ({
	srcImage,
	altImage,
	niveauUn,
	niveauDeux,
	path,
}: CardProps) => {
	return (
		<div className="my-8 bg-[#463436] p-2 border rounded-2xl flex flex-col">
			<div className="flex flex-col items-start w-full px-4 mb-6 mt-6">
				<p
					className={`w-full text-white mb-4 text-xl tracking-tighter ${copernicusBold.className}`}
				>
					{niveauDeux}
				</p>
				<div className="flex flex-row items-center mb-2">
					<ArrowUpRightIcon className="w-5 h-5 mr-2 text-white group-hover:text-white" />
					<Link
						key={path}
						href={path}
						className={`textBlanc ${jetBrainsMono.className}`}
					>
						{niveauUn}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Card;
