import ProductImages from './ProductImages';
import ProductDetails from './ProductDetails';

function Product({ id, name, price, description, gender, discount, imgUrl, handleAddProduct, className }) {
  
  return(
    <div className={className}>
      <ProductImages id={id} imgUrl={imgUrl} name={name} />
      <ProductDetails id={id} handleAddProduct={handleAddProduct} name={name} price={price} description={description} discount={discount} gender={gender} imgUrl={imgUrl} />
    </div>
  )
}

export default Product;