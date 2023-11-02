// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line no-unused-vars
import React from 'react';


const Header = () => {
    return (
        <div>

            <div className="navbar bg-slate-300 rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold text-xl">
                            <li><a>Home</a></li>
                            <li><a>Cart</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl">𝓑𝓸𝓸𝓴𝓼 𝓒𝓸𝓻𝓷𝓮𝓻</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold text-xl">
                        <li><a>Home</a></li>
                        <li><a>Cart</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className='btn btn-outline'>Login</button>
                    {/* <FontAwesomeIcon icon="fa-regular fa-envelope" /> */}
                </div>
            </div>
        </div>
    );
};

export default Header;