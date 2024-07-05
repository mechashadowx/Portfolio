import CompetitiveProgramming from "./components/CompetitiveProgramming";
import Divider from "./components/Divider";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
    return (
        <>
            <div className="m-16 flex flex-col items-center">
                <div className="h-screen flex flex-col items-center">
                    <Hero />
                </div>
                <div className="w-[70%] flex flex-col items-center gap-8">
                    <Divider />
                    <Projects />
                    <Divider />
                    <Experience />
                    <Divider />
                    <CompetitiveProgramming />
                    <Divider />
                </div>
            </div>
            <footer className="footer footer-center bg-neutral text-neutral-content p-6">
                <aside>
                    <p className="font-bold text-lg">Mustafa Alsheikh</p>
                    <div className="flex gap-4" >
                        <a href="https://github.com/mechashadowx" className="hover:underline">Github</a>
                        <p>•</p>
                        <a href="./CV.pdf" className="hover:underline">Resume</a>
                    </div>
                </aside>
            </footer>
        </>
    );
}
