import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const AuthBtnLog = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid var(--brand);
  color: var(--black);
  background-color: var(--white);
  padding: 8px 16px;
  gap: 8px;
  transition: transform 200ms linear;
  width: 120px;

  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const AuthBtnReg = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid var(--brand);
  color: var(--white);
  background-color: var(--brand);
  padding: 8px 20px;
  gap: 8px;
  transition: transform 200ms linear;
  width: 120px;

  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
