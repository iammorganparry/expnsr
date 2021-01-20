import { Button } from '../../../common/Button/Button'
import styled, { css } from 'styled-components'

export const StyledRegisterButton = styled(Button)`${({ theme }) => css`
    margin-top: ${theme.spacing(3)};
`}
`

export const StyledContainer = styled.article`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`