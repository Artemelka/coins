import React, { FC, memo, PropsWithChildren } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../../history';

export const AppRouterProviderComponent: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <ConnectedRouter history={history}>
      {children}
    </ConnectedRouter>
  );
};

export const AppRouterProvider = memo(AppRouterProviderComponent);