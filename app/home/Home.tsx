import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <div
            id="home"
            className="mt-16 sm:mt-32 flex flex-col space-y-8 items-center text-center"
        >
            <div className="text-6xl sm:text-8xl font-bold leading-tight">
                I&rsquo;m{" "}
                <span className="inline-grid">
                    <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text blur-xl opacity-90 gradient-animation">
                        Mustafa
                    </span>
                    <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text gradient-animation">
                        Mustafa
                    </span>
                </span>
                .
            </div>
            <div className="text-lg sm:text-xl">
                <p>Problem Solver & Software Engineer</p>
            </div>
            <div className="max-w-5xl text-lg sm:text-xl font-bold">
                <p>
                    <span className="text-2xl sm:text-3xl">&rdquo;</span> Known
                    for his technical prowess, adaptability, and strong sense of
                    ownership,{" "}
                    <span className="inline-grid">
                        <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text blur-xl opacity-90 gradient-animation">
                            Mustafa
                        </span>
                        <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text gradient-animation">
                            Mustafa
                        </span>
                    </span>{" "}
                    consistently delivers high-quality work and supports his
                    team members.
                </p>
            </div>
            <div></div>
            <div className="flex gap-8">
                <a
                    href="https://github.com/mechashadowx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[aliceblue] transition-all"
                >
                    <FontAwesomeIcon
                        className="h-6 w-6"
                        icon={faGithub}
                        size="2x"
                    />
                </a>
                <a
                    href="https://x.com/MechashadowX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[aliceblue] transition-all"
                >
                    <FontAwesomeIcon
                        className="h-6 w-6"
                        icon={faXTwitter}
                        size="2x"
                    />
                </a>
                <a
                    href="./CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[aliceblue] transition-all"
                >
                    <FontAwesomeIcon
                        className="h-6 w-6"
                        icon={faFileArrowDown}
                        size="2x"
                    />
                </a>
            </div>
        </div>
    );
};

export default Home;
