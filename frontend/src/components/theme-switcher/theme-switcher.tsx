import React, { FC, memo, useState } from 'react';
import { appThemeServices } from '@/services/app-theme';
import styles from './theme-switcher.module.scss';

const ThemeSwitcherComponent: FC<unknown> = () => {
    const [checked, setChecked] = useState(appThemeServices.get() === 'dark');

    const handleChange = () => {
        const nextValue = !checked;

        setChecked(nextValue);
        appThemeServices.change(nextValue ? 'dark':  'light');
    };

    return (
        <p className={styles.root}>
            <input
                className={styles.input}
                id="themeCheckbox"
                type="checkbox"
                onChange={handleChange}
                checked={checked}
            />
            <label
                className={styles.label}
                htmlFor="themeCheckbox"
            >
                Dark theme
            </label>
        </p>
    );
}

export const ThemeSwitcher = memo(ThemeSwitcherComponent);