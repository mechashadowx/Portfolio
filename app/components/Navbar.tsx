"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
    const pathname = usePathname();

    const pages = [
        { name: "Projects", path: "/projects" },
        { name: "Experience", path: "/experience" },
        { name: "Achievements", path: "/achievements" },
        { name: "Feedback", path: "/feedback" },
        { name: "About", path: "/about" },
    ];

    return (
        <div
            id="navbar"
            className="my-6 flex gap-12 p-3 flex-wrap items-center justify-center"
        >
            {pages.map((page, index) => (
                <Link href={page.path} key={index} passHref>
                    <p
                        className={`navbar-item${
                            pathname === page.path
                                ? " navbar-item-active underline underline-offset-2"
                                : ""
                        }`}
                    >
                        {page.name}
                    </p>
                </Link>
            ))}
        </div>
    );
};

export default Navbar;
