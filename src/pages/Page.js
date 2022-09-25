import React, {useEffect, useState} from "react";
import axios from 'axios'
import "./Page.css"

function Page() {

    const [items, setItems] = useState([])

    useEffect( () => {

            axios.get('https://fakestoreapi.com/products')
                .then( res => {
                    console.log(res)
                    setItems(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        })

    return(
        <div>
            <div className="shop-item-list">
                {
                    items.map(item=> <div className="shop-item" key={item.id}>
                        <h3 className="title-item">{item.title}</h3>
                        <img className="img-item" src={item.image} alt="Image for: {item.id}"/>
                        <p>Rating: {item.rating.rate}</p>
                        <h3>{item.price} LEI</h3>
                        <button className="icon-item">
                            <a href="#" className="icon-link">
                                Add to cart
                            </a>
                            </button>
                        <br/>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Page


