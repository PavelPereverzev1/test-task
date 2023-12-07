import logo from '../../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import { Img, Container } from './Logo.styled';

const Logo = () => {
  return (
    <Container>
      <NavLink to="/">
        <Img src={logo} alt="LOGO" />
      </NavLink>
    </Container>
  );
};
export default Logo;
