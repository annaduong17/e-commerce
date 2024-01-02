import Data from '../data/data.json';
import Product from './Product';

function Men() {
  const menShoes = Data.filter(item => {
    return item.gender === 'men';
  })

  const renderedItems = menShoes.map(item => {
    return(
      <Product 
        key={item.id}
        className="product-container"
        imgUrl={`/images/products/${item.imageFile}`}
        name={item.name}
        description={item.description}
        price={item.price}
        discount={50}
      />
    )
  })

  console.log(renderedItems);
  return(
    <div className='products-container'>
      {renderedItems}
    </div>
  )
}

export default Men;