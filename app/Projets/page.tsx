import { copernicusBold, jetBrainsMono } from "../fonts";

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
				Une idée de ce que je peux faire :
			</h1>
		</section>
	);
}
