import { BossCard } from '../../components/BossCard';
import { BOSSES } from '../../data';

import { GridContainer, GridItem } from './HomePage.styled';

export const HomePage = () => (
  <>
    <title>Guild Wars 2</title>

    <GridContainer container spacing={2}>
      {BOSSES.map(boss => (
        <GridItem key={boss.code} size={{ xs: 12, md: 6 }}>
          <BossCard bossInfo={boss} />
        </GridItem>
      ))}
    </GridContainer>
  </>
);
