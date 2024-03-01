
import './App.css';

import React from 'react';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { persist, store } from './store/store';
import CartItems from './components/cart';
import ProductList from './components/addtocart';
import AddToCart from './components/addtocart';


function App() {
  
      return (
        <>
        <Provider store={store}>
          <PersistGate persistor={persist} loading={null}>
          <div>
            <h1>Simple Shopping Cart</h1>
           <AddToCart/>
            <CartItems/>
          </div>
          </PersistGate>
        </Provider>
        </>
      );
    };
    
    export default App;
    


