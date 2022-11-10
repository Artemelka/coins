import { appThemeServices } from '@/services/app-theme';

export const bootstrapApp = () => {
  appThemeServices.init();
};