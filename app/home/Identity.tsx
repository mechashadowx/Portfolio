import Name from "./Name";

export default function Identity() {
    return <div className="flex flex-col gap-4 items-center justify-center" >
        <Name />
        <p className="text-2xl font-light" >A Software Engineer & A Problem Solver</p>
    </div>;
}