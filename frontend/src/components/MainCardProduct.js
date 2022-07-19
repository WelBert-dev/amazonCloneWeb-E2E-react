import React from 'react';

import MainRating from './MainRating.js';

import './MainCardProduct.css';

export default function(props) 
{
    const { product } = props;

    return (
        <div key={product._id} className="main-cardProduct">
            <a href="product.html" >
                <img className="medium" src={product.image} alt={product.description} />
            </a>
            <div className="card-body" >
                <a href="product.html">
                    <h2 className="noPadding" >{product.name}</h2>
                </a>
                <MainRating rating={product.rating} numReview={product.numReviews} />
                <div className="card-price" >{product.price}</div>
            </div>
        </div>
    );
}