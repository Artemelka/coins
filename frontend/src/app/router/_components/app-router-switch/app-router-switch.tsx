import React, { FC, memo, ReactNode } from 'react';
import { Route, Switch, Redirect } from 'react-router';

type AppRouterSwitchProps = {
  children: ReactNode;
  notFoundPageComponent?: FC;
  pathToRedirect?: string;
};

export const AppRouterSwitchComponent: FC<AppRouterSwitchProps> = ({
  children,
  notFoundPageComponent,
  pathToRedirect,
}) => {
  return (
    <Switch>
      {children}
      {pathToRedirect && <Redirect to={pathToRedirect}/>}
      {notFoundPageComponent && (<Route component={notFoundPageComponent}/>)}
    </Switch>
  );
};

export const AppRouterSwitch = memo(AppRouterSwitchComponent);