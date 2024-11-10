import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header';

export const RootContainer = () => (
  <React.Fragment>
    <Header />
    <Outlet />
  </React.Fragment>
);
