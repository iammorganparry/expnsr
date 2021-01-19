// .storybook/preview.js

import React from "react";
import { ThemeProvider } from 'styled-components';
import theme  from '../src/styles/theme'
import '../src/styles/global.css';
 
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}


export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];