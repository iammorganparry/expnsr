import { useContext, useEffect, useState } from 'react';
import { AuthorizedUserContext } from '../useAuthorizeUser';

export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userContext, setUserContext] = useContext(AuthorizedUserContext);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('supabase.auth.token'));
    if (token) {
      if(token.expiresAt < Date.now()) {
        userContext === null && setUserContext(token.currentSession.user);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false)
      }
    } else {
      setIsLoggedIn(false)
    }
    return () => {
      setIsLoggedIn(false);
    };
  }, [userContext]);
  return isLoggedIn;
};
