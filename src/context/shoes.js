import { createContext, useEffect, useState, useCallback } from 'react';
import Data from '../data/data.json';

const ShoesContext = createContext();

function Provider({ children }) {
  const [ products, setProducts ] = useState([]);
  const [ quantities, setQuantities ] = useState();
  const [ cart, setCart ] = useState([]);
  const [ showModals, setShowModals ] = useState();
  const [ selectedIndex, setSelectedIndex ] = useState(0);

  const handleModal = (id) => {
    setShowModals({...showModals, [id]: !showModals[id]});
  };

  const handleClick = (event, index) => {
    if (event.target.parentNode.parentNode.parentNode.className === "modal") {
      event.stopPropagation();
    }
    
    setSelectedIndex(index);
  };

  const handleNext = (event) => {
    event.stopPropagation();
    setSelectedIndex(prev => {
      return prev === products.length - 1 ? 0 : prev + 1;
    });
  }

  const handlePrevious = (event) => {
    event.stopPropagation();
    setSelectedIndex(prev => {
      return prev === 0 ? products.length - 1 : prev - 1;
    });
  }

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

  const initializeModals = useCallback(() => {
    const initialModals = {};
    for (const product of products) {
      initialModals[product.id] = false;
    };

    setShowModals(initialModals);
  }, [products]);

  const value = {
    products, 
    quantities,
    handleQuantityChange,
    cart,
    handleAddProduct,
    handleDeleteProduct,
    handleModal,
    showModals,
    handleClick,
    selectedIndex,
    handleNext,
    handlePrevious,
    discount: 50
  }

  useEffect(() => {
    setProducts(Data);
  }, []);

  useEffect(() => {
    initializeQuantities();
  }, [cart, initializeQuantities]);

  useEffect(() => {
    initializeModals();
  }, [initializeModals])


  return(
    <ShoesContext.Provider value={value}>
      {children}
    </ShoesContext.Provider>
  )
}

export { Provider };
export default ShoesContext;