import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import { RootContainer } from 'components/RootContainer';
import { BossCode, BOSSES } from 'data';
import { DhuumPage } from 'pages/Dhuum';
import { HomePage } from 'pages/Home';
import { SabethaPage } from 'pages/Sabetha';
import { SlothasorPage } from 'pages/Slothasor';
import { TrioPage } from 'pages/Trio';
import { BossPageProps } from 'pages/types';

const BossPages: Record<BossCode, React.JSXElementConstructor<BossPageProps>> = {
  [BossCode.Sabetha]: SabethaPage,
  [BossCode.Slothasor]: SlothasorPage,
  [BossCode.Trio]: TrioPage,
  [BossCode.Dhuum]: DhuumPage,
};

export const RootRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route element={<RootContainer />}>
          <Route path='/' element={<HomePage />} />
          {BOSSES.map(boss => {
            const BossPage = BossPages[boss.code];
            return (
              <Route
                key={boss.code}
                path={`/${boss.code}`}
                element={<BossPage bossInfo={boss} />}
              />
            );
          })}
        </Route>

        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </AnimatePresence>
  );
};
