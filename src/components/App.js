import Data from '../data/data.json';
import Navbar from './Navbar';
import Product from './Product';

function App() {
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
      <Navbar />
      {renderedItems}
    </div>
  )
}

export default App;