import { AuthorizedUserProvider } from '@/hooks/useAuthorizeUser/context';
import '@/styles/global.css';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import {
  ThemeProvider as MaterialProvider,
  StylesProvider,
} from '@material-ui/styles';
import { ToastProvider } from 'react-toast-notifications';
import { Login } from '@/components/Login/Login';
import { useIsLoggedIn } from '@/hooks/useIsLoggedIn';
import { StyledFullPageContainer } from '@/components/common/FullPageContainer/FullPageContainer.styles';
import { ParsedItemsContextProvider } from '@/hooks/useParsedItems/context';

export default function MyApp({ Component, pageProps }) {
  const isLoggedIn = useIsLoggedIn();
  return (
    <StylesProvider injectFirst>
      <MaterialProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <AuthorizedUserProvider>
            <ToastProvider autoDismiss placement="top-center">
              <StyledFullPageContainer>
              <ParsedItemsContextProvider>
                {isLoggedIn ? (
                  <Component {...pageProps} />
                ) : (
                  <Login {...pageProps} />
                )}
              </ParsedItemsContextProvider>
              </StyledFullPageContainer>
            </ToastProvider>
          </AuthorizedUserProvider>
        </ThemeProvider>
      </MaterialProvider>
    </StylesProvider>
  );
}
