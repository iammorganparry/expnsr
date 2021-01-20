import { AuthorizedUserProvider } from '@/hooks/useAuthorizeUser/context';
import '@/styles/global.css';
import theme from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import { ToastProvider } from 'react-toast-notifications'

export default function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme}>
    <AuthorizedUserProvider>
      <ToastProvider autoDismiss placement='top-center'>
        <Component {...pageProps} />
      </ToastProvider>
    </AuthorizedUserProvider>
  </ThemeProvider>
  )
}
