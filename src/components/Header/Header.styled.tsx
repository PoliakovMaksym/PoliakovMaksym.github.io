import { IconButton, styled } from '@mui/material';

export const BossIcon = styled('img')({
  width: '24px',
  height: '24px',
  borderRadius: '50%',
});

export const HomeButton = styled(IconButton)(({ hidden }) => ({
  ...(hidden && { visibility: 'hidden' }),
}));
