import Navbar from "../components/Navbar";
import Identity from "./Identity";

export default function Home() {
    return (
        <div className="h-full w-full grid grid-rows-3 grid-cols-1">
            <Navbar />
            <div className="flex items-start justify-center">
                <Identity />
            </div>
            <div></div>
        </div>
    );
}
