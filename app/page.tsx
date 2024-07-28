import { jetBrainsMono } from "../app/fonts";
import { copernicusBold } from "../app/fonts";

import Projet from "./projetCard/projet";

export default function Page() {
	return (
		<section>
			<h1
				className={`mb-8 text-2xl tracking-tighter ${copernicusBold.className}`}
			>
				Bonjour, vous êtes chez Paul Mérandon
			</h1>
			<h2
				className={`mb-8 text-xl tracking-tighter ${copernicusBold.className}`}
			>
				Un développeur à fond.
			</h2>
			<p className={`mb-4 ${jetBrainsMono.className}`}>
				{`Bricoleur, kiffeur, aventurien, que sais-je encore… Ai-je ton attention ? Si tu veux en savoir plus sur moi, il va falloir te balader un peu sur ce site. Y’en a pour tout le monde, un peu de front, un peu de back, mais aussi de l’animation et de la 3D. Bienvenu chez moi !`}
			</p>
			<Projet
				titre="Lexique du crédit - Cofidis"
				srcImage="/assets/cofidis.mp4"
				lienProjet="https://lien_vers_un_autre_projet.com"
			/>
			<Projet
				titre="pimerMe"
				srcImage="/assets/pimerMe.mp4"
				lienProjet="https://lien_vers_un_autre_projet.com"
			/>
			<Projet
				titre="Service de micro blogging"
				srcImage="/assets/twitterClone.mp4"
				lienProjet="https://lien_vers_un_autre_projet.com"
			/>
			<Projet
				titre="Application mobile de collection de véhicules - voitureDex"
				srcImage="/assets/voitureDex.mp4"
				lienProjet="https://lien_vers_un_autre_projet.com"
			/>
			<Projet
				titre="API de gestion de tâches"
				srcImage="/assets/apiTodo.mp4"
				lienProjet="https://lien_vers_un_autre_projet.com"
			/>
			<Projet
				titre="Refonte maillage interne - Cofidis"
				srcImage="/assets/apiTodo.mp4"
				lienProjet="https://lien_vers_un_autre_projet.com"
			/>
			<Projet
				titre="Ce portfolio !"
				srcImage="/assets/apiTodo.mp4"
				lienProjet="https://lien_vers_un_autre_projet.com"
			/>
		</section>
	);
}
