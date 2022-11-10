import React, { FC, memo, useState } from 'react';
import { appThemeServices } from '@/services/app-theme';
import logo from "./logo.svg";
import styles from './home-page.module.scss';

type IProps = unknown;

const HomePageComponent: FC<IProps> = (props) => {
    const [checked, setChecked] = useState(appThemeServices.get() === 'dark');

    const handleChange = () => {
        const nextValue = !checked;

        setChecked(nextValue);
        appThemeServices.change(nextValue ? 'dark':  'light');
    };

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
                    <input id="themeCheckbox" type="checkbox" onChange={handleChange} checked={checked}/>
                    <label htmlFor="themeCheckbox">Dark theme</label>
                </p>
            </header>
        </div>
    );
}

export const HomePage = memo(HomePageComponent);