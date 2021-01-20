import { TextInput } from "../../../common/TextInput"
import { FormGroup, StyledForm } from "../LoginForm/LoginForm.style"
import { useAuthorizeUser } from "../../../../hooks/useAuthorizeUser"
import { StyledContainer, StyledRegisterButton } from "./RegisterForm.style"
import { useToasts } from 'react-toast-notifications'

export const RegisterForm = () => {
    const { handleChange, handleSubmit } = useAuthorizeUser('register')
    const { addToast } = useToasts()

    return (
        <StyledContainer>
        <StyledForm onSubmit={handleSubmit}>
        <FormGroup>
        <TextInput data-testid='signUp-email' onChange={handleChange('email')} label='Email' type='email' />
        <TextInput data-testid='signUp-password' onChange={handleChange('password')} label='Password' type='password' />
        <StyledRegisterButton data-testid='signUp-btn' text='Sign up!' type='submit' />
        </FormGroup>
        </StyledForm>
        </StyledContainer>
    )
}