import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "@/app/globals.css";
import "tailwindcss/tailwind.css";

const montserrat = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="cupcake">
            <body className={montserrat.className}>{children}</body>
        </html>
    );
}
