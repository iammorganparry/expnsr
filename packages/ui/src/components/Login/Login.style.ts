import styled, { css } from 'styled-components'

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

export const StyledGetStarted = styled.section`
    width: 40%;
    flex-direction: column;
    ${flex};
`

export const GetStartedBtn = styled.button`${({ theme }) => css`
width: 100%;
height: 65px;
border-radius: 25px;
background: ${theme.palette.primary.main};
color: ${theme.palette.common.white};
border: none;
font-size: 16px;
text-transform: uppercase;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`}`

export const TagLine = styled.h2`${({ theme }) => css`
    font-weight: normal;
    text-align: center;
    margin-bottom: theme.spacing(2);
`}
`

export const StyledFooter = styled.footer`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
`

export const StyledLogo = styled.p`
    /* display: flex; */
    position: absolute;
    bottom: 24px;
    left: 24px;
    margin-left: ${props => props.theme.spacing(3)};
    font-size: 24px;
    color: ${props => props.theme.palette.primary.main};
`