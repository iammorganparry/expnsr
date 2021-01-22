import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import {theme} from '../src/styles/theme'
import { StylesProvider, ThemeProvider as MaterialProvider } from '@material-ui/core'
import { AuthorizedUserProvider } from '../src/hooks/useAuthorizeUser'
import { ToastProvider } from 'react-toast-notifications'
// import { TranslationProvider } from 'my-i18n-lib'
// import defaultStrings from 'i18n/en-x-default'

const AllTheProviders = ({ children }) => {
  return (
    <StylesProvider injectFirst>
      <MaterialProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <AuthorizedUserProvider>
            <ToastProvider autoDismiss placement="top-center">
              {children}
            </ToastProvider>
          </AuthorizedUserProvider>
        </ThemeProvider>
      </MaterialProvider>
    </StylesProvider>
  )
}

const customRender = (ui, options?: {}) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }