import React, {useEffect, useState} from "react";
import axios from 'axios'
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import "./Page.css"
import ProductCard from "./CartItems";
import SearchFilter from 'react-filter-search';

const Page = () => {
    const [searchInput, setSearchInput] = useState('');
    const [productData, setProductData] = useState([]);

    async function getResponse(){
        const res = await fetch('https://fakestoreapi.com/products')
            .then(res=> res.json());
        setProductData(await res);
    }

    useEffect(()=>{
        getResponse();
    },[]);

    return (
        <div>
        <div className="search-bar-text">
                    <p className="search-bar-p">Search products</p>
                    <InputGroup size="lg" className="search-bar mb-lg-3">
                        <FormControl
                            className="search-bar-box"
                            aria-label="Large"
                            placeholder="Search"
                            value={searchInput}
                            onChange={(e)=> setSearchInput(e.target.value)}
                        />
                    </InputGroup>
        </div>
            <div >
                <SearchFilter
                    value={searchInput}
                    data={productData}
                    renderResults={results =>(<div className="items">
                            {results.map((item, i)=>(
                                <ProductCard data={item} key={i} />
                            ))}
                        </div>
                    )}

                />
            </div>

        </div>
    );
};

export default Page;