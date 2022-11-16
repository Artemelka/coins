import React, { FC, memo } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../../history';

export const AppRouterProviderComponent: FC = ({ children }) => {
  return (
    <ConnectedRouter history={history}>
      {children}
    </ConnectedRouter>
  );
};

export const AppRouterProvider = memo(AppRouterProviderComponent);