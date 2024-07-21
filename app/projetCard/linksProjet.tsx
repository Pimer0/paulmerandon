import React from "react";

interface LinksProjetProps {
	lien: string;
}

const LinksProjet: React.FC<LinksProjetProps> = ({ lien }) => {
	return <a href={lien}>Lien vers le projet</a>;
};

export default LinksProjet;
