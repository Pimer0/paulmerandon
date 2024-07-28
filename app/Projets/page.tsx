import Skills from "app/Me/skills";
import { playfairDisplay, jetBrainsMono } from "../fonts";
import Projet from "./projet";

export const metadata = {
	title: "Me",
	description: "About me.",
};

export default function Page() {
	return (
		<section>
			<h1
				className={`mb-8 text-2xl tracking-tighter ${playfairDisplay.className}`}
			>
				Une idée de ce que je peux faire :
			</h1>
			<Projet
				id="lexique"
				titre="Lexique du crédit - Cofidis"
				srcImage="/assets/cofidis.mp4"
				paragraph="Développement de la section Lexique du crédit pour cofidis france. Utilisation de divers animation, respect de la charte graphique et des maquettes fourni, système de tag pour faciliter l’intégration des nouveaux mots et définitions. Respect des normes accessibilité."
			/>
			<div className="flex flex-row gap-2 flex-wrap">
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-plain-wordmark.svg"
					altImage="Jquery"
				/>
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg"
					altImage="CSS"
				/>
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
					altImage="HTML"
				/>
			</div>
			<Projet
				id="pimerMe"
				titre="pimerMe"
				srcImage="/assets/pimerMe.mp4"
				paragraph="Développement de l’entièreté du site, des maquettes à l’execution technique jusqu’au déploiement, avec système de réactions gardé en session utilisateur, animations diverses et modèle 3D réalisé avec spline."
			/>
			<div className="flex flex-row gap-2 flex-wrap">
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
					altImage="Tailwind"
				/>
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
					altImage="Framer"
				/>
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
					altImage="Ts"
				/>
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
					altImage="react"
				/>
			</div>
			<Projet
				id="twitterClone"
				titre="Service de micro blogging"
				srcImage="/assets/twitterClone.mp4"
				paragraph="Réalisation d’un service de blogging, avec réalisation des maquettes, respect des normes accessibilité, connexion et authentification sécurisés via JWT, validation de compte par email, fonction d’oublie de mot de passe, applicatif via PWA, 3 roles différents, avec un niveau de gestion élargi pour les modérateurs et les administrateurs et la possibilité de follow d’autres utilisateurs, de publier des posts et de chercher des utilisateurs."
			/>
			<div className="flex flex-row gap-2 flex-wrap">
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
					altImage="Tailwind"
				/>
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
					altImage="Postgres"
				/>
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
					altImage="Js"
				/>
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
					altImage="php"
				/>
			</div>
			<Projet
				id="voitureDex"
				titre="Application mobile de collection de véhicules - voitureDex"
				srcImage="/assets/voitureDex.mp4"
				paragraph="Développement d’une application de collection de voiture en fonction de la recherche par plaque d’immatriculation. une Home qui contient une searchBar, une vue qui affiche les infos du véhicule recherché avec la plaque d’immatriculation, un bouton “ajout du véhicule à ma liste” qui au clique envoie les infos obtenues via l’api à une liste de véhicules “vus”, et ouvre la page contenant cette même liste. Une page “list” qui aura un bouton “retour”, pour revenir sur la Home, et une liste déroulante contenant comme dit précédemment la liste des véhicules vus. Tout élément contenu dans la page sera un composant."
			/>
			<div className="flex flex-row gap-2 flex-wrap">
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
					altImage="Tailwind"
				/>
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
					altImage="Ts"
				/>
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
					altImage="react"
				/>
			</div>
			<Projet
				id="apiTodo"
				titre="API de gestion de tâches"
				srcImage="/assets/apiTodo.mp4"
				paragraph="Création d’une simple api permettant la création, la suppression et l'update de todo, en C#"
			/>
			<div className="flex flex-row gap-2 flex-wrap">
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-plain-wordmark.svg"
					altImage=".NET"
				/>
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg"
					altImage="C#"
				/>
			</div>
			<Projet
				id="refonteMaillage"
				titre="Refonte maillage interne - Cofidis"
				srcImage="/assets/apiTodo.mp4"
				paragraph="Refonte intégrale du maillage interne de Cofidis France présent sur plus de 300 pages de contenue visité au total par plus de 10 millions d’utilisateurs par mois. Mise en place de système de tag et d’un algorithme de proposition de contenu sur le même thème."
			/>
			<div className="flex flex-row gap-2 flex-wrap">
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-plain-wordmark.svg"
					altImage="Jquery"
				/>
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg"
					altImage="CSS"
				/>
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
					altImage="HTML"
				/>
			</div>
			<Projet
				id="portfolio"
				titre="Ce portfolio !"
				srcImage="/assets/apiTodo.mp4"
				paragraph="Utilisation de Next.js avec Framer motion pour les animation, et threeJs pour les modèles 3D créer de toutes pièces. Réalisation des maquettes ainsi que la charte graphique, et déploiement sur Vercel."
			/>
			<div className="flex flex-row gap-2 flex-wrap">
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
					altImage="Ts"
				/>
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
					altImage="react"
				/>
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
					altImage="NextJs"
				/>
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
					altImage="Tailwind"
				/>
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original-wordmark.svg"
					altImage="ThreeJs"
				/>
			</div>
		</section>
	);
}
