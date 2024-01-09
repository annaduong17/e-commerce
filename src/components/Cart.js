import { useContext, useState, useEffect } from 'react';
import CartItem from './CartItem';
import Button from './Button';
import ShoesContext from '../context/shoes';

function Cart() {
  const { cart, discount } = useContext(ShoesContext);
  
  const renderedItems = cart.map((product) => {
    
    return(
      <CartItem key={product.id} id={product.id} name={product.name} price={product.price} imgUrl={product.img} discount={discount} cartQuantity={product.cartQuantity} />
    )
  })


  return(
    <div className='cart-container'>
      <div className='cart'>
        <div>
          <h1>Cart</h1>
        </div>
        <div className='cart-content'>
          {renderedItems}
          <Button className="orange-btn checkout">Checkout</Button>
        </div>
      </div>
    </div>
  )
}

export default Cart;