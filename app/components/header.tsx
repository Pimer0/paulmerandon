import React from "react";
import Image from "next/image";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
	return (
		<header className="fixed top-0 left-0 w-full z-50 bg-transparent bg-opacity-60 backdrop-blur-sm backdrop-filter">
			<div className="Logo">
				<Image src="/assets/Logo.svg" alt="logo" width={75} height={75} />
			</div>
		</header>
	);
};

export default Header;
