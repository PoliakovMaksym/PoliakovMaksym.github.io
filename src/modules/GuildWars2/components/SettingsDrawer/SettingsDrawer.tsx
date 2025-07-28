import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Divider, IconButton, Typography } from '@mui/material';

import { Drawer, DrawerContent, DrawerHeader } from './SettingsDrawer.styled';

export const SettingsDrawer = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawerOpen = React.useCallback(
    (newDrawerState: boolean) => () => setDrawerOpen(newDrawerState),
    [],
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

        <DrawerContent spacing={1}>WIP</DrawerContent>
      </Drawer>
    </>
  );
};
