import ProductImages from './ProductImages';
import ProductDetails from './ProductDetails';

function Product({ id, name, price, description, gender, discount, imgUrls, handleAddProduct, className }) {
  
  return(
    <div className={className}>
      <ProductImages id={id} imgUrls={imgUrls} name={name} />
      <ProductDetails id={id} handleAddProduct={handleAddProduct} name={name} price={price} description={description} discount={discount} gender={gender} imgUrls={imgUrls} />
    </div>
  )
}

export default Product;