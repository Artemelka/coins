import React, { FC, memo } from 'react';
import { ThemeSwitcher } from '@/components';
import logo from "./logo.svg";
import styles from './home-page.module.scss';

type IProps = unknown;

const HomePageComponent: FC<IProps> = (props) => {
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
                <p>
                    <ThemeSwitcher/>
                </p>
            </header>
        </div>
    );
}

export const HomePage = memo(HomePageComponent);