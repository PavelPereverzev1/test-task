import { styled } from 'styled-components';

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const NavbarLink = styled.a`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 1.28px;
  color: var(--black);
  transition: color var(--transition);
  cursor: pointer;
  font-size: 20px;
  letter-spacing: 0.8px;

  &:hover,
  &:focus {
    color: var(--brand);
  }

  &.active {
    color: var(--brand);
  }
`;
