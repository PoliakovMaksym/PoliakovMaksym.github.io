import React from 'react';
import { Stack, StackProps, styled } from '@mui/material';

import { WithFixForStyled } from 'types';

const PageContainer = styled(Stack)<StackProps & WithFixForStyled>({
  flex: 1,
});

interface PageProps {
  children: React.ReactNode;
}

export const Page = (props: PageProps) => {
  return (
    <PageContainer data-testid={Page._jestTestId} component='main'>
      {props.children}
    </PageContainer>
  );
};

Page._jestTestId = 'page-component';
