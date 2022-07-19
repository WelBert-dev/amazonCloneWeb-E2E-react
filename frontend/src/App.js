import React from 'react';
import data from './data';

function App() {
  return (
    <div className="main-gridContainer">
        <header className="row">
            <div>
                <a className="brand" href="index.html">amazon</a>
            </div>
            <div>
                <a href="/cart">Carrinho</a>
                <a href="/signin">Logar</a>
            </div>
        </header>
        <main>
            <div className="row center">
              {
                data.products.map(product => (
                  <div key={product._id} className="main-cardProduct">
                    <a href="product.html" >
                        <img className="medium" src={product.image} alt={product.description} />
                    </a>
                    <div className="card-body" >
                        <a href="product.html">
                            <h2 className="noPadding" >{product.name}</h2>
                        </a>
                        <div className="card-rating" >
                          {
                            product.rating == 0 ? <span><i className="fa fa-star-o" ></i></span>
                            : product.rating == 0.5 ? <span><i className="fa fa-star-half-o" ></i></span>
                            : product.rating == 1 ? <span><i className="fa fa-star-o" ></i></span>
                            : product.rating >= 1 ? <span><i className="fa fa-star" ></i></span>

                            : product.rating == 1.5 ? <span><i className="fa fa-star-half-o" ></i></span>
                            : product.rating >= 2 ? <span><i className="fa fa-star" ></i></span>
                            : product.rating == 2 ? <span><i className="fa fa-star-o" ></i></span>
                            : product.rating == 2.5 ? <span><i className="fa fa-star-half-o" ></i></span>
                            : product.rating >= 3 ? <span><i className="fa fa-star" ></i></span>
                            : product.rating == 3 ? <span><i className="fa fa-star-o" ></i></span>
                            : product.rating == 3.5 ? <span><i className="fa fa-star-half-o" ></i></span>
                            : product.rating >= 4 ? <span><i className="fa fa-star" ></i></span>
                            : product.rating == 4 ? <span><i className="fa fa-star-o" ></i></span>
                            : product.rating == 4.5 ? <span><i className="fa fa-star-half-o" ></i></span>
                            : <span><i className="fa fa-star" ></i></span>
                          }

                        </div>
                        <div className="card-price" >{product.price}</div>
                    </div>
                 </div>
                ))
              }
                
            </div>
        </main>
        <footer className="row center" >
            Open License GPLv3
        </footer>
    </div>
  );
}

export default App;
