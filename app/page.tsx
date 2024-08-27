"use client";

import jQuery from "jquery";
import { useState } from "react";
import Home from "./home/Home";
import Experience from "./experience/Experience";
import Achievements from "./achievements/Achievements";
import Projects from "./projects/Projects";

type Page = {
    name: string;
    component: JSX.Element;
};

export default function App() {
    const pages: Page[] = [
        { name: "Home", component: <Home /> },
        { name: "Projects", component: <Projects /> },
        { name: "Experience", component: <Experience /> },
        { name: "Achievements", component: <Achievements /> },
    ];

    const $ = jQuery;
    const [pageId, setPageId] = useState(0);

    async function changePage(id: number) {
        $("#view").css({
            opacity: 0,
        });
        await new Promise((resolve) => {
            setTimeout(resolve, 500);
        });
        setPageId(id);
        $("#view").css({
            opacity: 1,
        });
    }

    return (
        <>
            <div
                id="navbar"
                className="mb-6 flex gap-12 p-3 flex-wrap items-center justify-center"
            >
                {pages.map((page, index) => (
                    <p
                        key={index}
                        className={`navbar-item cursor-pointer ${
                            index === pageId
                                ? "navbar-item-active underline underline-offset-2"
                                : ""
                        }`}
                        onClick={() => changePage(index)}
                    >
                        {page.name}
                    </p>
                ))}
            </div>
            <div
                id="view"
                className="flex transition-all duration-500 ease-in-out flex-grow"
            >
                {pages[pageId].component}
            </div>
        </>
    );
}
