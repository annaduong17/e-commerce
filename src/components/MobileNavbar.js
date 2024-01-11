import { useContext } from 'react';
import ShoesContext from '../context/shoes';
import Dropdown from './Dropdown';

function MobileNavbar() {
  const { showDropdown, toggleDropdown } = useContext(ShoesContext);

  return(
    <div className='mobile-navbar'>
      <div className='mobile-navbar--left'>
      <button onClick={toggleDropdown}>
        <img src="/images/icons/icon-menu.svg" alt="dropdown menu icon" />
      </button>
        <img className='logo' src="/images/logo.svg" alt="logo" />
      </div>
      <div className='mobile-navbar--right'>
        <img className='cart-icon' src="/images/icons/icon-cart.svg" alt="" />
        <img className='avatar' src="/images/image-avatar.png" alt="" />
      </div>
      {showDropdown && <Dropdown />}
    </div>
  )
}

export default MobileNavbar;