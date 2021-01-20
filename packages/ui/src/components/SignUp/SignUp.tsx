import { StyledFullPageContainer } from '../common/FullPageContainer/FullPageContainer.styles';
import Image from 'next/image';
import { StyledRegisterSection } from './SignUp.styles';
import { RegisterForm } from '../Login/Forms/RegisterForm/RegisterForm';
import { StyledIllustration } from '../Login/Login.style';
export const SignUp = () => {
  return (
    <StyledFullPageContainer>
      <RegisterForm />
    </StyledFullPageContainer>
  );
};
