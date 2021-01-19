import { AuthorizedUserProvider } from '@/hooks/useAuthorizeUser/context';
import '@/styles/global.css';
import theme from '@/styles/theme';
import { ThemeProvider } from 'styled-components';

export default function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme}>
    <AuthorizedUserProvider>
      <Component {...pageProps} />
    </AuthorizedUserProvider>
  </ThemeProvider>
  )
}
