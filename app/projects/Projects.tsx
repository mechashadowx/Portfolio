import data from "@/public/data/projects.json";
import Image from "next/image";
import nextjs from "@/public/logos/next-js.svg";
import tailwindcss from "@/public/logos/tailwindcss.svg";
import daisyui from "@/public/logos/daisyui.svg";
import fastapi from "@/public/logos/fastapi.svg";
import auth0 from "@/public/logos/auth0.svg";
import aws from "@/public/logos/aws.svg";
import paddle from "@/public/logos/paddle.svg";
import figma from "@/public/logos/figma.svg";
import flutter from "@/public/logos/flutter.svg";
import cpp from "@/public/logos/cpp.svg";
import leetcode from "@/public/logos/leetcode.svg";
import html from "@/public/logos/html.svg";
import css from "@/public/logos/css.svg";
import javascript from "@/public/logos/javascript.svg";

const Projects = () => {
    const logoMapping = new Map<string, any>([
        ["nextjs", nextjs],
        ["tailwindcss", tailwindcss],
        ["daisyui", daisyui],
        ["fastapi", fastapi],
        ["auth0", auth0],
        ["aws", aws],
        ["paddle", paddle],
        ["figma", figma],
        ["flutter", flutter],
        ["cpp", cpp],
        ["leetcode", leetcode],
        ["html", html],
        ["css", css],
        ["javascript", javascript],
    ]);

    return (
        <div
            id="projects"
            className="max-w-5xl mt-4 sm:mt-8 flex flex-col space-y-8 items-center text-center"
        >
            <div className="flex flex-col items-center gap-12">
                {data.map((project: any, index: number) => {
                    return (
                        <div
                            key={index}
                            className="w-full flex flex-col items-center gap-8"
                        >
                            <a
                                href={project.source}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p className="text-4xl sm:text-5xl text-center font-bold transition-all hover:rotate-3">
                                    <span className="h-12 sm:h-14 inline-grid">
                                        <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text blur-xl opacity-90 gradient-animation">
                                            {project.name}
                                        </span>
                                        <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text gradient-animation">
                                            {project.name}
                                        </span>
                                    </span>
                                </p>
                            </a>
                            <p className="text-xl text-center drop-shadow-sm text-gray-400">
                                {project.details}
                            </p>
                            <div className="flex gap-8 justify-center">
                                {project.techs.map(
                                    (tech: string, index: number) => {
                                        return (
                                            <div
                                                key={index}
                                                className="h-6 w-6 drop-shadow-lg flex items-center"
                                            >
                                                <Image
                                                    priority
                                                    src={logoMapping.get(tech)}
                                                    alt=""
                                                    width={24}
                                                    height={24}
                                                />
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                            <div className="drop-shadow-2xl">
                                <Image
                                    src={`/Portfolio/projects${project.image}`}
                                    alt=""
                                    width={500}
                                    height={500}
                                    className="rounded-2xl hover:scale-110 transition-all duration-150 ease-in-out"
                                />
                            </div>
                            <div className="divider"></div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
