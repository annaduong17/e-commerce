import { createContext, useEffect, useState, useCallback } from 'react';
import Data from '../data/data.json';

const ShoesContext = createContext();

function Provider({ children }) {
  const [ products, setProducts ] = useState([]);
  const [ quantities, setQuantities ] = useState();
  const [ cart, setCart ] = useState([]);

  const handleAddProduct = (name, price, img) => {
    setCart((prevCart) => [...prevCart, {name, price, img}]
    )
  }

  const handleQuantityChange = (key, newQuantity) => {
    setQuantities(prev => ({
      ...prev,
      [key]: newQuantity
    }));
  }

  const initializeQuantities = useCallback(() => {
    const initialQuantities = {};
    for (const product of products) {
      console.log(product.id);
      initialQuantities[product.id] = 0;
    };
    setQuantities(initialQuantities);
  }, [products]);

  const value = {
    products, 
    quantities,
    handleQuantityChange,
    cart,
    handleAddProduct,
    discount: 50
  }

  useEffect(() => {
    setProducts(Data);
  }, []);

  useEffect(() => {
    initializeQuantities();
  }, [initializeQuantities]);


  return(
    <ShoesContext.Provider value={value}>
      {children}
    </ShoesContext.Provider>
  )
}

export { Provider };
export default ShoesContext;