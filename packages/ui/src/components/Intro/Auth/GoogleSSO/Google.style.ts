import styled, { css } from 'styled-components'
import { GoogleLogin } from 'react-google-login';


export const StyledGoogleBtn = styled(GoogleLogin)`${({ theme }) => css`
    width: 100%;
    border-radius: 25px;
    height: 50px;
`}`