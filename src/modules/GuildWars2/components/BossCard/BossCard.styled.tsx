import {
  Box,
  Card as MuiCard,
  CardActionArea as MuiCardActionArea,
  cardActionAreaClasses,
  CardActionAreaProps,
  CardActions as MuiCardActions,
  cardClasses,
  decomposeColor,
  recomposeColor,
  Stack,
  styled,
  svgIconClasses,
  Typography,
  TypographyProps,
} from '@mui/material';

const increaseTheAlphaChannel = (color: string) => {
  const decomposedColor = decomposeColor(color);
  if (decomposedColor.type === 'rgba' && decomposedColor.values[3]) {
    decomposedColor.values[3] *= 2.5;
  }

  return recomposeColor(decomposedColor);
};

export const CardWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: theme.shape.borderRadius,

  // The background has a divider color, to match the original Mui Card border.
  // We are faking the present of the border for a fancy moving light line.
  backgroundColor: theme.palette.divider,
  padding: '1px',

  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.shortest,
    easing: theme.transitions.easing.easeOut,
  }),

  '&:hover': {
    backgroundColor: increaseTheAlphaChannel(theme.palette.divider),
    [`.${cardClasses.root}`]: {
      borderColor: increaseTheAlphaChannel(theme.palette.divider),
    },

    [`.${animatedMovingLineClasses.root}`]: {
      opacity: 1,
    },
  },
}));

export const Card = styled(MuiCard)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: `${theme.custom.components.BossCard.maxWidth}px`,
  textDecoration: 'none',
  zIndex: 1,
}));

export const DragonHead = styled('img')({
  position: 'absolute',
  right: '-5px',
  bottom: '5px',
  width: '35%',
  transform: 'rotate(15deg)',
  opacity: 0.25,
});

type AnchorCardActionAreaProps = CardActionAreaProps<'a', { component: 'a' }>;
export const CardActionArea = styled(MuiCardActionArea)<AnchorCardActionAreaProps>({
  // Removing default Mui Card action area hover effect,
  // because it looks bad with our layout.
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

export const BossLocation = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(0.5),
  color: theme.palette.text.secondary,

  // PlaceIcon SVG is smaller, than its container in width.
  // As a result, it doesn't look aligned.
  // We can move it slightly to the left to "fix" that.
  [`.${svgIconClasses.root}`]: {
    marginLeft: `-${theme.spacing(0.5)}`,
  },
}));

export const CardActions = styled(MuiCardActions)(({ theme }) => ({
  padding: theme.spacing(0, 2, 2, 2),
}));

export const animatedMovingLineClasses = { root: 'AnimatedMovingLine-root' };
export const AnimatedMovingLine = styled(Box)(({ theme }) => {
  let movingBorderColor = theme.palette.divider;
  const decomposedColor = decomposeColor(movingBorderColor);
  if (decomposedColor.type === 'rgba') {
    decomposedColor.type = 'rgb';
    decomposedColor.values.length = 3;
    movingBorderColor = recomposeColor(decomposedColor);
  }

  return {
    '@keyframes moving-line': {
      '0%': { transform: 'translate(0%, 0%)' },
      '25%': { transform: 'translate(-100%, 0%)' },
      '50%': { transform: 'translate(-100%, -100%)' },
      '75%': { transform: 'translate(0%, -100%)' },
      '100%': { transform: 'translate(0%, 0%)' },
    },

    background: `radial-gradient(circle, ${movingBorderColor}, transparent 25%)`,
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    bottom: '-50%',
    right: '-50%',
    opacity: 0,
    zIndex: 0,
    animation: 'moving-line 15s linear infinite',

    transition: theme.transitions.create('opacity', {
      duration: '1s',
      easing: theme.transitions.easing.easeOut,
    }),
  };
});
