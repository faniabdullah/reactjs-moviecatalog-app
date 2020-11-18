const initThemeFirst = () => {
  if (localStorage.getItem('preferredTheme') === 'dark') {
    return true;
  } else {
    return false;
  }
};

export default initThemeFirst;
