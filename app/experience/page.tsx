"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowCircleLeft,
    faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import jQuery from "jquery";
import data from "@/public/data/experience.json";
import React from "react";

const Experience = () => {
    const $ = jQuery;
    const [experienceId, setExperienceId] = useState(0);

    async function move(direction: number) {
        $("#experience-details").css({
            opacity: 0,
            transform: "scale(0.5)",
        });
        await new Promise((resolve) => {
            setTimeout(resolve, 500);
        });
        setExperienceId(
            (((experienceId + direction) % data.length) + data.length) %
                data.length
        );
        $("#experience-details").css({
            opacity: 1,
            transform: "scale(1)",
        });
    }

    return (
        <div
            id="experience"
            className="flex flex-col items-center justify-between flex-grow"
        >
            <div
                id="experience-details"
                className="mt-4 sm:mt-8 flex flex-col space-y-6 items-center text-center transition-all duration-500 ease-in-out"
            >
                <div className="text-5xl sm:text-6xl font-bold leading-tight transition-all hover:rotate-3">
                    <a
                        href={data[experienceId].companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {data[experienceId].company}
                    </a>
                </div>
                <div className="text-lg sm:text-xl font-bold">
                    <span className="inline-grid">
                        <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text blur-xl opacity-90 gradient-animation">
                            {data[experienceId].position}
                        </span>
                        <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text gradient-animation">
                            {data[experienceId].position}
                        </span>
                    </span>
                </div>
                <div className="text-small sm:text-base italic text-gray-400">
                    <p>{data[experienceId].date}</p>
                </div>
                <div className="max-w-5xl text-lg sm:text-xl">
                    {data[experienceId].details.map(
                        (detail: any, index: number) => {
                            return (
                                <React.Fragment key={index}>
                                    <p>{detail}</p>
                                    <br />
                                </React.Fragment>
                            );
                        }
                    )}
                </div>
            </div>
            <div className="mb-12 flex items-center justify-center gap-12">
                <FontAwesomeIcon
                    className="h-6 w-6 text-gray-500 hover:text-[aliceblue] transition-all hover:cursor-pointer"
                    icon={faArrowCircleLeft}
                    size="2x"
                    onClick={() => {
                        move(-1);
                    }}
                />
                <FontAwesomeIcon
                    className="h-6 w-6 text-gray-500 hover:text-[aliceblue] transition-all hover:cursor-pointer"
                    icon={faArrowCircleRight}
                    size="2x"
                    onClick={() => {
                        move(1);
                    }}
                />
            </div>
        </div>
    );
};

export default Experience;
