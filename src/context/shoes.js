import { createContext, useEffect, useState, useCallback } from 'react';
import Data from '../data/data.json';

const ShoesContext = createContext();

function Provider({ children }) {
  const [ products, setProducts ] = useState([]);
  const [ quantities, setQuantities ] = useState();
  const [ cart, setCart ] = useState([]);
  const [ showModal, setShowModal ] = useState(false);

  const handleDeleteProduct = (id) => {
    const updatedCart = cart.filter(product => {
      return product.id !== id;
    });

    setCart(updatedCart);
  }

  const handleAddProduct = (id, name, price, imgUrls) => {
    if (quantities[id] === 0) {
      return;
    }

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
            img: imgUrls[0],
            cartQuantity: quantities[id]
          }
        ];
      }
    });

    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + quantities[id] || 1,
    }));  
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
    handleDeleteProduct,
    discount: 50
  }

  useEffect(() => {
    setProducts(Data);
  }, []);

  useEffect(() => {
    initializeQuantities();
  }, [cart, initializeQuantities]);


  return(
    <ShoesContext.Provider value={value}>
      {children}
    </ShoesContext.Provider>
  )
}

export { Provider };
export default ShoesContext;