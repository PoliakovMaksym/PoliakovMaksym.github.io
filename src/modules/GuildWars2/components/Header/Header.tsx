import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { AppBar, Box, Stack, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

import { FramerMotionFadeProps } from 'utils';

import { BOSSES } from '../../data';
import { ModuleRouterBase } from '../../router';
import { SettingsDrawer } from '../SettingsDrawer';

import { BossIcon, HomeButton, StyledToolbar } from './Header.styled';

export const Header = () => {
  const location = useLocation();
  const navigation = useNavigate();

  const isHomePage = location.pathname.endsWith(ModuleRouterBase);
  const handleHomeButtonClick = React.useCallback(() => {
    if (!isHomePage) navigation(-1);
  }, [isHomePage, navigation]);

  const selectedBoss = React.useMemo(
    () => BOSSES.find(boss => location.pathname.endsWith(boss.code)),
    [location.pathname],
  );

  return (
    <AppBar position='sticky' data-testid={Header._jestTestId}>
      <StyledToolbar>
        <AnimatePresence>
          <Box component={motion.div} {...FramerMotionFadeProps}>
            <HomeButton
              size='large'
              edge='start'
              color='inherit'
              hidden={isHomePage}
              onClick={handleHomeButtonClick}
            >
              <KeyboardBackspaceIcon />
            </HomeButton>
          </Box>
        </AnimatePresence>

        <AnimatePresence>
          {selectedBoss && (
            <Stack
              component={motion.div}
              {...FramerMotionFadeProps}
              flexGrow={1}
              direction='row'
              justifyContent='center'
              alignItems='center'
              spacing={1}
            >
              <BossIcon
                src={`/assets/${selectedBoss.code}/${selectedBoss.icon}`}
                alt={selectedBoss.name}
              />

              <Typography variant='h6' textAlign='center'>
                {selectedBoss?.name}
              </Typography>
            </Stack>
          )}
        </AnimatePresence>

        <SettingsDrawer />
      </StyledToolbar>
    </AppBar>
  );
};

Header._jestTestId = 'header';
