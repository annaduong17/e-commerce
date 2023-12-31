import ProductQuantity from './ProductQuantity';
import Button from './Button';

function ProductDetails({ name, description, price, discount }) {
  const discountedPrice = price * (discount/100);

  return(
    <div>
      <p>SNEAKER COMPANY</p>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{discountedPrice}</p>
      <span>{discount}%</span>
      <p>{price}</p>
      <ProductQuantity />
      <Button>Add to cart</Button>
    </div>
  )
}

export default ProductDetails;