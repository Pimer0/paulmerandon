import { jetBrainsMono } from "../app/fonts";
import { playfairDisplay } from "../app/fonts";

import Projet from "./projetCard/projet";

export default function Page() {
	return (
		<section>
			<h1
				className={`mb-8 text-2xl tracking-tighter ${playfairDisplay.className}`}
			>
				Bonjour, vous êtes chez Paul Mérandon
			</h1>
			<h2
				className={`mb-8 text-xl tracking-tighter ${playfairDisplay.className}`}
			>
				Un développeur à fond.
			</h2>
			<p className={`mb-4 ${jetBrainsMono.className}`}>
				{`Bricoleur, kiffeur, aventurier, que sais-je encore… Ai-je votre attention ? Si vous voulez en savoir plus sur moi, il va falloir vous balader un peu sur ce site. Il y en a pour tout le monde, un peu de front, un peu de back, mais aussi de l'animation et de la 3D. Bienvenue chez moi !`}
			</p>
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
				srcImage="/assets/apiTodo.mp4"
				lienProjet="/Projets/#refonteMaillage"
			/>
			<Projet
				titre="Ce portfolio !"
				srcImage="/assets/apiTodo.mp4"
				lienProjet="/Projets/#portfolio"
			/>
		</section>
	);
}
