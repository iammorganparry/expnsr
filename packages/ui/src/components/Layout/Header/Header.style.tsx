import styled, { css } from "styled-components"

export const StyledHeader = styled.div`${({ theme }) => css`
    display: flex;
    height: 100px;
    width: calc(100vw - 200px);
    justify-content: space-between;
    background: ${theme.palette.background.paper};
    align-items: center;
`}
`
export const StyledHeaderText = styled.h1`
    font-size: 30px;
`
export const ChildrenContainer = styled.div`
    display: flex;
`