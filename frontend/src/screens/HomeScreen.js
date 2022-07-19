import React from 'react'

import MainCardProduct from '../components/MainCardProduct'

import data from '../data';

export default function HomeScreen() {
    return (
        <div className="row center">
        {
          data.products.map(product => (
            <MainCardProduct key={product._id} product={product} showLink={true}/>
          ))
        }         
      </div>
  )
}
