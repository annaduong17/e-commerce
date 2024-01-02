import { useContext } from 'react';
import ShoesContext from '../context/shoes';

function ProductQuantity() {
  const { quantity, addQuantity, subtractQuantity } = useContext(ShoesContext);
  return(
    <div className="quantity-container">
      <button onClick={subtractQuantity} className="minus-btn">
        <img src="/images/icons/icon-minus.svg" alt="minus icon" />
      </button>
      <span>{quantity}</span>
      <button onClick={addQuantity} className="plus-btn">
        <img src="/images/icons/icon-plus.svg" alt="plus icon" />
      </button>
    </div>
  )
}

export default ProductQuantity;