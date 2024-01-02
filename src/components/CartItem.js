function CartItem({ name, price, imgUrl, discount, quantity }) {
  const discountedPrice = price * discount / 100;
  
  return(
    <div className="cart-item">
      <img className="cart-size" src={imgUrl} alt="shoes" />
      <div>
        <p>{name}</p>
        <p>{discountedPrice} x {quantity} {discountedPrice * quantity}</p>
      </div>
      <img src="/images/icons/icon-delete.svg" alt="delete icon" />
    </div>
  )
}

export default CartItem;