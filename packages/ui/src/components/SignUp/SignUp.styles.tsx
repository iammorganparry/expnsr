import styled, { css } from 'styled-components'

export const StyledContainer = styled.div`
    width: 100;
`

const flex = css`
    display: flex;
    align-items: center;
    justify-content: center; 
    padding: 64px;
`
export const StyledIllustration = styled.section`
    width: 60%;
    ${flex};
    svg {
        /* width: 500px; */
        transform: scale(0.65);
        overflow: unset;
    }
`

export const StyledRegisterSection = styled.section`
    width: 40%;
    flex-direction: column;
    ${flex};
`