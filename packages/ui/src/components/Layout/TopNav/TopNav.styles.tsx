import styled, { css } from 'styled-components';

export const StyledTopNav = styled.nav`
  ${({ theme }) => css`
    width: calc(100vw - 200px);
    height: 50px;
    position: fixed;
    margin-top: ${theme.spacing(2)};
    padding: ${theme.spacing(2)};
    top: 0;
    display: flex;
    right: 0;
    z-index: 2;
    justify-content: space-between;
    align-items: center;
  `}
`;
