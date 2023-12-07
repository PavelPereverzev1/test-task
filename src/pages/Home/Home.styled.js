import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 50px);
  color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextBox = styled.div`
  align-self: flex-start;
  padding-left: 10px;

  h1 {
    padding-top: 50px;
    text-transform: uppercase;

    font-family: 'Manrope';
    font-weight: 600;
    font-size: 80;
    text-align: center;
  }

  p {
    font-family: 'Manrope';
    font-size: 18px;
    font-weight: 500;
  }
`;
