import DeleteIcon from '../images/icons/icon-delete.svg';

function CartItem() {
  return(
    <div>
      <img src="" alt="shoes" />
      <div>
        <p>Summer Limited Edition Sneakers</p>
        <p>$125.00 x 3 $375</p>
      </div>
      <img src={DeleteIcon} alt="delete icon" />
    </div>
  )
}

export default CartItem;