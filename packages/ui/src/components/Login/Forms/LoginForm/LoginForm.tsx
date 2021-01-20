import { TextInput } from '../../../common/TextInput/TextInput';
import {
  FormContainer,
  FormGroup,
  StyledForm,
  StyledLink,
  StyledLoginButton,
  StyledSubText,
} from './LoginForm.style';
import Link from 'next/link';
import { GoogleBtn } from './GoogleSSO/Google';
import { useAuthorizeUser } from '../../../../hooks/useAuthorizeUser';

export const LoginForm = () => {
  const { handleChange, handleSubmit } = useAuthorizeUser('login');
  return (
    <FormContainer>
      <FormGroup>
        <GoogleBtn />
      </FormGroup>
      <StyledForm onSubmit={handleSubmit}>
        <FormGroup>
          <TextInput
            onChange={handleChange('email')}
            label="Email"
            type="email"
          />
          <TextInput
            onChange={handleChange('password')}
            label="Password"
            type="password"
          />
          <StyledLoginButton text="Log In" type="submit" />
          <StyledSubText>
            Dont have an account?{' '}
            <StyledLink href="/sign-up">Sign up</StyledLink>
          </StyledSubText>
          <StyledSubText>
            <Link href="{{ .ConfirmationURL }}">Forgot Password?</Link>
          </StyledSubText>
        </FormGroup>
      </StyledForm>
    </FormContainer>
  );
};
