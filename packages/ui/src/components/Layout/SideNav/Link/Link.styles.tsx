import Link from 'next/link'
import styled, { css, DefaultTheme } from 'styled-components'
interface StyledLinkProps {
    selected: boolean
    theme: DefaultTheme
}
export const StyledLink = styled(Link)`${({ theme, selected }: StyledLinkProps) => css`
    width: 100%;
    display: flex;
    height: 30px;
    border-left: 2px;
    color: ${theme.palette.common.white};
    text-decoration: none;
    border-left-color: ${selected ? theme.palette.primary.main : 'rgba(0, 0, 0, 0)'};
`}
`