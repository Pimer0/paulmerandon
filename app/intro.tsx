import { motion } from "framer-motion";
import { playfairDisplay, jetBrainsMono } from "./fonts";

const Intro = () => (
	<motion.div
		whileInView={{ opacity: 1, x: 0 }}
		transition={{ duration: 1 }}
		initial={{ opacity: 0, x: -100 }}
		className="my-8"
	>
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
			Bricoleur, kiffeur, aventurier, que sais-je encore… Ai-je votre attention
			? Si vous voulez en savoir plus sur moi, il va falloir vous balader un peu
			sur ce site. Il y en a pour tout le monde, un peu de
			<strong> front</strong>, un peu de <strong>back,</strong> mais aussi de{" "}
			<strong>l'animation et de la 3D</strong>. Bienvenue chez moi !
		</p>
	</motion.div>
);

export default Intro;
