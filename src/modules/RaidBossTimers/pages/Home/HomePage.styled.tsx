import { Grid, GridProps, styled } from '@mui/material';

export const GridContainer = styled(Grid)<GridProps & { spacing: number }>(
  ({ theme, spacing }) => ({
    width: '100%',
    maxWidth: `calc(${theme.custom.components.BossCard.maxWidth * 2}px + ${theme.spacing(spacing)})`,
  }),
);

export const GridItem = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
});
