import React from 'react';
import { Dialog, DialogContent, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

import { ModuleRouterBase as BitCraftOnlineModuleRouterBase } from 'modules/BitCraftOnline/router';
import { ModuleRouterBase as GuildWars2ModuleRouterBase } from 'modules/GuildWars2/router';
import { useRedirect } from 'utils';

import { Container, LogoLink, Paragraph, Root, Suggestions, Title } from './Fake404Page.styled';
import { GitHubLogo } from './GitHubLogo';

export const Fake404Page = () => {
  const redirect = useRedirect();
  const [isHiddenContentVisible, setIsHiddenContentVisible] = React.useState(false);

  const hideHiddenContent = React.useCallback(() => setIsHiddenContentVisible(false), []);
  const showHiddenContent = React.useCallback((event: React.MouseEvent) => {
    if (event.altKey) {
      event.preventDefault();
      setIsHiddenContentVisible(true);
    }
  }, []);

  return (
    <>
      <title>Site not found · GitHub Pages</title>

      <Root>
        <Container>
          <Title>404</Title>

          <Paragraph>
            <strong>There isn't a GitHub Pages site here.</strong>
          </Paragraph>

          <Paragraph>
            If you're trying to publish one,{' '}
            <a href='https://help.github.com/pages/'>read the full documentation</a> to learn how to
            set up <strong>GitHub Pages</strong> for your repository, organization, or user account.
          </Paragraph>

          <Suggestions>
            <a href='https://githubstatus.com'>GitHub Status</a> —{' '}
            <a href='https://twitter.com/githubstatus'>@githubstatus</a>
          </Suggestions>

          <LogoLink href='/' onClick={showHiddenContent}>
            <GitHubLogo />
          </LogoLink>
        </Container>
      </Root>

      <Dialog open={isHiddenContentVisible} onClose={hideHiddenContent}>
        <DialogContent>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={redirect(GuildWars2ModuleRouterBase)}>
                <ListItemText primary='Guild Wars 2' />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={redirect(BitCraftOnlineModuleRouterBase)}>
                <ListItemText primary='BitCraft Online' />
              </ListItemButton>
            </ListItem>
          </List>
        </DialogContent>
      </Dialog>
    </>
  );
};
