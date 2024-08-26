import About from './components/About';
import Navbar from './components/Navbar';

export default function Home() {
    return (
        <>
            <Navbar opened="About" />
            <About />
        </>
    );
}
