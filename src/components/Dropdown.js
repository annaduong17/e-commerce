import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import ShoesContext from '../context/shoes';

function Dropdown() {
  const { closeDropdown } = useContext(ShoesContext);

  return(
    <div className='dropdown-container'>
      <div className='dropdown'>
        <button onClick={closeDropdown}>
          <img src="/images/icons/icon-close.svg" alt="" />
        </button>
        <ul onClick={closeDropdown}>
          <li>
            <NavLink to="/">Collections</NavLink>
          </li>
          <li>
            <NavLink to="/men">Men</NavLink>
          </li>
          <li>
            <NavLink to="/women" >Women</NavLink>
          </li>
          <li>
            <NavLink to="/about" >About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" >Contact</NavLink>
          </li>
          <li>
            <NavLink to="/profile" >User Profile</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Dropdown;