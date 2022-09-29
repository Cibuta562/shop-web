import {Form} from "react-bootstrap"
import "./Cart.css"
import {useState} from "react";
import {Link} from "react-router-dom";
import {useCart} from "react-use-cart";

export const FormItem = ({item, onChange, answer}) => {

    const {
        emptyCart
    } = useCart();

    const [currentValue, setCurrentValue] = useState(answer || null);
    switch (item.type) {
        case 'text':
        return (
            <>
            <Form.Label>{item.label}</Form.Label>
            <Form.Control
             type="text"
             id={item.label}
             onChange={(e) => onChange(e.target.value, item.value)}
             value={currentValue}
             />
             </>
        )
        break;

        case 'password':
            return (
                <>
                    <Form.Label>{item.label}</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword"
                        onChange={(e) => onChange(e.target.value, item.value)}
                        value={currentValue}
                    />
                </>
            )
            break;

        case 'information':
            return (
                <p>{item.label}</p>
            )
            break;

        case 'button':
            return (
                <button className="button-submit">
                    <Link to="/confirm" style={{textDecoration: 'none'}}>
                    {item.label}
                    </Link>
                </button>
            )
            break;

    }

    return (
        <></>
    )
}