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
				lien="https://www.passportmagician.com/"
				id="passport"
				titre="Passportmagician.com"
				paragraph="Web app permettant la recherche par pays des passeports associés et de leurs avantages. API en C# déployée via
Docker sur un VPS (distro Ubuntu), avec pare-feu, connexion SSH uniquement, redirection DNS et CI/CD via
GitHub Actions. Données sensibles gérées avec Docker Secrets. Load balancing avec Traefik. Architecture DDD."
			/>
			<div className="flex flex-row gap-2 flex-wrap">
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
					altImage="Tailwind"
				/>
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
					altImage="NextJs"
				/>
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
					altImage="Ts"
				/>
				<Skills
					srcImage={
						"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg"
					}
					altImage={"ubuntu"}
				/>
				<Skills
					srcImage={
						"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg"
					}
					altImage={"docker"}
				/>
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-plain-wordmark.svg"
					altImage=".NET"
				/>
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg"
					altImage="C#"
				/>
				<Skills
					srcImage={
						"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg"
					}
					altImage={"postgresql"}
				/>
			</div>
			<Projet
				lien="https://github.com/Yoann-Lgd/twitter-clone"
				id="twitterClone"
				titre="Service de micro blogging"
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
				lien="https://github.com/Pimer0/VoitureDex"
				id="voitureDex"
				titre="Application mobile de collection de véhicules - voitureDex"
				paragraph="Développement d’une application de collection de voiture en fonction de la recherche par plaque d’immatriculation. Une Home qui contient une searchBar, une vue qui affiche les infos du véhicule recherché avec la plaque d’immatriculation, un bouton “ajout du véhicule à ma liste” qui au clic envoie les infos obtenues via l’api à une liste de véhicules “vus”, et ouvre la page contenant cette même liste."
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
				lien="https://github.com/Pimer0/lapel-frontend"
				id="lapel"
				titre="Lapel"
				paragraph="Web app permettant le suivi des entraînements sportifs, avec un système de tags associés à chaque
entraînement. API en C#, gestion de l’authentification avec tokens JWT, service d’envoi de mails."
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
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
					altImage="Postgres"
				/>
				<Skills
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
					altImage="NextJs"
				/>
			</div>
			<Projet
				lien=""
				id="refonteMaillage"
				titre="Refonte maillage interne - Cofidis"
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
				lien="https://www.cofidis.fr/fr/lexique-credit.html"
				id="lexique"
				titre="Lexique du crédit - Cofidis"
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
				lien="https://www.cofidis.fr"
				id="accessibilite"
				titre="Mise en conformité de l'accessibilité - Cofidis"
				paragraph="Mise à niveau de l’accessibilité sur l’entièreté du site, conformément à l’obligations d’accessibilité des services de communication au public en ligne, prévues dans la loi n° 2005-102 du 11 février 2005 pour l’égalité des droits et des chances, la participation et la citoyenneté des personnes handicapées. À partir du 28 juin 2025, date de l’entrée en vigueur de la directive européenne sur l’accessibilité des produits et services, toutes les entreprises privées (sauf les entreprises de moins de 10 personnes ou dont le chiffre d’affaires ou le bilan n’excède pas 2 millions d’euros) seront aussi concernées par cette obligation d’accessibilité. Respect du RGAA qui permet de vérifier la conformité d’une page web aux 50 critères de succès des niveaux A et AA de la norme WCAG 2.1. Ces critères correspondent à la norme européenne établissant le niveau d’exigence légale en matière d’accessibilité numérique."
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
				lien=""
				id="facillitation"
				titre="La facillitation"
				paragraph="Développement d’un outil interne de mise en relation d’acteurs issus de différentes communautés, avec 20
utilisateurs actifs par jour. Espace de connexion et espace administrateurs"
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
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
					altImage="Tailwind"
				/>
			</div>
		</section>
	);
}
