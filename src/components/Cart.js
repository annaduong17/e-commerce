import { useContext } from 'react';
import CartItem from './CartItem';
import Button from './Button';
import ShoesContext from '../context/shoes';

function Cart() {
  const { cart } = useContext(ShoesContext);

  const filteredItems = cart.filter(product => {
    return product.name;
  })

  console.log(filteredItems);

  const renderedItems = filteredItems.map((product, index) => {

    return(
      <CartItem key={index} name={product.name} price={product.price} imgUrl={product.img} />
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