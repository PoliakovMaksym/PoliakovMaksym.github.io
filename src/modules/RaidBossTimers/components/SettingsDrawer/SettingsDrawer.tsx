import React from 'react';
import { Divider, IconButton, Typography } from '@mui/material';

import { ColorMode, useToggleColorMode } from 'theme/colorMode';

import {
  CloseIcon,
  DarkModeOutlinedIcon,
  LightModeIcon,
  SettingsBrightnessIcon,
  SettingsOutlinedIcon,
} from '../../icons';

import { Button, ButtonGroup, Drawer, DrawerContent, DrawerHeader } from './SettingsDrawer.styled';

export const SettingsDrawer = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawerOpen = React.useCallback(
    (newDrawerState: boolean) => () => setDrawerOpen(newDrawerState),
    [],
  );

  const { colorMode, toggleColorMode } = useToggleColorMode();

  const handleColoModeChange = React.useCallback(
    (newColorMode: ColorMode) => () => toggleColorMode(newColorMode),
    [toggleColorMode],
  );

  return (
    <>
      <IconButton size='large' edge='end' color='inherit' onClick={toggleDrawerOpen(true)}>
        <SettingsOutlinedIcon />
      </IconButton>

      <Drawer
        open={drawerOpen}
        onOpen={toggleDrawerOpen(true)}
        onClose={toggleDrawerOpen(false)}
        anchor='right'
      >
        <DrawerHeader>
          <Typography variant='h6' component='div'>
            Settings
          </Typography>

          <IconButton size='medium' edge='end' color='inherit' onClick={toggleDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>

        <Divider />

        <DrawerContent spacing={1}>
          <Typography>Mode</Typography>

          <ButtonGroup variant='outlined'>
            <Button
              startIcon={<LightModeIcon />}
              selected={colorMode === ColorMode.Light}
              onClick={handleColoModeChange(ColorMode.Light)}
            >
              Light
            </Button>

            <Button
              startIcon={<SettingsBrightnessIcon />}
              selected={colorMode === ColorMode.System}
              onClick={handleColoModeChange(ColorMode.System)}
            >
              System
            </Button>

            <Button
              startIcon={<DarkModeOutlinedIcon />}
              selected={colorMode === ColorMode.Dark}
              onClick={handleColoModeChange(ColorMode.Dark)}
            >
              Dark
            </Button>
          </ButtonGroup>
        </DrawerContent>
      </Drawer>
    </>
  );
};
