import {Link} from "react-router-dom";
import {ModeToggle} from "./ModeToggle"
const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <p className="flex items-center text-2xl font-bold dark:!text-gray-900 !text-gray-200">M-ResuME</p>
            </Link>
            <Link to="/upload" className="primary-button !bg-gray-200 dark:!bg-gray-900  w-fit">
                Upload Resume
            </Link>
        </nav>
    )
}
export default Navbar