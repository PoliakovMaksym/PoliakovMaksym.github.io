import { render, screen } from 'testUtils';

import { Page } from './Page';

describe('Page component', () => {
  it('should render without crashing', () => {
    render(<Page>children</Page>);

    const page = screen.queryByTestId(Page._jestTestId);
    expect(page).toBeInTheDocument();
  });

  it('should render passed children', () => {
    render(
      <Page>
        <div data-testid='child-1'>1</div>
        <div data-testid='child-2'>2</div>
      </Page>,
    );

    const child1 = screen.queryByTestId('child-1');
    const child2 = screen.queryByTestId('child-2');

    expect(child1).toBeInTheDocument();
    expect(child2).toBeInTheDocument();
  });
});
