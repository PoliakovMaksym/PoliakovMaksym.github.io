import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';

import { RootContainer } from '../components/RootContainer';
import { BossCode, BOSSES } from '../data';
import { DhuumPage } from '../pages/Dhuum';
import { HomePage } from '../pages/Home';
import { SabethaPage } from '../pages/Sabetha';
import { SlothasorPage } from '../pages/Slothasor';
import { TrioPage } from '../pages/Trio';
import { BossPageProps } from '../pages/types';

const BossPagesMap: Record<BossCode, React.JSXElementConstructor<BossPageProps>> = {
  [BossCode.Sabetha]: SabethaPage,
  [BossCode.Slothasor]: SlothasorPage,
  [BossCode.Trio]: TrioPage,
  [BossCode.Dhuum]: DhuumPage,
};

const BossPageRoutes = BOSSES.map(boss => {
  const BossPage = BossPagesMap[boss.code];
  return <Route key={boss.code} path={boss.code} element={<BossPage bossInfo={boss} />} />;
});

export const ModuleRouter = () => {
  const location = useLocation();
  const basePath = React.useMemo(
    () => location.pathname.split('/').slice(0, -1).join('/'),
    [location.pathname],
  );

  return (
    <Routes>
      <Route element={<RootContainer />}>
        <Route index element={<HomePage />} />
        {BossPageRoutes}
      </Route>

      <Route path='*' element={<Navigate to={basePath} replace />} />
    </Routes>
  );
};
