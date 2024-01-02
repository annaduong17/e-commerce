import { useContext } from 'react';
import CartItem from './CartItem';
import Button from './Button';
import ShoesContext from '../context/shoes';

function Cart() {
  const { cart, discount } = useContext(ShoesContext);

  const renderedItems = cart.map((product, index) => {
    console.log(product);
    return(
      <CartItem key={index} name={product.name} price={product.price} imgUrl={product.img} discount={discount} />
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