import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { SiLoop } from 'react-icons/si';
import { BsInfo } from 'react-icons/bs';

import './Header.scss';

export const Header = (props) => {
  return (
    <header className="app-header">
      <NavLink
        className="flex align-center justify-center"
        exact
        to="/"
        activeClassName="active-nav"
      >
        <SiLoop className="icon" />
        <h1>Simon</h1>
      </NavLink>

      <ul className="navbar-header">
        <NavLink exact to="/" activeClassName="active-nav">
          <FaHome className="icon" />
        </NavLink>
        <NavLink to="/about" activeClassName="active-nav">
          <BsInfo className="icon" />
        </NavLink>
      </ul>
    </header>
  );
};
