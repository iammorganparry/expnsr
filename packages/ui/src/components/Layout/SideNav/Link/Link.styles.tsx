import styled, { css, DefaultTheme } from 'styled-components';
interface StyledLinkProps {
  selected: boolean;
  theme: DefaultTheme;
}

const before = css`
  ${({ theme }) => css`
    ::before {
      content: '';
      height: 20px;
      position: absolute;
      left: -10px;
      top: 0;
      bottom: 0;
      margin-top: auto;
      margin-bottom: auto;
      border-bottom-right-radius: 100%;
      border-top-right-radius: 100%;
      background: ${theme.palette.primary.main};
      width: 20px;
      filter: blur(6px);
    }
  `}
`;
export const StyledLink = styled.a`
  ${({ theme, selected }: StyledLinkProps) => css`
    width: 100%;
    display: flex;
    height: 40px;
    margin-bottom: ${theme.spacing(1)};
    /* border-left: 10px solid; */
    color: ${selected ? theme.palette.primary.main : theme.palette.grey['600']};
    text-decoration: none;
    padding-left: ${theme.spacing(3)};
    /* border-bottom-right-radius: 100%; */
    position: relative;
    /* border-top-right-radius: 100%; */
    border-left-color: ${selected
      ? theme.palette.primary.main
      : 'rgba(0, 0, 0, 0)'};
    align-items: center;
    ${selected && before};
    &:hover {
      ${before};
      color: ${theme.palette.primary.main};
      background: '#ffffff78';
    }
  `}
`;
