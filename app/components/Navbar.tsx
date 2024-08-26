type NavbarProps = {
    opened: string;
};

const Navbar: React.FC<NavbarProps> = ({ opened }) => {
    const pages = ["About", "Projects", "Experience", "Achievements", "Skills", "Feedback"];

    return (
        <div id="navbar" className="my-6 flex gap-12 p-3 flex-wrap items-center justify-center">
            {pages.map((page, index) => (
                <h3
                    key={index}
                    className={`navbar-item${
                        page === opened ? " navbar-item-active underline underline-offset-2" : ""
                    }`}
                >
                    {page}
                </h3>
            ))}
        </div>
    );
};

export default Navbar;
