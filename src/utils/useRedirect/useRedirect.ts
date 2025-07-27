import React from 'react';
import { useNavigate } from 'react-router';

export const useRedirect = () => {
  const navigate = useNavigate();
  return React.useCallback(
    (redirectTarget: string) => (event: React.MouseEvent) => {
      event.preventDefault();

      if (event.ctrlKey) window.open(redirectTarget, '_blank');
      else navigate(redirectTarget);
    },
    [navigate],
  );
};
