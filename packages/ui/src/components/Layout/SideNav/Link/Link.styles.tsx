import styled, { css, DefaultTheme } from 'styled-components';
interface StyledLinkProps {
  selected: boolean;
  theme: DefaultTheme;
}

export const StyledLink = styled.a`
  ${({ theme, selected }: StyledLinkProps) => css`
    width: 100%;
    display: flex;
    height: 40px;
    margin-bottom: ${theme.spacing(1)};
    border-left: 3px solid;
    color: ${selected ? theme.palette.primary.main : theme.palette.grey['600']};
    text-decoration: none;
    padding-left: ${theme.spacing(3)};
    /* border-bottom-right-radius: 100%; */
    position: relative;
    /* border-top-right-radius: 100%; */
    border-left-color: ${selected
      ? theme.palette.primary.main
      : 'rgba(0, 0, 0, 0)'};
    background-color: ${selected ? '#0000000a': 'none'};
    align-items: center;
    transition: all 0.35s ease;
    svg {
      margin-right: 8px;
      font-size: 20px;
    }
    &:hover {
      color: ${theme.palette.primary.main};
      background: '#ffffff78';
      border-left-color: ${theme.palette.primary.main};
    }
  `}
`;
