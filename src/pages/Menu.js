import React, { useState, useEffect } from "react";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import {Link} from "react-router-dom";
import logo from "../assets/logo3.png";
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
               <img className="logo-shop" src={logo}/>
            </div>
            <div className='header-items' style={{marginBottom: "23px", marginRight: "120px", marginTop: "25px"}}>
                <ul className={ click ? "nav-options active" : "nav-options"}>
                    <li className="option " onClick={closeMobileMenu}>

                    </li>
                    <li className="option" onClick={closeMobileMenu} >

                    </li>
                    <li className="option " onClick={closeMobileMenu} >

                    </li>
                    <li className="option " onClick={mobileAndMove} >

                    </li>
                    <li className="option buttons"  onClick={closeMobileMenu} >
                        <div className='headerActions'>
                            <div className="instagramContainerH" >
                                <img  />
                            </div>
                            <div className="twitterContainerH" >
                                <img  />
                            </div>
                            <div className="instagramContainerH" >
                                <img  />
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
