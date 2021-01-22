import styled, { css } from 'styled-components';

export const StyledContainer = styled.article`
  display: flex;
  width: 100%;
`;
export const DropzoneContainer = styled.section`
  ${({ theme }) => css`
    display: flex;
    width: 35%;
    align-items: center;
    /* justify-content: center; */
    margin-top: ${theme.spacing(2)};
    /* padding: ${theme.spacing(2)}; */
  `}
`;
export const FormContainer = styled.section`
  ${({ theme }) => css`
    display: flex;
    width: 65%;
    align-items: center;
    justify-content: center;
    margin: ${theme.spacing(2)};
    padding: ${theme.spacing(2)};
    overflow: scroll;
  `}
`;
