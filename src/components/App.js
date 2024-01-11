import { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Products from './Products';
import Men from './Men';
import Women from './Women';
import About from './About';
import Contact from './Contact';
import Cart from './Cart';
import UserProfile from './UserProfile';
import MobileNavbar from './MobileNavbar';
import ShoesContext from '../context/shoes';

function App() {
  const { isMobile, updateImages, showCart, setShowCart } = useContext(ShoesContext);

  useEffect(() => {
    window.addEventListener('resize', updateImages);

    return () => {
      window.removeEventListener('resize', updateImages);
    };
  });

  useEffect(() => {
    const hideCart = (event) => {
      const isCheckoutBtnClicked = event.target.classList.contains('checkout') || event.target.closest('.checkout');
      const isDeleteButtonClicked = event.target.classList.contains('delete-btn') || event.target.closest('.delete-btn');
  
      if (!isCheckoutBtnClicked && !isDeleteButtonClicked) {
        setShowCart(false);
      }
    };
  
    window.addEventListener('click', hideCart, true);
  
    return () => {
      window.removeEventListener('click', hideCart, true);
    };
  }, [setShowCart]);
  
  return(
    <BrowserRouter>
      <div className='app'>
        {isMobile ? <MobileNavbar /> : <Navbar />}
        {showCart && <Cart />}

        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<UserProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;