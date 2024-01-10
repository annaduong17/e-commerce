import ProductQuantity from './ProductQuantity';
import Button from './Button';

function ProductDetails({ id, name, description, price, discount, imgUrls, handleAddProduct }) {

  const discountedPrice = price * (discount/100);
  
  const isWholeNumber = (number) => {
    return number % 1 === 0;
  }

  const countDecimals = (number) => {
    if (Math.floor(number) === number) return 0;
    return number.toString().split(".")[1].length || 0;
  }

  const finalPrice = (price) => {
    if (isWholeNumber(price)) {
      return `${price}.00`;
    } else {
      if (countDecimals(price) === 1) {
        return `${price}0`;
      } else if (countDecimals(price) === 2) {
        return `${price}`;
      }
    }
  }

  return(
    <div className='details'>
      <p className='brand'>SNEAKER COMPANY</p>
      <h1 className='name'>{name}</h1>
      <p className='description'>{description}</p>
      <div className='price-container'>
        <div className='pricing'>
          <div className='price-discount-container'>
            <span className='discounted-price'>${finalPrice(discountedPrice)}</span>
            <span className='discount'>{discount}%</span>
          </div>
          <p className='price'>${finalPrice(price)}</p>
        </div>
        <div className='add-quantity-container'>
          <ProductQuantity id={id} />
          <Button id={id} onClick={() => handleAddProduct(id, name, price, imgUrls)} img={'/images/icons/icon-cart-white.svg'}className="orange-btn">Add to cart</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;