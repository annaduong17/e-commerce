import ProductImages from './ProductImages';
import ProductDetails from './ProductDetails';

function Product({ imgUrl, name, description, price, discount }) {

  return(
    <div>
      <ProductImages imgUrl={imgUrl} name={name}/>
      <ProductDetails 
        name={name}
        description={description}
        price={price}
        discount={discount}
      />
    </div>
  )
}

export default Product;