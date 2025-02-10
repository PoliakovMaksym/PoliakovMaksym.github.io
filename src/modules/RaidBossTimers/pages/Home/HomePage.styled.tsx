import { Grid2, Grid2Props, styled } from '@mui/material';

export const GridContainer = styled(Grid2)<Grid2Props & { spacing: number }>(
  ({ theme, spacing }) => ({
    width: '100%',
    maxWidth: `calc(${theme.custom.components.BossCard.maxWidth * 2}px + ${theme.spacing(spacing)})`,
  }),
);

export const GridItem = styled(Grid2)({
  display: 'flex',
  justifyContent: 'center',
});
