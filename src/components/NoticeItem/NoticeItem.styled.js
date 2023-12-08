import styled from 'styled-components';

export const Container = styled.div`
  width: 274px;
  height: 426px;
  background-color: var(--white);
`;

export const ImgThumb = styled.div`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  margin-bottom: 14px;
  overflow: hidden;
`;

export const Title = styled.div`
  display: flex;
  column-gap: 4px;
  width: 100%;
  height: 24px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
`;

export const Model = styled.span`
  color: var(--brand);
`;

export const Price = styled.span`
  margin-left: auto;
`;

export const Info = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: var(--textInfo);
  margin-bottom: 28px;
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

export const LearnMoreBtn = styled.button`
  height: 44px;
  width: 100%;
  border-radius: 12px;
  border-color: var(--brand);
  background-color: var(--brand);
  font-size: 14px;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  color: var(--white);
  transition: background-color 200ms linear;
  &:hover {
    background-color: var(--accent);
    cursor: pointer;
  }
`;
