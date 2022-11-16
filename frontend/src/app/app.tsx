import React, { FC, memo, useEffect } from 'react';
import { ReduxProvider } from './redux';
import { AppRouterProvider } from './router';
import { AppLayout } from './app-layout';
import { PAGES_ROUTES_CONFIG } from '@/pages';
import { bootstrapApp } from './_utils/bootstrap-app';

export const AppContainer: FC = () => {
  useEffect(() => {
    bootstrapApp();
  }, []);

  return (
    <ReduxProvider>
      <AppRouterProvider>
        <AppLayout routes={PAGES_ROUTES_CONFIG}/>
      </AppRouterProvider>
    </ReduxProvider>
  );
}

export const App = memo(AppContainer);
