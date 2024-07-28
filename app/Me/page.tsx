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
				{`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam atque, veritatis culpa porro itaque eius quod quas deleniti vitae accusamus sapiente est, excepturi animi, tempore eos. Aut ad cumque sequi!`}
			</p>
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
