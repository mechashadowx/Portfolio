import type { Metadata } from "next";
import "@/app/globals.css";
import "tailwindcss/tailwind.css";
import { Quicksand } from "next/font/google";
import MeteorBackground from "./components/MeteorBackground";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="dark">
            <head>
                <link rel="icon" href="/Portfolio/favicon.svg" />
            </head>
            <body className={quicksand.className}>
                <MeteorBackground />
                <main className="py-6 flex flex-col items-center px-5 relative z-10 min-h-screen">
                    {children}
                </main>
            </body>
        </html>
    );
}
