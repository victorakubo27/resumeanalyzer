import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const path = location.pathname;
    const isHome = path.endsWith("/");

    return (
        <nav className={`${isHome ? "navbar" : "hidden"}`}>
            <Link to="/">
                <p className="flex items-center text-2xl font-bold dark:!text-gray-900 !text-gray-200">
                    M-ResuME
                </p>
            </Link>

            <Link
                to="/upload"
                className="px-4 py-2 rounded-lg 
                           bg-gray-200 !text-black 
                           dark:bg-neutral-800 dark:!text-white"
            >
                Upload Resume
            </Link>
        </nav>
    );
};

export default Navbar;