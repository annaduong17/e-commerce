import { createContext, useEffect, useState, useCallback } from 'react';
import Data from '../data/data.json';

const ShoesContext = createContext();

function Provider({ children }) {
  const [ products, setProducts ] = useState([]);
  const [ quantities, setQuantities ] = useState();
  const [ cart, setCart ] = useState([]);

  const handleAddProduct = (id, name, price, img) => {
    
    setCart(prevCart => {
      const existingProductIndex = prevCart.findIndex(product => product.id === id);
    
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].cartQuantity += quantities[id] || 1;
    
        return updatedCart;
      } else {
        return [...prevCart, 
          { 
            id, 
            name, 
            price, 
            img,
            cartQuantity: quantities[id]
          }
        ];
      }
    });

    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + quantities[id] || 1,
    }));  

    initializeQuantities();
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