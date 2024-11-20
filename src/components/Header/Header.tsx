import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

import { BOSSES } from 'data';
import { KeyboardBackspaceIcon } from 'icons';
import { FramerMotionFadeProps } from 'utils';

import { BossIcon, HomeButton } from './Header.styled';
import { Settings } from './Settings';

export const Header = () => {
  const location = useLocation();
  const navigation = useNavigate();

  const isHomePage = location.pathname === '/';

  const handleHomeButtonClick = React.useCallback(() => {
    if (!isHomePage) navigation(-1);
  }, [isHomePage, navigation]);

  const selectedBoss = React.useMemo(
    () => BOSSES.find(bossInfo => `/${bossInfo.code}` === location.pathname),
    [location.pathname],
  );

  return (
    <React.Fragment>
      <AppBar data-testid={Header._jestTestId}>
        <Toolbar>
          <AnimatePresence>
            <Box component={motion.div} {...FramerMotionFadeProps}>
              <HomeButton
                size='large'
                edge='start'
                hidden={isHomePage}
                onClick={handleHomeButtonClick}
              >
                <KeyboardBackspaceIcon />
              </HomeButton>
            </Box>
          </AnimatePresence>

          <AnimatePresence>
            <Stack
              component={motion.div}
              {...FramerMotionFadeProps}
              flexGrow={1}
              direction='row'
              justifyContent='center'
              alignItems='center'
              spacing={1}
            >
              {selectedBoss && (
                <BossIcon
                  src={`/assets/${selectedBoss.code}/${selectedBoss.icon}`}
                  alt={selectedBoss.name}
                />
              )}

              <Typography variant='h6' textAlign='center'>
                {selectedBoss?.name}
              </Typography>
            </Stack>
          </AnimatePresence>

          <Settings />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};

Header._jestTestId = 'header-component';
