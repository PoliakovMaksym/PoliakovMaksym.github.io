import userEvent from '@testing-library/user-event';

export { userEvent };
export * from '@testing-library/react';

// Override render method
export { render } from './customRenderer';
