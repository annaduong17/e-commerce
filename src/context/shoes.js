import { createContext, useState } from 'react';

const ShoesContext = createContext();

function Provider({ children }) {
  const [ quantity, setQuantity ] = useState(0);

  const addQuantity = (e) => {
    setQuantity(prev => prev + 1);
  }

  const subtractQuantity = (e) => {
    setQuantity(prev => prev - 1);
  }

  const value = {
    quantity,
    addQuantity,
    subtractQuantity,
  }

  return(
    <ShoesContext.Provider value={value}>
      {children}
    </ShoesContext.Provider>
  )
}

export { Provider };
export default ShoesContext;