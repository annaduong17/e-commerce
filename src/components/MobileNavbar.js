import { useContext } from 'react';
import ShoesContext from '../context/shoes';
import Dropdown from './Dropdown';
import NavbarRight from './NavbarRight';

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
      <NavbarRight />
      {showDropdown && <Dropdown />}
    </div>
  )
}

export default MobileNavbar;