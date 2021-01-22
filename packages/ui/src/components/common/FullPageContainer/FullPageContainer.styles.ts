import styled, { css } from 'styled-components';

export const StyledFullPageContainer = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    background: ${theme.palette.grey['200']};
  `}
`;
