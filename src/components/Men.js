import { useContext } from 'react';
import ShoesContext from '../context/shoes';
import Data from '../data/data.json';
import Product from './Product';

function Men() {
  const { handleAddProduct } = useContext(ShoesContext);

  const menShoes = Data.filter(product => {
    return product.gender === 'men';
  })

  const renderedItems = menShoes.map(product => {
    return(
      <Product 
        id={product.id}
        className="product-container"
        imgUrls={product.imageFiles}
        name={product.name}
        description={product.description}
        price={product.price}
        discount={50}
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

export default Men;