import { Navigate, Route, Routes } from 'react-router-dom';

import { RootContainer } from 'components/RootContainer';
import { HomePage } from 'pages/Home';

export const RootRouter = () => (
  <Routes>
    <Route element={<RootContainer />}>
      <Route path='/' element={<HomePage />} />
    </Route>

    <Route path='*' element={<Navigate to='/' replace />} />
  </Routes>
);
