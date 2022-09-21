import React, { useState, useEffect } from "react";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import {Link} from "react-router-dom";
import logo from "../assets/logo3.png";
import "./Menu.css";


const Menu = () => {



    function moveToFAQ() {
        window.scrollTo(0,0);
    }

    function moveToTeam() {
        window.scrollTo(0,0);
    }

    function moveToDoberlads() {
        window.scrollTo(0,0);
    }

    function moveToOlx(){
        window.open ("https://www.olx.ro/oferte/user/d0Liv/");
    }

    function moveToWapp(){
        window.open ("https://wa.me/message/JUE5BSRGGMDCA1");
    }

    function moveToFb(){
        window.open ("https://www.facebook.com/profile.php?id=100081064977561");
    }

    function moveToTop() {
        window.scrollTo(0,0);
    }

    function mobileAndMove(){
        moveToTop();
        closeMobileMenu();
    }


    function moveToPiatra() {
        window.open("/piatra");
    }

    function moveToGratare(){
        window.open("/gratare");
    }

    function moveToGazon(){
        window.open("/gazon");
    }

    function moveToTui(){
        window.open("/tui");
    }

    function moveToFantani(){
        window.open("/fantani");
    }


    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="header">
            <div className='logoContainer'>
               <img className="logo-shop" src={logo}/>
            </div>
            <div className='headerItems' style={{marginBottom: "23px", marginRight: "120px", marginTop: "25px"}}>
                <ul className={click ? "nav-options active" : "nav-options"}>
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
                                <img  onClick={moveToFb}/>
                            </div>
                            <div className="twitterContainerH" >
                                <img  onClick={moveToWapp} />
                            </div>
                            <div className="instagramContainerH" >
                                <img  onClick={moveToOlx}/>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="mobile-menu" onClick={handleClick}>
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
