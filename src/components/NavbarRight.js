import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ShoesContext from '../context/shoes';

function NavbarRight() {
  const { cart, handleCartHover } = useContext(ShoesContext);

  const numOfItems = cart.reduce((acc, curr) => {
    acc += curr.cartQuantity;
    return acc;
  }, 0);

  return(
    <div className='navlinks navlinks--right'>
          <li className='navlink cart-icon-container'>
            <button onMouseEnter={handleCartHover}>
              {numOfItems > 0 && <span>{numOfItems}</span>}
              <img className='cart-icon' src="/images/icons/icon-cart.svg" alt="cart icon" />
            </button>
          </li>
          <li className='navlink profile'>
            <NavLink to="/profile">
              <img className='avatar' src="/images/image-avatar.png"alt="avatar" />
            </NavLink>
          </li>
        </div>
  )
}

export default NavbarRight;