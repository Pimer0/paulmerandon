import { playfairDisplay, jetBrainsMono } from "../fonts";
import Card from "./card";

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
				On se rencarde ?
			</h1>
			<Card
				path="https://www.linkedin.com/in/paul-m%C3%A9randon/"
				srcImage="assets/LinkedInblc.svg"
				altImage="LinkedIn"
				niveauUn="Mon LinkedIn"
				niveauDeux="D’abord ajoute moi, et puis ensuite on discute en dm..."
			></Card>
			<Card
				path="mailto:paulmerandon@gmail.com"
				srcImage="assets/Enveloppemail.svg"
				altImage="Mail"
				niveauUn="Mon mail"
				niveauDeux="On est en 1980 là ? Enfin bref n’hésite pas à envoyer un message..."
			></Card>
			<Card
				path="tel:+33659139662"
				srcImage="assets/Iconetelephone.svg"
				altImage="téléphone"
				niveauUn="Mon 06"
				niveauDeux="Je suis un millénial, je préfère les messages écrits..."
			></Card>
		</section>
	);
}
