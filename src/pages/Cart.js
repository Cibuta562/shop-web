import "./Cart.css"
import Menu from "./Menu";
import leftArrow from "../assets/left.png";
import rightArrow from "../assets/arrow-right.png";
import StepProgressBar from "./ProgressBar";
import {useState} from "react";
import {form} from "../Form"
import {MutliStepForm} from "./MultiStepForm";
import Footer from "./Footer";
import { useCart} from "react-use-cart";
import { Button, Container, Col, Row, Table} from 'react-bootstrap';
import sadCart from "../assets/sad-cart.png"
import {Link} from "react-router-dom";

function Cart () {

    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    const totalPagesCount = form.length;
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
                <h1 className="cart-top" >
                    {isEmpty? 'Your Cart is Empty :(' : 'Your Cart'}
                </h1>
                <div className="items">
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
                                    <div className="buttons-for-items">
                                        <Button onClick={()=> updateItemQuantity(item.id, item.quantity - 1)} className="btn-change">-</Button>
                                        <Button variant="danger" onClick={()=> removeItem(item.id)} className="btn-remove">Remove Item</Button>
                                        <Button onClick={()=> updateItemQuantity(item.id, item.quantity + 1)} className="btn-change">+</Button>
                                    </div>
                                        </div>
                                </div>
                            )
                        })}
                    {!isEmpty &&
                    <div className="center-items">
                            <h4 className="total-cart">Total Price: {cartTotal.toFixed(2)} LEI</h4>
                        <div className="clear-cart-div">
                        <img className="sad-cart" src={sadCart}/>
                            <Button
                                    className="clear-btn"
                                    onClick={()=> emptyCart()}
                            >
                                Clear Cart
                            </Button>
                        </div>
                    </div>
                   }
                </div>
                <div className="container">
                    <p className="cart-header">Please follow the steps to complete your order</p>
                    <StepProgressBar step={step}/>
                    <div className="cart-products">
                        <br/>
                      <div className="products-in-cart">
                         <MutliStepForm step={step} list = {form} onPageUpdate={onPageAnswerUpdate} pagesAnswers={pagesAnswers}/>
                          <div className="steps-buttons">
                              <div className="button-prev">
                                  <button onClick={prevStep} className="buttons-cart">
                                      <img className="img-control" src={leftArrow}/>
                                  </button>
                              </div>
                              <div className="button-next">
                                  <button onClick={nextStep} className="buttons-cart">
                                      <img className="img-control" src={rightArrow}/>
                                  </button>
                              </div>
                          </div>
                      </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}



export default Cart