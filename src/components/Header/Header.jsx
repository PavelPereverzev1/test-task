import { Container } from './Header.styled.js';
import Logo from './Logo/Logo.jsx';
import Menu from './Menu/Menu.jsx';
import AuthNavigation from './AuthNav/AuthNavigation.jsx';

const Header = () => {
  return (
    <Container>
      <Logo />
      <Menu />
      <AuthNavigation />
    </Container>
  );
};

export default Header;
