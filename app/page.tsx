"use client";

import { jetBrainsMono } from "../app/fonts";
import { playfairDisplay } from "../app/fonts";
import LinksProjet from "./projetCard/linksProjet";
import Projet from "./projetCard/projet";
import TitleNivDeux from "./projetCard/TitleNivDeux";
import next from "next";
import Image from "next/image";
import { animate, motion } from "framer-motion";
import { inView } from "framer-motion";

export default function Page() {
	return (
		<section>
			<motion.div
				animate={{ x: [-1000, 0] }}
				transition={{ duration: 1 }}
				className="my-8"
			>
				<h1
					className={`mb-8 text-2xl tracking-tighter ${playfairDisplay.className}`}
				>
					Bonjour, vous êtes chez Paul Mérandon
				</h1>
			</motion.div>
			<motion.div
				animate={{ x: [-1000, 0] }}
				transition={{ duration: 2 }}
				className="my-8"
			>
				{" "}
				<h2
					className={`mb-8 text-xl tracking-tighter ${playfairDisplay.className}`}
				>
					Un développeur à fond.
				</h2>
			</motion.div>
			<motion.div
				animate={{ x: [-1000, 0] }}
				transition={{ duration: 3 }}
				className="my-8"
			>
				{" "}
				<p className={`mb-4 ${jetBrainsMono.className}`}>
					Bricoleur, kiffeur, aventurier, que sais-je encore… Ai-je votre
					attention ? Si vous voulez en savoir plus sur moi, il va falloir vous
					balader un peu sur ce site. Il y en a pour tout le monde, un peu de
					<strong> front</strong>, un peu de <strong>back,</strong> mais aussi
					de <strong>l'animation et de la 3D</strong>. Bienvenue chez moi !
				</p>
			</motion.div>
			<Projet
				titre="Lexique du crédit - Cofidis"
				srcImage="/assets/cofidis.mp4"
				lienProjet="/Projets/#lexique"
			/>
			<Projet
				titre="pimerMe"
				srcImage="/assets/pimerMe.mp4"
				lienProjet="/Projets/#pimerMe"
			/>
			<Projet
				titre="Service de micro blogging"
				srcImage="/assets/twitterClone.mp4"
				lienProjet="/Projets/#twitterClone"
			/>
			<Projet
				titre="Application mobile de collection de véhicules - voitureDex"
				srcImage="/assets/voitureDex.mp4"
				lienProjet="/Projets/#voitureDex"
			/>
			<Projet
				titre="API de gestion de tâches"
				srcImage="/assets/apiTodo.mp4"
				lienProjet="/Projets/#apiTodo"
			/>
			<Projet
				titre="Refonte maillage interne - Cofidis"
				srcImage="/assets/maillageCof.mp4"
				lienProjet="/Projets/#refonteMaillage"
			/>
			<div className="my-8">
				<TitleNivDeux text="Mise en conformité de l'accessibilité - Cofidis" />
				<Image width={200} height={200} src={"/assets/oeil.svg"} alt="oeil" />
				<LinksProjet lien="/Projets/#accessibilite" />
			</div>
			<motion.div
				animate={{ x: [-1000, 0] }}
				transition={{ duration: 1 }}
				className="my-8"
			>
				<TitleNivDeux text="Ce portfolio !" />
				<Image
					width={200}
					height={200}
					src={"/assets/spirale.svg"}
					alt="spirale"
				/>
				<LinksProjet lien="/Projets/#portfolio" />
			</motion.div>
		</section>
	);
}
