import { createContext, useEffect, useState } from 'react';
import Data from '../data/data.json';

const ShoesContext = createContext();

function Provider({ children }) {
  const [ products, setProducts ] = useState([]);
  const [ quantities, setQuantities ] = useState({id: '', quantity: 0});

  const [ selectedQuantity, setSelectedQuantity ] = useState(1);
  const [ cart, setCart ] = useState([]);

  const handleAddProduct = (name, price, img) => {
    setCart((prevCart) => [...prevCart, {name, price, img}]
    )
  }



  const value = {
    products, 
    quantities,
    selectedQuantity,
    cart,
    handleAddProduct,
    discount: 50
  }

  useEffect(() => {
    setProducts(Data);
  }, [products]);

  return(
    <ShoesContext.Provider value={value}>
      {children}
    </ShoesContext.Provider>
  )
}

export { Provider };
export default ShoesContext;