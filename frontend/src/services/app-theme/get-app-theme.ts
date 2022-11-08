export const getAppTheme = (): string => {
  return localStorage.getItem('themeName') || 'light';
};