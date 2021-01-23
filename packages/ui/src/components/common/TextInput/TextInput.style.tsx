import styled, { css, DefaultTheme } from 'styled-components';

interface StyledInputContainerProps {
  width?: string;
  theme: DefaultTheme;
}
export const StyledInputContainer = styled.div`
  ${({ theme, width }: StyledInputContainerProps) => css`
    display: flex;
    flex-direction: column;
    position: relative;
    width: ${width};
  `}
`;

export const IconContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: ${theme.spacing(2)};
    top: calc(50% - 15px);

    svg {
      font-size: 30px;
      color: ${theme.palette.text.hint};
    }
  `}
`;
interface StyledTextInputProps {
  startPadding?: boolean;
  theme: DefaultTheme;
}
export const StyledTextInput = styled.input`
  ${({ theme, startPadding }: StyledTextInputProps) => css`
    width: 100%;
    height: 50px;
    border-radius: 25px;
    background: ${theme.palette.grey['200']};
    color: ${theme.palette.common.black};
    border: none;
    padding-left: ${startPadding ? theme.spacing(7) : '15px'};
    font-weight: bold;
    font-size: 18px;
    margin-top: ${theme.spacing(1)};
    margin-bottom: ${theme.spacing(3)};
    outline: none;
    &::placeholder {
      color: ${theme.palette.divider};
    }
  `}
`;
export const StyledLabel = styled.label`
  ${({ theme }) => css`
    font-size: 14px;
    padding-left: 15px;
  `}
`;
