import { useContext, useState, useEffect } from 'react';
import CartItem from './CartItem';
import Button from './Button';
import ShoesContext from '../context/shoes';

function Cart() {
  const [ showButton, setShowButton ] = useState(false);
  const { cart, discount } = useContext(ShoesContext);

  useEffect(() => {
    if (cart.length) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [cart]);
  
  const renderedItems = cart.map((product) => {
    
    return(
      <CartItem key={product.id} id={product.id} name={product.name} price={product.price} imgUrl={product.img} discount={discount} cartQuantity={product.cartQuantity} />
    )
  })


  return(
    <div className='cart'>
      <h1>Cart</h1>
      {renderedItems}
      {showButton && <Button className="orange-btn checkout">Checkout</Button>}
    </div>
  )
}

export default Cart;