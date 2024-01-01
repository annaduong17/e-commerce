import ProductQuantity from './ProductQuantity';
import Button from './Button';

function ProductDetails({ name, description, price, discount }) {
  const discountedPrice = price * (discount/100);

  return(
    <div className='details'>
      <p className='brand'>SNEAKER COMPANY</p>
      <h1 className='name'>{name}</h1>
      <p className='description'>{description}</p>
      <div className='price-discount-container'>
        <span className='discounted-price'>${discountedPrice}.00</span>
        <span className='discount'>{discount}%</span>
      </div>
      <p className='price'>${price}.00</p>
      <ProductQuantity />
      <Button>Add to cart</Button>
    </div>
  )
}

export default ProductDetails;