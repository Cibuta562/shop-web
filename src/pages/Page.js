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
            <h1 className="shop-title">
                Noft Store
            </h1>
            <div className="shop-item-list">
                {
                    items.map(item=> <div className="shop-item" key={item.id}>
                        <h3 className="title-item">{item.title}</h3>
                        <p className="item-description">
                            <p className="center-item-description">{item.description}</p>
                        </p>
                        <img className="img-item" src={item.image} alt="Image for: {item.id}"/>
                        <p className="item-category">{item.category}</p>
                        <p>Rating: {item.rating.rate} Count: {item.rating.count}</p>
                        <h3>{item.price} LEI</h3>
                        <br/>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Page


