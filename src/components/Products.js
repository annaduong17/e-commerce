import { useContext } from 'react';
import ShoesContext from '../context/shoes';
import Product from './Product';

function Products() {
const { products, handleAddProduct } = useContext(ShoesContext);

if (!products) {
  return <p>Loading...</p>;
}

const renderedItems = products.map(product => {
  
  return(
    <Product 
      key={product.id} 
      className="product-container"
      name={product.name}
      price={product.price}
      description={product.description}
      gender={product.gender}
      discount={50}
      imgUrl={`/images/products/${product.imageFile}`}
      handleAddProduct={handleAddProduct}
    />
  )
})

  return(
    <div className='products-container'>
      {renderedItems}
    </div>
  )
}

export default Products;