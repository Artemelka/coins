import React, { PropsWithChildren, memo } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../../history';

export const AppRouterProviderComponent = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <ConnectedRouter history={history}>
      {children}
    </ConnectedRouter>
  );
};

export const AppRouterProvider = memo(AppRouterProviderComponent);