import React from 'react';
import { useCart } from 'react-use-cart';
import "./Page.css"

const ProductCard = (props) => {
    let { image, price, title} = props.data;
    const { addItem } = useCart();

    const addToCart = () =>{
        addItem(props.data);
    }
    return (
        <div>
            <div className="shop-item-list">
                   <div className="shop-item">
                        <h3 className="title-item">{title}</h3>
                        <img className="img-item" src={image} />
                        <h3>{price} LEI</h3>
                        <button onClick={() => addToCart()} className="icon-item" >
                            <a  className="icon-link">
                                Add to cart
                            </a>
                        </button>
                        <br/>
                    </div>
            </div>
        </div>
    );
};

export default ProductCard;