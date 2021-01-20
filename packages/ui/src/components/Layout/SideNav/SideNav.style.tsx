import styled, { css } from 'styled-components'

export const StyledSideNav = styled.nav`${({ theme }) => css`
    width: 200px;
    height: 100vh;
    display: flex;
    position: absolute;
    flex-direction: column;
    background: ${theme.palette.greys.light};
    left: 0;
    top: 0;
`}
`