import React, { FC, memo } from 'react';
import { AppRouterSwitch, Route, AppRouterProps } from '@/app/router';
import { ThemeSwitcher } from '@/components';
import styles from './app-layout.module.scss';

type AppLayoutProps = {
  routes: Array<AppRouterProps>;
};

export const AppLayoutComponent: FC<AppLayoutProps> = ({ routes }) => {
  return (
      <div className={styles.root}>
        <header className={styles.header}>
            <ThemeSwitcher/>
        </header>
        <main className={styles.main}>
          <AppRouterSwitch pathToRedirect="/coins">
            {routes.map(props => <Route key={props.path} {...props} />)}
          </AppRouterSwitch>
        </main>
      </div>
  );
};

export const AppLayout = memo(AppLayoutComponent);