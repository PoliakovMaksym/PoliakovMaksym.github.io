import {
  alpha,
  Box,
  Button as MuiButton,
  ButtonGroup as MuiButtonGroup,
  paperClasses,
  Stack,
  styled,
  SwipeableDrawer,
} from '@mui/material';

import { utilityClasses } from 'utils/utilityClasses';

export const Drawer = styled(SwipeableDrawer)(({ theme }) => ({
  [`.${paperClasses.root}`]: {
    [theme.breakpoints.down('sm')]: { width: '310px' },
    [theme.breakpoints.up('sm')]: { width: '360px' },
  },
}));

export const DrawerHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  [theme.breakpoints.down('sm')]: { padding: theme.spacing(1, 2) },
  [theme.breakpoints.up('sm')]: { padding: theme.spacing(1.5, 2) },
}));

export const DrawerContent = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const ButtonGroup = styled(MuiButtonGroup)({
  width: '100%',
});

export const Button = styled(MuiButton)(({ theme }) => ({
  borderRadius: '12px',
  textTransform: 'capitalize',

  [theme.breakpoints.down('sm')]: { padding: theme.spacing(1.5, 2) },
  [theme.breakpoints.up('sm')]: {
    flex: 1,
    padding: theme.spacing(1.5),
  },

  [`&.${utilityClasses.selected}`]: {
    ...theme.applyStyles('light', { backgroundColor: '#EBF5FF' }),
    ...theme.applyStyles('dark', { backgroundColor: alpha('#003B75', 0.4) }),
  },
}));
