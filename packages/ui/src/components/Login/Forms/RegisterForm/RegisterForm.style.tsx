import { Button } from '../../../common/Button/Button'
import styled, { css } from 'styled-components'

export const StyledRegisterButton = styled(Button)`${({ theme }) => css`
    margin-top: ${theme.spacing(3)};
`}
`