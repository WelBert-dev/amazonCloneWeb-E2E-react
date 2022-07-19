import React from 'react';
import data from './data';

import MainCardProduct from './components/MainCardProduct';

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
                  <MainCardProduct key={product._id} product={product}/>
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
