import React from 'react';
import { useNavigate } from 'react-router';
import { renderHook } from '@testing-library/react';

import { useRedirect } from './useRedirect';

jest.mock('react-router', () => ({
  useNavigate: jest.fn(),
}));

describe('"useRedirect" util hook', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    mockNavigate.mockClear();
    window.open = jest.fn();
  });

  it('calls "event.preventDefault" and "navigates" from react-router when ctrlKey is not pressed during click event', () => {
    const { result } = renderHook(() => useRedirect());
    const handler = result.current('/test');

    const fakeEvent = {
      preventDefault: jest.fn(),
      ctrlKey: false,
    } as unknown as React.MouseEvent;

    handler(fakeEvent);

    expect(fakeEvent.preventDefault).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('/test');
    expect(window.open).not.toHaveBeenCalled();
  });

  it('calls "event.preventDefault" and opens a new tab when ctrlKey is pressed during click event', () => {
    const { result } = renderHook(() => useRedirect());
    const handler = result.current('/test');

    const fakeEvent = {
      preventDefault: jest.fn(),
      ctrlKey: true,
    } as unknown as React.MouseEvent;

    handler(fakeEvent);

    expect(fakeEvent.preventDefault).toHaveBeenCalled();
    expect(window.open).toHaveBeenCalledWith('/test', '_blank');
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
