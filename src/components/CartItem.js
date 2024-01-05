import { useContext } from 'react';
import ShoesContext from '../context/shoes';

function CartItem({ id, name, price, imgUrl, discount, cartQuantity }) {

  const { handleDeleteProduct } = useContext(ShoesContext);
  
  const discountedPrice = price * discount / 100;
  
  return(
    <div className="cart-item">
      <img className="cart-size" src={`/images/products/${imgUrl}`} alt="shoes" />
      <div>
        <p>{name}</p>
        <p>{discountedPrice} x {cartQuantity} {discountedPrice * cartQuantity}</p>
      </div>
      <button>Edit</button>
      <button onClick={() => handleDeleteProduct(id)}>
        <img src="/images/icons/icon-delete.svg" alt="delete icon" />
      </button>
    </div>
  )
}

export default CartItem;