import { useContext } from 'react';
import ShoesContext from '../context/shoes';

function CartItem({ id, name, price, imgUrl, discount, cartQuantity }) {

  const { handleDeleteProduct } = useContext(ShoesContext);
  
  const discountedPrice = price * discount / 100;
  
  return(
    <div className="cart-item">
      <div className="cart-item--left">
        <img className="cart-size" src={`/images/products/${imgUrl}`} alt="shoes" />
        <div className="cart-item-details">
          <p>{name}</p>
          <p>${discountedPrice} x {cartQuantity} <span className='item-total'>${discountedPrice * cartQuantity}</span></p>
        </div>
      </div>
      <button onClick={() => handleDeleteProduct(id)}>
        <img src="/images/icons/icon-delete.svg" alt="delete icon" />
      </button>
    </div>
  )
}

export default CartItem;