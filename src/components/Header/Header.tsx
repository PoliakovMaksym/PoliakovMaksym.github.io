import React from 'react';
import { Box, BoxProps, styled } from '@mui/material';

import { WithFixForStyled } from 'types';

const HeaderElement = styled(Box)<BoxProps & WithFixForStyled>({});

export const Header = () => {
  return (
    <HeaderElement data-testid={Header._jestTestId} component='header'>
      Header
    </HeaderElement>
  );
};

Header._jestTestId = 'header-component';
