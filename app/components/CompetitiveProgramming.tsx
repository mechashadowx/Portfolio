import { promises as fs } from "fs";

export default async function CompetitiveProgramming() {
    const file = await fs.readFile(
        process.cwd() + "/public/data/competitive_programming.json",
        "utf8"
    );
    const contests = JSON.parse(file);

    return (
        <div className="flex flex-col items-center gap-4">
            <p className="text-6xl font-light text-center drop-shadow-lg">
                Competitive Programming
            </p>
            <p className="text-lg text-gray-500">
                I was part of many competitive programming contests as
                participated, problem writer, judge, and trainer.
            </p>
            <div className="divider"></div>
            <div className="grid grid-cols-2 gap-12">
                {contests.map((contest: any, index: number) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-4"
                        >
                            <p className="text-4xl text-center font-bold drop-shadow-md">
                                {contest.place}
                            </p>
                            <p className="text-lg italic text-center">
                                {contest.name}
                            </p>
                            <p className="text-lg">{contest.year}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
