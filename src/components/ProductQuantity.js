import { useContext } from 'react';
import ShoesContext from '../context/shoes';

function ProductQuantity({ id }) {
  const { quantities, handleQuantityChange } = useContext(ShoesContext);

  const handleIncrement = () => {
    handleQuantityChange(id, quantities[id] + 1);
  };

  const handleDecrement = () => {
    handleQuantityChange(id, Math.max(0, quantities[id] - 1));
  };
  
  return(
    <div className="quantity-container">
      <button onClick={handleDecrement} className="minus-btn">
        <img src="/images/icons/icon-minus.svg" alt="minus icon" />
      </button>
      <span>{quantities[id]}</span>
      <button onClick={handleIncrement} className="plus-btn">
        <img src="/images/icons/icon-plus.svg" alt="plus icon" />
      </button>
    </div>
  )
}

export default ProductQuantity;