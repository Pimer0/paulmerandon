"use client";

import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ExampleProps {
	srcImage: string;
}

export const Example = ({ srcImage }: ExampleProps) => {
	const constraintsRef = useRef<HTMLDivElement | null>(null);
	const [randomTop, setRandomTop] = useState(0);
	const [randomLeft, setRandomLeft] = useState(0);

	const getRandomInt = (min: number, max: number) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			setRandomTop(getRandomInt(0, window.innerHeight - 192));
			setRandomLeft(getRandomInt(0, window.innerWidth - 192));
		}
	}, []);

	return (
		<div className="hidden lg:block">
			<motion.div
				className="cursor-pointer fixed inset-0 z-40 flex overflow-hidden pointer-events-none"
				ref={constraintsRef}
			>
				<motion.div
					className="w-48 h-48 bg-no-repeat bg-cover pointer-events-auto"
					style={{
						backgroundImage: `url(${srcImage})`,
						top: randomTop,
						left: randomLeft,
						position: "absolute",
					}}
					drag
					dragConstraints={constraintsRef}
					animate={{ opacity: 1 }}
					initial={{ x: 0, y: 0, opacity: 0 }}
				></motion.div>
			</motion.div>
		</div>
	);
};

export default Example;
