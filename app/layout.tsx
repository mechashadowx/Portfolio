import type { Metadata } from "next";
import "@/app/globals.css";
import "tailwindcss/tailwind.css";
import { Quicksand } from "next/font/google";

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
            <body className={`flex flex-col items-center px-3 ${quicksand.className}`}>{children}</body>
        </html>
    );
}
