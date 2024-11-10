import { StyleOverrides } from './types';

export const cssBaselineOverride: StyleOverrides<'MuiCssBaseline'> = {
  styleOverrides: {
    'html, body, #root': {
      minWidth: '360px',
      maxHeight: '640%',
      width: '100%',
      height: '100%',
    },

    '#root': {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    },
  },
};
