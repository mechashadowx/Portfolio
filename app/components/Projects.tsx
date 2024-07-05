import { promises as fs } from "fs";
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
import { ExternalLink } from "react-feather";

export default async function Projects() {
    let logoMapping = new Map<string, any>();
    logoMapping.set("nextjs", nextjs);
    logoMapping.set("tailwindcss", tailwindcss);
    logoMapping.set("daisyui", daisyui);
    logoMapping.set("fastapi", fastapi);
    logoMapping.set("auth0", auth0);
    logoMapping.set("aws", aws);
    logoMapping.set("paddle", paddle);
    logoMapping.set("figma", figma);
    logoMapping.set("flutter", flutter);
    logoMapping.set("cpp", cpp);
    logoMapping.set("leetcode", leetcode);
    logoMapping.set("html", html);
    logoMapping.set("css", css);

    const file = await fs.readFile(
        process.cwd() + "/public/data/projects.json",
        "utf8"
    );
    const projects = JSON.parse(file);

    return (
        <div className="flex flex-col items-center gap-4">
            <p className="text-6xl font-light text-center drop-shadow-lg">
                Projects
            </p>
            <div className="flex flex-col items-center gap-12">
                {projects.map((project: any, index: number) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-8"
                        >
                            <div className="divider"></div>
                            <p className="text-4xl text-center drop-shadow-md">{`${
                                index + 1
                            }. ${project.name}`}</p>
                            <p className="text-xl text-center drop-shadow-sm text-gray-500">
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
                                    className="rounded-2xl"
                                />
                            </div>
                            {project.source && (
                                <a href={project.source} className="hover:text-primary">
                                    <ExternalLink />
                                </a>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
