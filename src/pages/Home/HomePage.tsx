import { Grid2, Grid2Props, styled } from '@mui/material';

import { BOSS_CARD_MAX_WIDTH, BossCard } from 'components/BossCard';
import { BOSSES } from 'data';

const GridContainer = styled(Grid2)<Grid2Props & { spacing: number }>(({ theme, spacing }) => ({
  width: '100%',
  maxWidth: `calc(${BOSS_CARD_MAX_WIDTH} * 2 + ${theme.spacing(spacing)})`,
}));

const GridItem = styled(Grid2)({
  display: 'flex',
  justifyContent: 'center',
});

export const HomePage = () => (
  <GridContainer container spacing={2}>
    {BOSSES.map(boss => (
      <GridItem key={boss.code} size={{ xs: 12, md: 6 }}>
        <BossCard bossInfo={boss} />
      </GridItem>
    ))}
  </GridContainer>
);
