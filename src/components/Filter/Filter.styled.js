import styled from 'styled-components';

export const Form = styled.form`
  top: 60px;
  left: 0;
  position: sticky;
  z-index: 1100;
  background-color: var(--white);
  padding-bottom: 10px;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const InputWrapper = styled.label`
  display: flex;
  height: 66px;
  flex-direction: column;
  color: var(--inputsTitle);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  select,
  input {
    height: 48px;
    color: var(--titleText);
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
    background-color: var(--inputsBg);
    border-style: hidden;
  }

  select {
    border-radius: 14px;
    padding: 14px 18px;
  }

  .from {
    width: 160px;
    border-radius: 14px 0px 0px 14px;
    padding: 14px 24px;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
  }

  .to {
    width: 160px;
    border-radius: 0 14px 14px 0;
    padding: 14px 24px;
    margin-right: 18px;
  }

  .brand {
    width: 224px;
    margin-right: 18px;
  }
  .price {
    width: 125px;
    margin-right: 18px;
  }
`;

export const Submit = styled.button`
  height: 48px;
  align-self: flex-end;
  padding: 14px 44px;
  color: var(--white);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  background-color: var(--brand);
  border-color: var(--brand);
  border-radius: 12px;
  &:hover,
  &:focus {
    background-color: var(--accent);
    cursor: pointer;
  }
`;
