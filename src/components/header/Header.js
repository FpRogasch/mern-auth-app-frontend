import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

// Iconos React
import { BiLogIn } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

import "./Header.scss";
import { useDispatch } from 'react-redux';
import { RESET, logout } from '../../redux/features/auth/authSlice';
import { ShowOnLoggin, ShowOnLogout } from '../protect/hiddenLink';

const activeLink = ({isActive}) => (isActive ? "active" : "")

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const goHome = () => {
        navigate("/");
    };

    const logoutUser = async () => {
        dispatch(RESET());
        await dispatch(logout());
        navigate("/login");
    }

    return (
        <header className='header'>
            <nav>
                <div className='logo' onClick={goHome}>
                    <BiLogIn size={35} />
                    <span>AUTH:Z</span>
                </div>

                <ul className='home-links'>
                    <ShowOnLoggin>
                        <li className='--flex-center'>
                            <FaUserCircle size={20} />
                            <p className='--color-white'>
                                Hi, Felipe |
                            </p>
                        </li>
                    </ShowOnLoggin>
                    <ShowOnLogout>
                        <li>
                            <button className='--btn --btn-primary'>
                                <Link to="/login">Login</Link>
                            </button>
                        </li>
                    </ShowOnLogout>
                    <ShowOnLoggin>
                        <li>
                            <NavLink to="/profile" className={activeLink}>Profile</NavLink>
                        </li>
                        <li>
                            <button onClick={logoutUser} className='--btn --btn-secondary'>
                                Logout
                            </button>
                        </li>
                    </ShowOnLoggin>
                </ul>
            </nav>
        </header>
    );
}

export default Header