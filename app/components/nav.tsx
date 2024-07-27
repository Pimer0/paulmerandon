"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	HomeIcon,
	FolderIcon,
	UserIcon,
	EnvelopeIcon,
} from "@heroicons/react/24/outline";
import path from "path";

const navItems = {
	"/": {
		name: "Home",
		icon: HomeIcon,
	},
	"/Projets": {
		name: "Projets",
		icon: FolderIcon,
	},
	"/Me": {
		name: "Me",
		icon: UserIcon,
		path: "/Me",
	},
	"/Contact": {
		name: "Contact",
		icon: EnvelopeIcon,
	},
};

export function Navbar() {
	const pathname = usePathname();

	return (
		<nav className="fixed bottom-0 left-0 right-0 bg-transparent bg-opacity-20 backdrop-blur-sm backdrop-filter pt-4 pb-4 ">
			<div className="overflow-x-auto no-scrollbar">
				<div className="flex items-center min-w-max">
					{Object.entries(navItems).map(([path, { name, icon: Icon }]) => {
						const isActive = pathname === path;
						return (
							<Link
								key={path}
								href={path}
								className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex items-center relative py-1 px-2 m-1 ${
									isActive
										? "bg-[#463436] textBlanc"
										: "bg-[#463436] textBlanc opacity-50"
								} rounded-[20px]`}
							>
								<Icon className="w-5 h-5 mr-2 text-white group-hover:text-white" />
								{name}
							</Link>
						);
					})}
				</div>
			</div>
		</nav>
	);
}
