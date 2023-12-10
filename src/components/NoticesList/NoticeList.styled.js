import styled from 'styled-components';

export const Container = styled.div`
  justify-content: start;
  display: flex;
  flex-wrap: wrap;
  column-gap: calc((100% - 2 * 274px));

  @media screen and (min-width: 1110px) {
    column-gap: calc((100% - 3 * 274px) / 2);
  }

  @media screen and (min-width: 1400px) {
    column-gap: calc((100% - 4 * 274px) / 3);
  }

  row-gap: 50px;
  padding-bottom: 174px;
`;
