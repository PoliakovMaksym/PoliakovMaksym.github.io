import { Stack, StackProps, styled } from '@mui/material';

const PageContainer = styled(Stack)<StackProps<'main'>>({
  flex: 1,
});

interface PageProps extends StackProps {}

export const Page = (props: PageProps) => (
  <PageContainer data-testid={Page._jestTestId} component='main' {...props}>
    {props.children}
  </PageContainer>
);

Page._jestTestId = 'page-component';
