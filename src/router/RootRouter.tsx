import { Navigate, Route, Routes, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import {
  ModuleRouter as RaidBossTimersModuleRouter,
  ModuleRouterBase as RaidBossTimerModuleRouterBase,
} from 'modules/RaidBossTimers/router';

export const RootRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        {/* Home page */}
        <Route path='/' element={null} />

        {/* Modules */}
        <Route
          path={`${RaidBossTimerModuleRouterBase}/*`}
          element={<RaidBossTimersModuleRouter />}
        />

        {/* 404 handler */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </AnimatePresence>
  );
};
