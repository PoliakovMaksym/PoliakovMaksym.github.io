import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { RootContainer } from 'components/RootContainer';
import { BOSSES } from 'data';
import { HomePage } from 'pages/Home';

export const RootRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route element={<RootContainer />}>
          <Route path='/' element={<HomePage />} />
          {BOSSES.map(boss => (
            <Route key={boss.code} path={`/${boss.code}`} element={<div>{boss.name}</div>} />
          ))}
        </Route>

        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </AnimatePresence>
  );
};
