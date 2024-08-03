import img from '../../assets/Book_Swap-removebg-preview 2.png'
import { NavLink } from "react-router-dom";

const NavbarComp = () => {
    const links = <>
        <li>
            <NavLink
                to="/"
                style={({ isActive }) => {
                    return {
                        fontWeight: "bold",
                        color: isActive ? "red" : "white",
                    };
                }}
            >
                Home
            </NavLink>
        </li>
        
        <li>
            <NavLink
                to="/allbooks"
                style={({ isActive }) => {
                    return {
                        fontWeight: "bold",
                        color: isActive ? "red" : "white",
                    };
                }}
            >
                All Books
            </NavLink>
        </li>
        
        <li>
            <NavLink
                to="/about"
                style={({ isActive }) => {
                    return {
                        fontWeight: "bold",
                        color: isActive ? "red" : "white",
                    };
                }}
            >
                About
            </NavLink>
        </li>

    </>
    return (
        <div>
            <div className="navbar bg-[#100d28] bg-opacity-90 px-10 text-white fixed z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg">
                            {
                                links
                            }
                        </ul>
                    </div>

                    <div>
                        <img className='w-2/3' src={img} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2 text-lg">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost uppercase bg-[#8906e6] text-white border-b-4 border-b-white">Log In</button>
                </div>
            </div>
        </div>
    );
};

export default NavbarComp;