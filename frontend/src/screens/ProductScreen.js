import React from 'react';
import ErrorProdutoBuscado from '../components/ErrorProdutoBuscado';
import MainRating from '../components/MainRating';

import { Link, useParams } from 'react-router-dom';

import data from '../data';

import './ProductScreen.css';

export default function ProductScreen() {

    const {id} = useParams();
    const productSearched = data.products.find(x => x._id === id);

    if (!productSearched)
    {
        return <ErrorProdutoBuscado />
    }
    return (
        <div>
            <Link className="pleft-1rem" to="/">Back to result</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={productSearched.image} alt={productSearched.name}/>
                </div>
                <div className="col-1 pleft-1rem">
                    <ul>
                        <li>
                            <h1>{productSearched.name}</h1>
                        </li>
                        <li>
                            <MainRating rating={productSearched.rating} numReviews={productSearched.numReviews}/>
                        </li>
                        <li>
                            Price : {Intl.NumberFormat("en-US", 
                                {style: "currency", 
                                currency: "USD"}).format(Number(productSearched.price)) === '$0.00'? 
                                'Sem informação'
                                : Intl.NumberFormat("en-US", 
                                {style: "currency", 
                                currency: "USD"}).format(Number(productSearched.price))}
                        </li>
                        <li> Description:
                            <p>{productSearched.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body" >
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="card-price">
                                        {Intl.NumberFormat("en-US", {
                                            style: "currency", 
                                            currency: "USD"}).format(Number(productSearched.price))
                                        }
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div>
                                        {productSearched.countInStock > 0 ? (
                                            <span className="success">In Stock</span>
                                        ) : (
                                            <span className="error">Unavailable</span>
                                        )}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
  )
}
