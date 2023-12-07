import { AuthBtnLog, AuthBtnReg, Container } from './AuthNavigation.styled';

const AuthNavigation = () => {
  return (
    <Container>
      <AuthBtnLog>Log IN</AuthBtnLog>
      <AuthBtnReg>Registration</AuthBtnReg>
    </Container>
  );
};

export default AuthNavigation;
