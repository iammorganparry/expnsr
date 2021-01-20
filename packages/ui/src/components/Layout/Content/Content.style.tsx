import styled, { css } from 'styled-components';

export const StyledContent = styled.section`
  ${({ theme }) => css`
    width: calc(100vw - 200px);
    height: 100vh;
    margin-top: 50px;
    position: absolute;
    left: 200px;
    top: -50px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    background: ${theme.palette.background.paper};
  `}
`;

export const ChildrenClear = styled.div`
    margin-left: 60px;
    margin-top: 60px;
`
