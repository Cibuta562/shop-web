import "./Header.css"
import Menu from "./Menu";
import img from "../assets/header-pic.jpg";

function Header() {
    return(
       <div className="header-space">
           <p className="title-shop">Noft Store</p>
           <p className="desc-shop">Not you usual online store</p>
           <img className="img-header" src={img}/>
       </div>
    )
}

export default Header