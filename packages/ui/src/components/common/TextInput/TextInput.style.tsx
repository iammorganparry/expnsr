import styled, { css } from "styled-components";

export const StyledTextInput = styled.input`${({theme}) => css`
    width: 100%;
    height: 50px;
    border-radius: 25px;
    background: ${theme.palette.greys.light};
    color: ${theme.palette.common.black};
    border: none;
    padding-left: 15px;
    font-weight: bold;
    font-size: 18px;
    margin-top: ${theme.spacing(1)};
    margin-bottom: ${theme.spacing(3)};
`}
`
export const StyledLabel = styled.label`${({theme}) => css`
    font-size: 14px;
    padding-left: 15px;
`}
`