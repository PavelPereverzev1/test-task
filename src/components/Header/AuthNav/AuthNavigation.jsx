import { AuthBtnLog, AuthBtnReg, Container } from './AuthNavigation.styled';

const AuthNavigation = () => {
  return (
    <Container>
      <AuthBtnLog>Login</AuthBtnLog>
      <AuthBtnReg>Registration</AuthBtnReg>
    </Container>
  );
};

export default AuthNavigation;
