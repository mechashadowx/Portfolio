import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function Name() {
    return <div className="grid place-items-center text-9xl" >
        <p className={dancingScript.className} >Mustafa Alsheikh</p>
    </div>;
}