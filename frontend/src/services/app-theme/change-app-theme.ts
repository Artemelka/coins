import { saveAppTheme } from './save-app-theme';
import { setAppTheme } from './set-app-theme';

export const changeAppTheme = (themeName: string) => {
  saveAppTheme(themeName);
  setAppTheme(themeName);
};