import { motion } from "framer-motion";
import Image from "next/image";
import LinksProjet from "./linksProjet";
import TitleNivDeux from "./TitleNivDeux";

const ImageProjet = ({ titre, srcImage, lien }) => (
	<motion.div
		className="my-8"
		initial={{ opacity: 0, x: -100 }}
		whileInView={{ opacity: 1, x: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 1 }}
	>
		<TitleNivDeux text={titre} />
		<Image width={200} height={200} src={srcImage} alt={titre} />
		<LinksProjet lien={lien} />
	</motion.div>
);

export default ImageProjet;
