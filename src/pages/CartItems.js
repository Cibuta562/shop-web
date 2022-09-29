import React, {useState} from 'react';
import { useCart } from 'react-use-cart';
import {Row, Col, Container} from "react-bootstrap";
import Menu from "./Menu";
import "./Page.css"
import {str} from "./Menu"


const ProductCard = (props) => {
    let { image, price, title} = props.data;
    const { addItem } = useCart();



    const addToCart = () =>{
        addItem(props.data);
    }



    return (
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
    );
};

export default ProductCard;