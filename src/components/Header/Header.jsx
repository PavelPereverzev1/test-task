import { Container } from './Header.styled.js';
import Logo from './Logo/Logo.jsx';
import Menu from './Menu/Menu.jsx';

const Header = () => {
  return (
    <Container>
      <Logo />
      <Menu />
    </Container>
  );
};

export default Header;
