import React from 'react';

import MainRating from './MainRating.js';

import './MainCardProduct.css';
import { Link } from 'react-router-dom';

export default function MainCardProduct(props) 
{
    const { product, showLink = true } = props;

    return (
        <Link to={ showLink ? `/product/${product._id}`: '#'}>
            <div key={product._id} className="main-cardProduct">
                <a href="product.html" >
                    <img className="medium" src={product.image} alt={product.description} />
                </a>
                <div className="card-body" >
                    <a href="product.html">
                        <h2 className="noPadding" >{product.name}</h2>
                    </a>
                    <MainRating rating={product.rating} numReviews={product.numReviews} />
                    <div className="card-price" >{product.price}</div>
                </div>
             </div>
        </Link>
        
    );
}