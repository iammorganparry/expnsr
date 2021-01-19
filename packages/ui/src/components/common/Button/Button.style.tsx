import { ButtonProps } from "./Button";
import styled, { css, DefaultTheme } from "styled-components";

interface StyledButtonProps extends Omit<ButtonProps, 'text'> {
    theme: DefaultTheme
}
export const StyledButton = styled.button`${({ theme, width, height }: StyledButtonProps) => css`
    width: ${ width ? `${width}px` : '100%'};
    height: ${ height ? `${height}px` : '50px'};
    background: ${theme.palette.primary.main};
    color: ${theme.palette.common.white};
    text-transform: uppercase;
    font-size: 14px;
    outline: none;
    border: none;
    min-width: 100px;
    border-radius: ${height ? `${height / 2}px` : '25px'};
    box-shadow: ${theme.shadows[2]};
    transition: all 0.35s ease;
    :hover {
        box-shadow: ${theme.shadows[6]};
        transform: scale(1.02);
        cursor: pointer;
    }
`}`