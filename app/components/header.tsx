import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
	return (
		<header className="fixed top-0 left-0 w-full z-50 bg-transparent bg-opacity-60 backdrop-blur-sm backdrop-filter">
			<div className="Logo">
				<Link href="/">
					<Image
						className="p-2"
						src="/assets/logoMe.svg"
						alt="logo"
						width={75}
						height={75}
					/>
				</Link>
			</div>
		</header>
	);
};

export default Header;
