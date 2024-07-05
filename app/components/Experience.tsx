import { promises as fs } from "fs";

export default async function Experience() {
    const file = await fs.readFile(
        process.cwd() + "/public/data/experience.json",
        "utf8"
    );
    const experience = JSON.parse(file);

    return (
        <div className="flex flex-col items-center gap-4">
            <p className="text-6xl font-light text-center drop-shadow-lg">Experience</p>
            <div className="flex flex-col items-center gap-12">
                {experience.map((e: any, index: number) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-6"
                        >
                            <div className="divider"></div>
                            <p className="text-4xl text-center drop-shadow-md">{e.position}</p>
                            <a
                                href={e.companyUrl}
                                className="text-2xl text-center underline hover:font-bold"
                            >
                                {e.company}
                            </a>
                            <p className="text-lg italic text-center">
                                {e.date}
                            </p>
                            <div className="flex flex-col gap-4  text-gray-500">
                                {e.details.map((detail: any, index: number) => {
                                    return (
                                        <p key={index} className="text-lg">
                                            {detail}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
