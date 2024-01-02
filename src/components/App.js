import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Collections from './Collections';
import Men from './Men';
import Women from './Women';
import About from './About';
import Contact from './Contact';
import Cart from './Cart';
import UserProfile from './UserProfile';

function App() {
  

  return(
    <BrowserRouter>
      <div className='app'>
        <Navbar />

        <Routes>
          <Route path='/' element={<Collections />} />
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