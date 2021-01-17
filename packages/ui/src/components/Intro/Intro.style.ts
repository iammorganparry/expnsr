import styled, { css } from 'styled-components'

export const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`

const flex = css`
    display: flex;
    align-items: center;
    justify-content: center; 
`  
export const StyledIllustration = styled.section`
    width: 65%;
    ${flex}
` 

export const StyledGetStarted = styled.section`
    width: 35%;
    flex-direction: column;
    ${flex}
`

export const GetStartedBtn = styled.button`${({ theme }) => css`
width: 500px;
height: 65px;
border-radius: 25px;
background: ${theme.palette.primary.main};
color: ${theme.palette.common.white};
border: none;
text-transform: uppercase;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`}`

export const TagLine = styled.h1`${({ theme }) => css`
font-weight: normal;
margin-bottom: theme.spacing(2);
`}
`