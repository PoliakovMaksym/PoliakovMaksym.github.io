import { Navigate, Route, Routes, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import {
  ModuleRouter as GuildWars2ModuleRouter,
  ModuleRouterBase as GuildWars2ModuleRouterBase,
} from 'modules/GuildWars2/router';

import { Fake404Page } from './Fake404Page';

export const ApplicationRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        {/* Home page */}
        <Route path='/' element={<Fake404Page />} />

        {/* Modules */}
        <Route path={`${GuildWars2ModuleRouterBase}/*`} element={<GuildWars2ModuleRouter />} />

        {/* 404 handler */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </AnimatePresence>
  );
};
