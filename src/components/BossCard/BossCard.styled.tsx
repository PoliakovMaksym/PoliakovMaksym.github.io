import {
  Box,
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  CardMediaProps,
  styled,
  Typography,
  TypographyProps,
} from '@mui/material';

export const BOSS_CARD_MAX_WIDTH = '450px';
export const Card = styled(MuiCard)({
  width: '100%',
  maxWidth: BOSS_CARD_MAX_WIDTH,
  textDecoration: 'none',
});

export const CardMediaContainer = styled(Box)({
  aspectRatio: '12 / 5',
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const CardMedia = styled(MuiCardMedia)<CardMediaProps<'img'>>({
  // aspectRatio: '12 / 5',
});

export const CardContent = styled(MuiCardContent)({});

export const BossName = styled(Typography)<TypographyProps<'div'>>({
  textTransform: 'capitalize',
});
