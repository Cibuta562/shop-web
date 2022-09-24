import React, { useState, useEffect } from "react";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import insta from "../assets/instagram.png"
import {Link} from "react-router-dom";
import logo from "../assets/logo3.png";
import cart from "../assets/shopping-cart.png"
import "./Menu.css";


const Menu = () => {


    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 50){
            setColorchange(true);
        }
        else{
            setColorchange(false);
            closeMobileMenu();
        }
    };
    window.addEventListener('scroll', changeNavbarColor);


    function moveToTop() {
        window.scrollTo(0,0);
    }

    function mobileAndMove(){
        moveToTop();
        closeMobileMenu();
    }

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className={colorChange ? 'header color-change' : 'header'}>
            <div className='logo-container'>
                <Link to="/">
               <img className="logo-shop" src={logo}/>
                </Link>
            </div>
            <div className='header-items' >
                <ul className={ click ? "nav-options active" : "nav-options"}>
                    <li className="option buttons1" onClick={closeMobileMenu} >
                            <Link style={{ textDecoration: 'none' }} to="/cart">
                                <div className="instagram-container" >
                                    <img src={cart} />
                                </div>
                            </Link>
                    </li>
                    <li className="option buttons"  onClick={closeMobileMenu} >
                        <div className='headerActions'>
                            <div className="instagram-container" >
                                <img src={insta} />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div  className="mobile-menu"   onClick={handleClick}>
                {click ? (
                    <CloseMenu className="menu-icon"/>
                ) : (
                    <MenuIcon className="menu-icon" />
                )}
            </div>
        </div>
    );
};

export default Menu;
