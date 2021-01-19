import { TextInput } from "../../../../common/TextInput/TextInput"
import { FormGroup, StyledForm } from './LoginForm.style'
export const LoginForm = () => {


    return (
        <StyledForm>
            <FormGroup>
                <TextInput label='Email' type='email' />
                <TextInput label='Password' type='password' />
            </FormGroup>
        </StyledForm>
    )
}