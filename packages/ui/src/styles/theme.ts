import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f55d3e',
    },
    secondary: {
      main: '#76bed0',
    },
  },
  spacing: (value: number) => `${value * 8}px`,
});
