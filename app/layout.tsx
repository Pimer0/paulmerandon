import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import Header from "./components/header";

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: "Paul Mérandon",
		template: "%s | Paul Mérandon",
	},
	description: "Mon humble portfolio.",
	openGraph: {
		title: "Paul Mérandon",
		description: "Mon portfolio.",
		url: baseUrl,
		siteName: "Paul Mérandon",
		locale: "fr_FR",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="fr"
			className={cx(
				"text-black bg-white dark:text-white dark:bg-black",
				GeistSans.variable,
				GeistMono.variable
			)}
		>
			<link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />
			<body className="antialiased pt-[75px]">
				<Header />
				<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 max-w-xl mx-4 lg:mx-auto">
					<Navbar />
					{children}
					<Footer />
				</main>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
