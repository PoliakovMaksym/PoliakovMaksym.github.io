import { render, screen } from 'testUtils';

import { Header } from './Header';

describe('Header component', () => {
  it('should render without crashing', () => {
    render(<Header />);

    const header = screen.queryByTestId(Header._jestTestId);
    expect(header).toBeInTheDocument();
  });
});
