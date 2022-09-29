import "./ThankYou.css"
import Menu from "./Menu";
import Footer from "./Footer";

function ThankYou() {
    return(
        <div>
            <Menu/>
            <div className="thanks-div">
            <h1 className="thanks-title">Thank you for your order !</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default ThankYou