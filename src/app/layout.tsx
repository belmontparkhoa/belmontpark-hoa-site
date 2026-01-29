import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import SocialIcon from "@/components/social-icons";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Belmontpark HOA",
	description: "website for the belmontpark hoa association"
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-svh`}>
                <Navbar />
                <main className="flex-grow">{children}</main>
            <footer className="p-5">
                <div className="flex flex-col items-center">
                <div className="mb-3 flex space-x-4">
                <SocialIcon href='mailto:bphoa.boise@gmail.com' kind="mail" />
                <SocialIcon href='https://github.com/belmontparkhoa/belmontpark-hoa-site' kind="github" />
                </div>
                </div>
            </footer>
            </body>
		</html>
	);
}
