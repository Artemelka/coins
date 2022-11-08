export const setAppTheme = (themeName: string) => {
  document.getElementsByTagName('body')[0].setAttribute('theme', themeName);
};