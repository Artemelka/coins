import React, { PropsWithChildren, memo } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { appRouterMiddleware } from '@/app/router';
import { COINS_PAGE_SAGAS } from '@/pages';
import { appReducer } from '../../app-reducer';

const sagaMiddleware = createSagaMiddleware();

const appStore = configureStore({
  middleware: [
    appRouterMiddleware,
    sagaMiddleware,
  ],
  reducer: appReducer,
});

const APP_SAGAS = [
    ...COINS_PAGE_SAGAS,
];

APP_SAGAS.forEach((saga) => sagaMiddleware.run(saga));


export const ReduxProviderComponent = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Provider store={appStore}>
        {children}
    </Provider>
  );
};

export const ReduxProvider = memo(ReduxProviderComponent);