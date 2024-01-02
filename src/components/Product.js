import ProductImages from './ProductImages';
import ProductDetails from './ProductDetails';

function Product({ name, price, description, gender, discount, imgUrl, handleAddProduct, className }) {
  return(
    <div className={className}>
      <ProductImages imgUrl={imgUrl} name={name} />
      <ProductDetails handleAddProduct={handleAddProduct} name={name} price={price} description={description} discount={discount} gender={gender} imgUrl={imgUrl} />
    </div>
  )
}

export default Product;