import { useState } from 'react'
import './App.css'

import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './components/data';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);



  // add function
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id == product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x)
      );
    }
  }

  return (
    <div className='App overflow-x-hidden flex flex-col
    w-full h-full'>
      <Header></Header>

      <div className='flex flex-row justify-between py-3
      w-full'>
        <Main onAdd={onAdd} products={products}></Main>
        <Basket
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems}></Basket>
      </div>

    </div>
  )
}

export default App
