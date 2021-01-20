import supabase from '@expnsr/services/Supabase';
import {
  StyledGoogleBtnContainer,
  StyledGoogleButton,
  StyledGoogleImage,
} from './Google.style';

export const GoogleBtn = () => {
  const success = async (event: React.SyntheticEvent) => {
    event.persist();
    const { user, error } = await supabase.auth.signIn({
      provider: 'google',
    });
    if (user) {
      alert('Logged In');
    }
  };
  return (
    <StyledGoogleBtnContainer>
      <StyledGoogleImage
        className="google-icon-svg"
        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
      />
      <StyledGoogleButton text="Sign in with Google" onClick={success} />
    </StyledGoogleBtnContainer>
  );
};
