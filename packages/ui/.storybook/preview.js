// .storybook/preview.js

import React from "react";
import { ThemeProvider } from 'styled-components';
import theme  from '../src/styles/theme'
import '../src/styles/global.css';
import { ToastProvider } from "react-toast-notifications";
import { withNextRouter } from 'storybook-addon-next-router';
import { addDecorator } from '@storybook/react';
 
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(
  withNextRouter({
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() {} // defaults to using addon actions integration, can override any method in the router
  })
);

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <ToastProvider placement='top-center' autoDismiss>
        <Story />
      </ToastProvider>
    </ThemeProvider>
  ),
];