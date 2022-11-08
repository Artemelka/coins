import { AppTheme } from '@/services/app-theme';

const appThemeServices = new AppTheme({
  element: document.getElementsByTagName('body')[0]
});

export const bootstrapApp = () => {
  appThemeServices.init();
};