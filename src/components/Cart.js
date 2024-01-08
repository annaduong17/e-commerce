import { useContext, useState, useEffect } from 'react';
import CartItem from './CartItem';
import Button from './Button';
import ShoesContext from '../context/shoes';

function Cart() {
  const [ showItem, setShowItem ] = useState(false);
  const { cart, discount } = useContext(ShoesContext);

  useEffect(() => {
    if (cart.length) {
      setShowItem(true);
    } else {
      setShowItem(false);
    }
  }, [cart]);
  
  const renderedItems = cart.map((product) => {
    
    return(
      <CartItem key={product.id} id={product.id} name={product.name} price={product.price} imgUrl={product.img} discount={discount} cartQuantity={product.cartQuantity} />
    )
  })


  return(
    <div className='cart'>
      <div>
        <h1>Cart</h1>
      </div>
      <div className='cart-content'>
        {renderedItems}
        <Button className="orange-btn checkout">Checkout</Button>
      </div>
    </div>
  )
}

export default Cart;