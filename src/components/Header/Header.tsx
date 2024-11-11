import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

import { MenuIcon } from 'icons';

import { Settings } from './Settings';

export const Header = () => (
  <React.Fragment>
    <AppBar data-testid={Header._jestTestId}>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit'>
          <MenuIcon />
        </IconButton>

        <Typography variant='h6' component='div' textAlign='center' sx={{ flexGrow: 1 }}>
          Raid Boss Timers
        </Typography>

        <Settings />
      </Toolbar>
    </AppBar>
    <Toolbar />
  </React.Fragment>
);

Header._jestTestId = 'header-component';
