function CartItem({ name, price, imgUrl }) {
  return(
    <div className="cart-item">
      <img className="cart-size" src={imgUrl} alt="shoes" />
      <div>
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <img src="/images/icons/icon-delete.svg" alt="delete icon" />
    </div>
  )
}

export default CartItem;