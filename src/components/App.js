import { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Products from './Products';
import Men from './Men';
import Women from './Women';
import About from './About';
import Contact from './Contact';
import Cart from './Cart';
import UserProfile from './UserProfile';
import ShoesContext from '../context/shoes';

function App() {
  const { showCart, setShowCart } = useContext(ShoesContext);

  useEffect(() => {
    const hideCart = window.addEventListener('scroll',  () => {
      setShowCart(false);
    });

    return () => {
      window.removeEventListener('scroll', hideCart);
    }
  })

  return(
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        {showCart && <Cart />}

        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='cart' element={<Cart />} />
          <Route path='profile' element={<UserProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;