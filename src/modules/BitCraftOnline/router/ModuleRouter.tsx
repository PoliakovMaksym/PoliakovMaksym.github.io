import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';

import { RootContainer } from '../components/RootContainer';
import { HomePage } from '../pages/Home';

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
      </Route>

      <Route path='*' element={<Navigate to={basePath} replace />} />
    </Routes>
  );
};
