import {
  Box,
  Card as MuiCard,
  CardActionArea as MuiCardActionArea,
  cardActionAreaClasses,
  CardActionAreaProps,
  styled,
  Typography,
  TypographyProps,
} from '@mui/material';

export const Card = styled(MuiCard)(({ theme }) => ({
  width: '100%',
  maxWidth: `${theme.custom.components.BossCard.maxWidth}px`,
  textDecoration: 'none',
  position: 'relative',

  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
    easing: theme.transitions.easing.easeOut,
  }),

  '&:hover': {
    transform: 'scale(1.025)',
  },
}));

type AnchorCardActionAreaProps = CardActionAreaProps<'a', { component: 'a' }>;
export const CardActionArea = styled(MuiCardActionArea)<AnchorCardActionAreaProps>({
  [`&:hover .${cardActionAreaClasses.focusHighlight}`]: {
    backgroundColor: 'transparent',
    opacity: 0,
  },
});

export const CardMediaContainer = styled(Box)({
  aspectRatio: '12 / 5',
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const BossName = styled(Typography)<TypographyProps<'div'>>({
  textTransform: 'capitalize',
});

export const DragonHead = styled('img')({
  position: 'absolute',
  right: '-5px',
  bottom: '5px',
  width: '35%',
  transform: 'rotate(15deg)',
  opacity: 0.25,
});
