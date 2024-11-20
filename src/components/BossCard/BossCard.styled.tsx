import {
  Box,
  Card as MuiCard,
  CardContent as MuiCardContent,
  styled,
  Typography,
  TypographyProps,
} from '@mui/material';

export const Card = styled(MuiCard)(({ theme }) => ({
  width: '100%',
  maxWidth: `${theme.custom.components.BossCard.maxWidth}px`,
  textDecoration: 'none',
}));

export const CardMediaContainer = styled(Box)({
  aspectRatio: '12 / 5',
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const CardContent = styled(MuiCardContent)({});

export const BossName = styled(Typography)<TypographyProps<'div'>>({
  textTransform: 'capitalize',
});
