import { NavLink } from 'react-router-dom';
import { Nav, NavbarLink } from './Menu.styled';

const Menu = () => {
  return (
    <Nav>
      <NavbarLink as={NavLink} to="/catalogue">
        Catalogue
      </NavbarLink>
      <NavbarLink as={NavLink} to="/favorite">
        Favourites
      </NavbarLink>
    </Nav>
  );
};

export default Menu;
