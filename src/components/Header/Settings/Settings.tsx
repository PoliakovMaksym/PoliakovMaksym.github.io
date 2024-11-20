import React from 'react';
import { Divider, IconButton, Typography } from '@mui/material';
import merge from 'classnames';

import {
  CloseIcon,
  DarkModeOutlinedIcon,
  LightModeIcon,
  SettingsBrightnessIcon,
  SettingsOutlinedIcon,
} from 'icons';
import { ColorMode, useToggleColorMode } from 'theme/colorMode';
import { utilityClasses } from 'utils';

import { Button, ButtonGroup, Drawer, DrawerContent, DrawerHeader } from './Settings.styled';

export const Settings = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = (newDrawerState: boolean) => () => setDrawerOpen(newDrawerState);

  const { colorMode, toggleColorMode } = useToggleColorMode();
  const isSelected = (buttonColorMode: ColorMode) => buttonColorMode === colorMode;

  return (
    <React.Fragment>
      <IconButton size='large' edge='end' onClick={toggleDrawer(true)}>
        <SettingsOutlinedIcon />
      </IconButton>
      <Drawer
        open={drawerOpen}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
        anchor='right'
      >
        <DrawerHeader>
          <Typography variant='h6' component='div'>
            Settings
          </Typography>
          <IconButton size='medium' edge='end' onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>

        <Divider />

        <DrawerContent spacing={1}>
          <Typography>Mode</Typography>

          <ButtonGroup variant='outlined'>
            <Button
              startIcon={<LightModeIcon />}
              className={merge({ [utilityClasses.selected]: isSelected(ColorMode.Light) })}
              onClick={() => toggleColorMode(ColorMode.Light)}
            >
              Light
            </Button>
            <Button
              startIcon={<SettingsBrightnessIcon />}
              className={merge({ [utilityClasses.selected]: isSelected(ColorMode.System) })}
              onClick={() => toggleColorMode(ColorMode.System)}
            >
              System
            </Button>
            <Button
              startIcon={<DarkModeOutlinedIcon />}
              className={merge({ [utilityClasses.selected]: isSelected(ColorMode.Dark) })}
              onClick={() => toggleColorMode(ColorMode.Dark)}
            >
              Dark
            </Button>
          </ButtonGroup>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
};
