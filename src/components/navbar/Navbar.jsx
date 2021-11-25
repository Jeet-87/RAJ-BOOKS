import React, {useState} from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg';

/* importing react icons */
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => {
    return( <>
        <p><a href="#home">Home</a></p>
        <p><a href="#about-us">About Us</a></p>
        <p><a href="#products">Products</a></p>
        <p><a href="#contact-us">Contact Us</a></p>
        </>)
    }


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="raj__navbar">
            <div className="raj__navbar-links">
                <div className="raj__navbar-links-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="raj__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="raj__navbar-sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
            </div>
            <div className="raj__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>    
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <div className="raj__navbar-menu_container scale-up-center">
                        <div className="raj__navbar-menu_container-links">
                            <Menu />
                            <div className="raj__navbar-menu_container-links-sign">
                                <p>Sign In</p>
                                <button type="button">Sign Up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
