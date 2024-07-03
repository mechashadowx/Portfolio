export default function Navbar() {
    return (
        <div className="navbar flex items-start justify-center">
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg space-x-8">
                    <li>
                        <a>Experience</a>
                    </li>
                    <li>
                        <a>Projects</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
