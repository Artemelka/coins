import React, { FC, memo, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { AppRouterSwitch, Route } from '@/app/router';
import { COINS_CHILDREN_PAGE_ROUTE_CONFIGS } from './children';
import { COINS_CHILDREN_PATH } from './constants';

type CoinsPageProps = RouteComponentProps;

const CoinsPageComponent: FC<CoinsPageProps> = ({
  location,
  history,
}) => {
    useEffect(() => {
      if (location?.pathname === '/coins') {
        history.push(COINS_CHILDREN_PATH.REGIONS)
      }
    }, [location, history]);

    return (
        <AppRouterSwitch>
            {COINS_CHILDREN_PAGE_ROUTE_CONFIGS.map(props => (
                <Route key={props.path} {...props} />
            ))}
      </AppRouterSwitch>
    );
}

export const CoinsPage = memo(CoinsPageComponent);