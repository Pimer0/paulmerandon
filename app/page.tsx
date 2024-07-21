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
				{`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam atque, veritatis culpa porro itaque eius quod quas deleniti vitae accusamus sapiente est, excepturi animi, tempore eos. Aut ad cumque sequi!`}
			</p>
			<Projet
				titre="Lexique du crédit - Cofidis"
				srcImage="/assets/cofidis-lexique.png"
				widthImage={370}
				heightImage={370}
				altImage="Description de l'image"
				lienProjet="https://lien_vers_un_autre_projet.com"
			/>
			<Projet
				titre="Lexique du crédit - Cofidis"
				srcImage="/assets/cofidis-lexique.png"
				widthImage={370}
				heightImage={370}
				altImage="Description de l'image"
				lienProjet="https://lien_vers_un_autre_projet.com"
			/>
			<Projet
				titre="Lexique du crédit - Cofidis"
				srcImage="/assets/cofidis-lexique.png"
				widthImage={370}
				heightImage={370}
				altImage="Description de l'image"
				lienProjet="https://lien_vers_un_autre_projet.com"
			/>
		</section>
	);
}
