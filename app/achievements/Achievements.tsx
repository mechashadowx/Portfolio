import data from "@/public/data/competitive_programming.json";

const Achievements = () => {
    return (
        <div
            id="achievements"
            className="max-w-5xl mt-4 sm:mt-8 flex flex-col space-y-8 items-center text-center"
        >
            <div className="text-4xl sm:text-5xl font-bold leading-tight">
                <h1>Competitive Programming</h1>
            </div>
            <div className="text-lg sm:text-xl">
                <p>
                    I was part of many competitive programming contests as
                    participated, problem writer, judge, and trainer. I solved{" "}
                    <span className="inline-grid font-bold">
                        <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text blur-xl opacity-90 gradient-animation">
                            +1000
                        </span>
                        <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text gradient-animation">
                            +1000
                        </span>
                    </span>{" "}
                    Codeforces problems.
                </p>
            </div>
            <div></div>
            <div className="flex flex-wrap items-center justify-center gap-16">
                {data.map((contest: any, index: number) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-3 max-w-48"
                        >
                            <p className="text-5xl text-center font-bold drop-shadow-md">
                                <span className="inline-grid">
                                    <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text blur-xl opacity-90 gradient-animation">
                                        {contest.place}
                                    </span>
                                    <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text gradient-animation">
                                        {contest.place}
                                    </span>
                                </span>
                            </p>
                            <p className="text-lg text-center">
                                {contest.name}
                            </p>
                            <p className="text-small sm:text-base font-bold italic text-gray-400">
                                {contest.year}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Achievements;
