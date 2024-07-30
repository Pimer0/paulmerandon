"use client";

import Projet from "./projetCard/projet";

import Example from "./components/pictoOrange";

import Intro from "./intro";
import ImageProjet from "./projetCard/imageProjet";
const projets = [
	{
		titre: "Lexique du crédit - Cofidis",
		srcImage: "/assets/cofidis.mp4",
		lienProjet: "/Projets/#lexique",
	},
	{
		titre: "pimerMe",
		srcImage: "/assets/pimerMe.mp4",
		lienProjet: "/Projets/#pimerMe",
	},
	{
		titre: "Service de micro blogging",
		srcImage: "/assets/twitterClone.mp4",
		lienProjet: "/Projets/#twitterClone",
	},
	{
		titre: "Application mobile de collection de véhicules - voitureDex",
		srcImage: "/assets/voitureDex.mp4",
		lienProjet: "/Projets/#voitureDex",
	},
	{
		titre: "API de gestion de tâches",
		srcImage: "/assets/apiTodo.mp4",
		lienProjet: "/Projets/#apiTodo",
	},
	{
		titre: "Refonte maillage interne - Cofidis",
		srcImage: "/assets/maillageCof.mp4",
		lienProjet: "/Projets/#refonteMaillage",
	},
];

const imageProjets = [
	{
		titre: "Mise en conformité de l'accessibilité - Cofidis",
		srcImage: "/assets/oeil.svg",
		lien: "/Projets/#accessibilite",
	},
	{
		titre: "Ce portfolio !",
		srcImage: "/assets/spirale.svg",
		lien: "/Projets/#portfolio",
	},
];

const pictoOrange = [
	{
		srcImage: "/assets/round.svg",
	},
	{
		srcImage: "/assets/spirale-plain.svg",
	},
	{
		srcImage: "/assets/light.svg",
	},
	{
		srcImage: "/assets/sparkle.svg",
	},
	{
		srcImage: "/assets/profile.svg",
	},
];

export default function Page() {
	return (
		<section>
			{pictoOrange.map((pictoOrange, index) => (
				<Example key={index} {...pictoOrange} />
			))}
			<Intro />
			{projets.map((projet, index) => (
				<Projet key={index} {...projet} />
			))}
			{imageProjets.map((projet, index) => (
				<ImageProjet key={index} {...projet} />
			))}
		</section>
	);
}
