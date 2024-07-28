import { copernicusBold, jetBrainsMono } from "../fonts";
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
				className={`mb-8 text-2xl tracking-tighter ${copernicusBold.className}`}
			>
				About me
			</h1>
			<Image
				className="border border-amber-950 rounded-2xl mb-8"
				src="/assets/me.jpeg"
				alt="logo"
				width={375}
				height={375}
			/>
			<p className={`mb-4 ${jetBrainsMono.className}`}>
				{`Enchanté, Paul Mérandon, étudiant au CESI en développement informatique avec une appétence pour le développement front-end et une grande curiosité pour le développement back-end.`}
			</p>
			<br />
			<p className={`mb-4 ${jetBrainsMono.className}`}>
				{`Fort de plusieurs projets qui on sollicité chez moi la résolution de problème, la logique, et le travail d’équipe, je cherche le prochain sujet qui viendra me titiller les neurones et me challenger.`}
			</p>
			<br />
			<p className={`mb-4 ${jetBrainsMono.className}`}>
				{`Avide de savoir, explorateur, j’aimerais tout connaitre du développement, et je travail d’arrache pied pour y arriver.`}
			</p>
			<br />
			<p className={`mb-4 ${jetBrainsMono.className}`}>
				{`Je t’ai dit que je suis aussi diplômé d’un master économie-gestion ?`}
			</p>
			<br />
			<h2
				className={`mb-8 text-xl tracking-tighter ${copernicusBold.className}`}
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
