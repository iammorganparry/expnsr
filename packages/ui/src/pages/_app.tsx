import '@/styles/global.css';
import theme from '@/styles/theme';
import { ThemeProvider } from 'styled-components';

export default function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
  )
}
