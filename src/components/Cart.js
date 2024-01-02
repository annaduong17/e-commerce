import { useContext } from 'react';
import CartItem from './CartItem';
import Button from './Button';
import ShoesContext from '../context/shoes';

function Cart() {
  const { cart, discount, quantities } = useContext(ShoesContext);
  
  const renderedItems = cart.map((product) => {
    
    return(
      <CartItem id={product.id} name={product.name} price={product.price} imgUrl={product.img} discount={discount} quantity={quantities[product.id]} />
    )
  })

  return(
    <div>
      <h1>Cart</h1>
      {renderedItems}
      <Button className="orange-btn">Checkout</Button>
    </div>
  )
}

export default Cart;