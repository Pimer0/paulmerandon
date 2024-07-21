import React from "react";

interface TitleNivDeuxProps {
	text: string;
}

const TitleNivDeux: React.FC<TitleNivDeuxProps> = ({ text }) => {
	return <h2>{text}</h2>;
};

export default TitleNivDeux;
