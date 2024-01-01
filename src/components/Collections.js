import Data from '../data/data.json';
import Product from './Product';

function Collection() {
  const renderedItems = Data.map(item => {

    console.log(item.imageFile);

    return(
      <Product 
        key={item.id}
        imgUrl={`/images/products/${item.imageFile}`}
        name={item.name}
        description={item.description}
        price={item.price}
        discount={50}
      />
    )
  })

  return(
    <div>
      {renderedItems}
    </div>
  )
}

export default Collection;