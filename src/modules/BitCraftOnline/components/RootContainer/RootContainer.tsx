import { Outlet } from 'react-router';
import { styled } from '@mui/material';
import { motion } from 'motion/react';

import { FramerMotionFadeProps } from 'utils';

const Content = styled(motion.main)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

export const RootContainer = () => (
  <>
    <Content {...FramerMotionFadeProps}>
      <Outlet />
    </Content>
  </>
);
