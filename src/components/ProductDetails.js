import ProductQuantity from './ProductQuantity';
import Button from './Button';

function ProductDetails({ id, name, description, price, discount, imgUrls, handleAddProduct }) {
  const discountedPrice = price * (discount/100);
  const isWholeNumber = (number) => {
    return number % 1 === 0;
  }

  return(
    <div className='details'>
      <p className='brand'>SNEAKER COMPANY</p>
      <h1 className='name'>{name}</h1>
      <p className='description'>{description}</p>
      <div className='price-discount-container'>
        <span className='discounted-price'>${discountedPrice}{isWholeNumber(discountedPrice) && '.00'}</span>
        <span className='discount'>{discount}%</span>
      </div>
      <p className='price'>${price}{isWholeNumber(price) && '.00'}</p>
      <div className='add-quantity-container'>
        <ProductQuantity id={id} />
        <Button id={id} onClick={() => handleAddProduct(id, name, price, imgUrls)} img={'/images/icons/icon-cart-white.svg'}className="orange-btn">Add to cart</Button>
      </div>
    </div>
  )
}

export default ProductDetails;