import { NavLink } from 'react-router-dom';

function Navbar() {
  return(
    <nav className='navbar'>
      <div className='logo-container'>
        <NavLink to="/">
          <img className='logo' src="/images/logo.svg" alt="logo" />
        </NavLink>
      </div>

      <ul className="navlinks">
        <div className='navlinks--left'>
          <li className='navlink'>
            <NavLink to="/" className={({isActive}) => isActive ? "nav-active" : ""}>Collections</NavLink>
          </li>
          <li className='navlink'>
            <NavLink to="/men" className={({isActive}) => isActive ? "nav-active" : ""}>Men</NavLink>
          </li>
          <li className='navlink'>
            <NavLink to="/women" className={({isActive}) => isActive ? "nav-active" : ""}>Women</NavLink>
          </li>
          <li className='navlink'>
            <NavLink to="/about" className={({isActive}) => isActive ? "nav-active" : ""}>About</NavLink>
          </li>
          <li className='navlink'>
            <NavLink to="/contact" className={({isActive}) => isActive ? "nav-active" : ""}>Contact</NavLink>
          </li>
        </div>
        <div className='navlinks--right'>
          <li className='navlink'>
            <NavLink to="/cart">
              <img className='cart' src="/images/icons/icon-cart.svg" alt="cart icon" />
            </NavLink>
          </li>
          <li className='navlink'>
            <NavLink to="/profile">
              <img className='avatar' src="/images/image-avatar.png"alt="avatar" />
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar;