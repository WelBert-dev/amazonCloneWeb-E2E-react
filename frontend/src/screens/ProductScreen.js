import React from 'react';
import ErrorProdutoBuscado from '../components/ErrorProdutoBuscado';
import MainCardProduct from '../components/MainCardProduct';

import { useParams } from 'react-router-dom';

import data from '../data';

export default function ProductScreen() {

    const {id} = useParams();
    const produtoBuscado = data.products.find(x => x._id == id);
    return (
        <div className="productScreen-container">
        {
            produtoBuscado ?
                <MainCardProduct product={produtoBuscado} showLink={false} />
            :
                <ErrorProdutoBuscado />
        }
        </div>
  )
}
