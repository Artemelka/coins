import React, { memo } from 'react';
import logo from "./logo.svg";
import styles from './app-layout.module.scss';

type AppLayoutProps = {
  routes?: any;
};

export const AppLayoutComponent = ({ routes }: AppLayoutProps) => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export const AppLayout = memo(AppLayoutComponent);