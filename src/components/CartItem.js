function CartItem({ name, price, imgUrl, discount }) {
  console.log(price, discount);
  const discountedPrice = price * discount / 100;
  console.log(discountedPrice);
  return(
    <div className="cart-item">
      <img className="cart-size" src={imgUrl} alt="shoes" />
      <div>
        <p>{name}</p>
        <p>{discountedPrice} x quantity = total</p>
      </div>
      <img src="/images/icons/icon-delete.svg" alt="delete icon" />
    </div>
  )
}

export default CartItem;