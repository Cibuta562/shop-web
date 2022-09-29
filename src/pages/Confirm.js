import "./Cart.css"
import Menu from "./Menu";
import leftArrow from "../assets/left.png";
import rightArrow from "../assets/arrow-right.png";
import StepProgressBar from "./ProgressBar";
import {useState} from "react";
import {form} from "../Form"
import {MutliStepForm} from "./MultiStepForm";
import Footer from "./Footer";
import {CartProvider, useCart} from "react-use-cart";
import { Button, Container, Col, Row, Table} from 'react-bootstrap';
import Cart from "./Cart";
import {Link} from "react-router-dom";

function Confirm () {

    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    const [pagesAnswers, setPagesAnswers] = useState({});

    const onPageAnswerUpdate = (step, answerObj) => {
        setPagesAnswers({...pagesAnswers, [step]: answerObj});
    }

    const [step, setStep] = useState(1);

    function nextStep() {
        if (step < 3)
            setStep(step+1)
        console.log(step)
        if(step == 3)
            console.log("Am ajuns la final")
    }

    function prevStep() {
        if (step > 1)
            setStep(step-1)
        console.log(step)
    }

    return(
        <div>
            <Menu/>
            <Container className="py-4 mt-5">
                <h1 className="cart-top" >
                    {isEmpty? 'Your order is empty :(' : 'Your order'}
                </h1>
                <div>
                    {items.map((item, index)=>{
                        return(
                            <div key={index} className="item-card">
                                <div className="item-content">
                                    <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                        justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ padding: '.5rem'}}>
                                            <img src={item.image} style={{ width: '4rem'}} alt={item.title} />
                                        </div>
                                    </div>
                                    <p className="cart-item-title" >
                                        {item.title}
                                    </p>
                                    <p>{item.price} LEI</p>
                                    <p>Quantity ({item.quantity})</p>
                                </div>
                            </div>
                        )
                    })}
                    {!isEmpty &&
                    <div>
                        <h4 className="total-confirm">Total Price: {cartTotal.toFixed(2)} LEI</h4>
                    </div>
                    }
                    <button className="place-order-btn">
                        <Link to="/thanks" style={{textDecoration: "none"}}>
                        PLace order
                        </Link>
                    </button>
                </div>
            </Container>
            <Footer/>
        </div>
    )
}



export default Confirm