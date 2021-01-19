import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
`

export const FormGroup = styled.div`${({ theme }) => css`
    padding: ${theme.spacing(3)};
`}
`