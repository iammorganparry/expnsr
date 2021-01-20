import styled, { css } from 'styled-components';
import { Button } from '../../../../common/Button/Button';
import Google from '../../../../../assets/google.svg';

export const StyledGoogleBtnContainer = styled.div`
  display: flex;
  position: relative;
`;
export const StyledGoogleButton = styled(Button)`
  ${({ theme }) => css`
    background: ${theme.palette.common.white};
    /* text-transform: unset; */
    height: 60px;
    text-align: left;
    padding-left: calc(24px + 8px + 46px);
    font-family: 'Roboto', sans-serif;
    color: ${theme.palette.common.black};
  `}
`;

export const StyledGoogleImage = styled.img`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 24px;
    height: 24px;
    margin-bottom: auto;
    z-index: 2;
    margin-top: auto;
    /* width: 18px;
    height: 18px; */
    left: ${theme.spacing(2)};
  `}
`;
