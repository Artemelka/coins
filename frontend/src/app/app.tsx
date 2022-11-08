import React, {memo, useEffect} from 'react';
import { ReduxProvider } from './redux';
import { AppRouterProvider } from './router';
import { AppLayout } from './app-layout';
import { bootstrapApp } from './_utils/bootstrap-app';

export const AppContainer = () => {
  useEffect(() => {
    bootstrapApp();
  }, []);

  return (
    <ReduxProvider>
      <AppRouterProvider>
        <AppLayout />
      </AppRouterProvider>
    </ReduxProvider>
  );
}

export const App = memo(AppContainer);
