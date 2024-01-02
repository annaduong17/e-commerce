import Data from '../data/data.json';
import Product from './Product';

function Women() {
  const womenShoes = Data.filter(item => {
    return item.gender === 'women';
  });

  const renderedItems = womenShoes.map(item => {
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
    <div>{renderedItems}</div>
  )
}

export default Women;