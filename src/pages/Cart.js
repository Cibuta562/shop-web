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
import { BsCartCheck, BsCartX} from 'react-icons/bs';

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
            <Container className="py-4 mt-5">
                <h1 className="cart-top" >
                    {isEmpty? 'Your Cart is Empty' : 'The Cart'}
                </h1>
                <div>
                        {items.map((item, index)=>{
                            return(
                                <div key={index}>
                                        <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                            justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ padding: '.5rem'}}>
                                                <img src={item.image} style={{ width: '4rem'}} alt={item.title} />
                                            </div>
                                        </div>
                                        <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis'}}>
                                            {item.title}
                                        </h6>
                                    {item.price} LEI
                                    Quantity ({item.quantity})
                                        <Button onClick={()=> updateItemQuantity(item.id, item.quantity - 1)} className="ms-2">-</Button>
                                        <Button onClick={()=> updateItemQuantity(item.id, item.quantity + 1)} className="ms-2">+</Button>
                                        <Button variant="danger" onClick={()=> removeItem(item.id)} className="ms-2">Remove Item</Button>
                                </div>
                            )
                        })}
                    {!isEmpty &&
                    <div>
                            <h4>Total Price: {cartTotal} LEI</h4>
                            <Button variant="danger"
                                    className="m-2"
                                    onClick={()=> emptyCart()}
                            >
                                <BsCartX size="1.7rem" />
                                Clear Cart
                            </Button>
                    </div>
                   }
                </div>
            </Container>
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