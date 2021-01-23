import { Button } from '../../../common/Button/Button';
import Link from 'next/link';
import styled, { css } from 'styled-components';

export const FormContainer = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const StyledForm = styled.form`
  display: flex;
  width: 100%;
  max-width: 600px;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing(3)};
  `}
`;

export const StyledSubText = styled.p`
  text-align: center;
`;

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.palette.secondary.main};
  `}
`;

export const StyledLoginButton = styled(Button)`
  ${({ theme }) => css`
    margin-top: ${theme.spacing(3)};
  `}
`;
