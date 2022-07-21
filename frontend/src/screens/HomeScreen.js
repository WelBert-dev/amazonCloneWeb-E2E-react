import React, { useEffect, useState } from 'react';
import axios from 'axios';

import MainCardProduct from '../components/MainCardProduct';

export default function HomeScreen() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const { data } = await axios.get("/api/products");
        setProducts(data);
      };
      fetchData();
    }, []);

    return (
        <div className="row center">
        {
          products.map(product => (
            <MainCardProduct key={product._id} product={product} showLink={true}/>
          ))
        }         
      </div>
  )
}
