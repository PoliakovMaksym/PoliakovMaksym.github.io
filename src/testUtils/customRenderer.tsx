import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render as RTL_render, RenderOptions, RenderResult } from '@testing-library/react';

interface WrapperProps {
  Provider: React.JSXElementConstructor<any> | undefined;
  children: React.ReactNode;
  shouldUseProvider: boolean;
  providerProps?: Record<any, any>;
}

const Wrapper = (props: WrapperProps) => {
  const { Provider, children, shouldUseProvider, providerProps = {} } = props;
  const useProvider = shouldUseProvider && Provider;

  return useProvider ? <Provider {...providerProps}>{children}</Provider> : <>{children}</>;
};

export const render = (
  UIComponent: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult => {
  const CustomWrapper = ({ children }: { children: React.ReactNode }) => (
    <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Wrapper Provider={options?.wrapper} shouldUseProvider={Boolean(options?.wrapper)}>
        {children}
      </Wrapper>
    </MemoryRouter>
  );

  return RTL_render(UIComponent, { ...options, wrapper: CustomWrapper });
};
