import {
  alpha,
  Box,
  Button as MuiButton,
  ButtonGroup as MuiButtonGroup,
  ButtonProps,
  paperClasses,
  Stack,
  styled,
  SwipeableDrawer,
} from '@mui/material';

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

export const Button = styled(MuiButton, {
  shouldForwardProp: propName => propName !== 'selected',
})<ButtonProps & { selected: boolean }>(({ theme, selected }) => ({
  borderRadius: '12px',

  [theme.breakpoints.down('sm')]: { padding: theme.spacing(1.5, 2) },
  [theme.breakpoints.up('sm')]: {
    flex: 1,
    padding: theme.spacing(1.5),
  },

  ...(selected && {
    ...theme.applyStyles('light', { backgroundColor: '#EBF5FF' }),
    ...theme.applyStyles('dark', { backgroundColor: alpha('#003B75', 0.4) }),
  }),
}));
