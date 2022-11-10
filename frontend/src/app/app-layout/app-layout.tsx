import React, { memo } from 'react';
import { AppRouterSwitch, Route, AppRouterProps } from '@/app/router';

type AppLayoutProps = {
  routes: Array<AppRouterProps>;
};

export const AppLayoutComponent = ({ routes }: AppLayoutProps) => {
  return (
    <AppRouterSwitch>
      {routes.map(props => <Route {...props} />)}
    </AppRouterSwitch>
  );
};

export const AppLayout = memo(AppLayoutComponent);