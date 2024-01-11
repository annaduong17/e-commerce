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
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className='mobile-navbar--right'>
        <img src="/images/icons/icon-cart.svg" alt="" />
        <img src="/images/image-avatar.png" alt="" />
      </div>
      {showDropdown && <Dropdown />}
    </div>
  )
}

export default MobileNavbar;