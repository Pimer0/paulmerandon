import { playfairDisplay, jetBrainsMono } from "../fonts";
import Image from "next/image";
import Skills from "./skills";
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
				À propos du gaillard
			</h1>
			<Image
				className="border border-amber-950 rounded-2xl mb-8"
				src="/assets/me.jpeg"
				alt="logo"
				width={375}
				height={375}
			/>
			<p className={`mb-4 ${jetBrainsMono.className}`}>
				Enchanté, Paul Mérandon, <strong>étudiant au CESI</strong> en
				développement informatique avec{" "}
				<strong>une appétence pour le développement front-end</strong> et{" "}
				<strong>une grande curiosité pour le développement back-end.</strong>
			</p>
			<br />
			<p className={`mb-4 ${jetBrainsMono.className}`}>
				Fort de plusieurs projets qui ont sollicité chez moi{" "}
				<strong>
					la résolution de problèmes, la logique, et le travail d'équipe,
				</strong>{" "}
				je cherche le prochain sujet qui viendra{" "}
				<strong>me titiller les neurones et me challenger.</strong>
			</p>
			<br />
			<p className={`mb-4 ${jetBrainsMono.className}`}>
				<strong>Avide de savoir,</strong> j'aimerais tout connaître du
				développement, et je travaille d'arrache-pied pour y arriver.
			</p>
			<br />
			<p className={`mb-4 ${jetBrainsMono.className}`}>
				J'aime:{" "}
				<strong>
					magic the gathering, le jiu jitsu brésilien, la culture internet, et
					le développement informatique
				</strong>{" "}
				bien sûr.
			</p>
			<br />
			<p className={`mb-4 ${jetBrainsMono.className}`}>
				Je vous ai dit que je suis aussi{" "}
				<strong>diplômé d'un master économie-gestion</strong> ?
			</p>
			<br />
			<h2
				className={`mb-8 text-xl tracking-tighter ${playfairDisplay.className}`}
			>
				Mes compétences, à votre service.
			</h2>
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
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
					altImage="Framer"
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
					srcImage="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
					altImage="Postgres"
				/>
			</div>
		</section>
	);
}
