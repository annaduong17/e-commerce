function CartItem({ name, price, imgUrl, discount, cartQuantity }) {
  
  const discountedPrice = price * discount / 100;
  
  return(
    <div className="cart-item">
      <img className="cart-size" src={imgUrl} alt="shoes" />
      <div>
        <p>{name}</p>
        <p>{discountedPrice} x {cartQuantity} {discountedPrice * cartQuantity}</p>
      </div>
      <button>
        <img src="/images/icons/icon-delete.svg" alt="delete icon" />
      </button>
    </div>
  )
}

export default CartItem;