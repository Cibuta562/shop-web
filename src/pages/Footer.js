import "./Footer.css"
import {Link} from "react-router-dom";
import logo from "../assets/logo-new.png"

function Footer() {

    function moveToTop(){
        window.scrollTo(0, 0);
    }


    return(
        <div className='footer-big'>
            <div className="cards" style={{ backgroundColor: "#C5C3C8", margin: 0}}>
                <div className="card-logo display-footer" style={{position: "relative", backgroundColor: "white"}} >
                    <div className='footer-logo' onClick={moveToTop}>
                        <img src={logo} className='img-logo'  onClick={moveToTop} style={{marginRight: "10px", marginLeft: "10px", marginTop:"0px"}}/>
                    </div>
                </div>
                <div className="card-logo" style={{position: "relative", margin: 0}}>
                    <div className="footer-items" onClick={moveToTop}>
                        <Link className="no-decorations " to="/terms-and-cond"><p className="terms-and-cond">Terms and Conditions</p></Link>
                    </div>
                </div>
                <div className="card-logo" style={{position: "relative", margin: 0}}>
                    <div className="footer-items" onClick={moveToTop}>
                        <a className="no-decorations " href="https://github.com/Cibuta562"><p className='powered-by'>powered by: boboccibo</p></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer