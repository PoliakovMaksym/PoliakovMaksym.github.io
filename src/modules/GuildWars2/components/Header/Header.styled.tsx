import { IconButton, styled, Toolbar } from '@mui/material';

export const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
});

export const BossIcon = styled('img')({
  width: '24px',
  height: '24px',
  borderRadius: '50%',
});

export const HomeButton = styled(IconButton)(({ hidden }) => ({
  ...(hidden && { visibility: 'hidden' }),
}));
