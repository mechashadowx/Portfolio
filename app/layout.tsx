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
            <body className={quicksand.className}>
                <MeteorBackground />
                <main className="flex flex-col items-center px-3 relative z-10">
                    {children}
                </main>
            </body>
        </html>
    );
}
