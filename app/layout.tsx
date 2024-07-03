import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import "tailwindcss/tailwind.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="cupcake" className="h-full w-full">
            <body className={`h-full w-full ${montserrat.className}`}>{children}</body>
        </html>
    );
}
