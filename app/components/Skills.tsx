import { promises as fs } from "fs";

export default async function Skills() {
    const file = await fs.readFile(
        process.cwd() + "/public/data/skills.json",
        "utf8"
    );
    const skills = JSON.parse(file);

    return (
        <div className="flex flex-col items-center gap-4">
            <p className="text-6xl font-light text-center drop-shadow-lg">
                Skills
            </p>
            <div className="h-4"></div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
                {skills.map((skill: any, index: number) => {
                    return (
                        <p
                            key={index}
                            className="text-xl text-center drop-shadow-md"
                        >
                            {skill}
                        </p>
                    );
                })}
            </div>
        </div>
    );
}
