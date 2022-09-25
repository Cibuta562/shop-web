import "./Cart.css"
import Menu from "./Menu";
import leftArrow from "../assets/left.png";
import rightArrow from "../assets/arrow-right.png";
import StepProgressBar from "./ProgressBar";
import {useState} from "react";
import {form} from "../Form"
import {MutliStepForm} from "./MultiStepForm";
import Footer from "./Footer";

function Cart () {

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
                <div className="container">
                    <StepProgressBar step={step}/>
                    <h1 className="cart-h">Your Cart</h1>
                    <p className="cart-header">Please follow the steps to complete your order</p>
                    <div className="cart-products">
                        <br/>
                      <div className="products-in-cart">
                         <MutliStepForm step={step} list = {form} onPageUpdate={onPageAnswerUpdate} pagesAnswers={pagesAnswers}/>
                      </div>
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
            <Footer/>
        </div>
    )
}



export default Cart