import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function Hero() {
    return (
        <div className="h-[80%] flex flex-col gap-6 items-center justify-center">
            <div className="grid place-items-center text-9xl drop-shadow-xl">
                <p className={dancingScript.className}>Mustafa Alsheikh</p>
            </div>
            <p className="text-2xl font-light drop-shadow-lg text-gray-500">
                Software Engineer & Problem Solver
            </p>
        </div>
    );
}
