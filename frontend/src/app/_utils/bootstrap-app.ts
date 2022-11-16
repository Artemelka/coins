import { appThemeServices } from '@/services/app-theme';

export const bootstrapApp = (): void => {
  appThemeServices.init();
};