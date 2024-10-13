import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import AudioProvider from "@/providers/AudioProvider";
import ConvexClerkProvider from "../providers/ConvexClerkProvider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Multivo AI",
	description:
		"A cutting-edge AI SaaS platform that enables users to create, discover, and enjoy podcasts with advanced features like text-to-audio conversion with multi-voice AI, podcast thumbnail Image generation and seamless playback.",
	icons: {
		icon: "/icons/logo.svg",
	},
	openGraph: {
		title: "Multivo AI",
		description:
			"A cutting-edge AI SaaS platform that enables users to create, discover, and enjoy podcasts with advanced features like text-to-audio conversion with multi-voice AI, podcast thumbnail Image generation and seamless playback.",
		url: "https://multivo.xyz",
		images: [
			{
				url: "/multivo-thumbnails.png",
				width: 1260,
				height: 800,
			},
		],
		locale: "en-EN",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ConvexClerkProvider>
			<html lang="en">
				<AudioProvider>
					<body className={`${manrope.className}`}>{children}</body>
				</AudioProvider>
			</html>
		</ConvexClerkProvider>
	);
}
