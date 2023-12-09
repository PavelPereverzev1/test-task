import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);

  transition: 0.5s;

  z-index: 1200;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 541px;
  height: 752px;
  padding: 40px;
  border-radius: 24px;
  background-color: white;

  h3 {
    font-family: inherit;
    font-size: 14px;
    line-height: 1.5;
    color: var(--titleText);
    font-weight: 500;
    margin-bottom: 14px;
  }
  .rental {
    margin-top: 24px;
    margin-bottom: 8px;
  }
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: transparent;
  color: var(--blueLink);
  border: none;
  cursor: pointer;
  & svg {
    width: 24px;
    height: 24px;
  }
  &:hover {
    color: var(--brand);
  }
`;

export const ImgThumb = styled.div`
  position: relative;
  width: 100%;
  height: 248px;
  border-radius: 14px;
  margin-bottom: 14px;
  overflow: hidden;
  margin-bottom: 14px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
export const Title = styled.h2`
  display: flex;
  column-gap: 4px;
  width: 100%;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;

export const Model = styled.span`
  color: var(--brand);
`;

export const Info = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: var(--textInfo);
  margin-bottom: 14px;
`;

export const Line = styled.div`
  margin-bottom: 5px;
  span:not(:first-child) {
    padding-left: 6px;
    border-left: 1px solid var(--textDivider);
  }
  span {
    padding-right: 6px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  color: var(--titleText);
`;

export const ConditionLine = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;
export const Condition = styled.div`
  display: flex;
  height: 32px;
  border-radius: 35px;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  background-color: var(--condition);
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.24px;
  span {
    color: var(--brand);
    margin-left: 4px;
  }
`;
export const RentalBtn = styled.div`
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  color: var(--white);
  background-color: var(--brand);
  transition: background-color 200ms linear;
  &:hover {
    background-color: var(--accent);
    cursor: pointer;
  }
`;
