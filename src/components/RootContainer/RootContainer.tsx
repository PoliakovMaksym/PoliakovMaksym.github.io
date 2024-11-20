import React from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material';
import { motion } from 'motion/react';

import { Header } from 'components/Header';
import { FramerMotionFadeProps } from 'utils';

const Content = styled(motion.main)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

export const RootContainer = () => (
  <React.Fragment>
    <Header />
    <Content {...FramerMotionFadeProps}>
      <Outlet />
    </Content>
  </React.Fragment>
);
