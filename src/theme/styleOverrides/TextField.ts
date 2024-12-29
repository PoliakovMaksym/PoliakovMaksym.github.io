import { outlinedInputClasses } from '@mui/material';

import { StyleOverrides } from './types';

export const outlinedInputOverride: StyleOverrides<'MuiOutlinedInput'> = {
  styleOverrides: {
    root: {
      [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
        borderWidth: '1px',
      },
    },
    notchedOutline: ({ theme }) => ({
      transition: theme.transitions.create('border-color', {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut,
      }),
    }),
  },
};
