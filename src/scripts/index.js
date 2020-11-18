import 'regenerator-runtime';
import '../styles/main.sass';
import React from 'react';
import ReactDOM from 'react-dom';

// component
import AppBar from '@/components/AppBar.js';
import ExploreMovie from '@/views/ExploreMovie.js';
import ModeTheme from '@/components/ModeTheme.js';

// utils
import initThemeFirst from '@/utils/theme-init.js';
import swRegister from '@/utils/sw-register';

const RenderComponent = {
  appBar() {
    ReactDOM.render(
        <AppBar title="Movie Catalogue"/>,
        document.getElementById('appBar'),
    );
  },

  eploreMovie() {
    ReactDOM.render(
        <ExploreMovie/>,
        document.getElementById('mainContent'),
    );
  },

  themeMode() {
    ReactDOM.render(
        <ModeTheme isDark = { initThemeFirst()} />,
        document.getElementById('mode-theme'),
    );
  },

};
window.addEventListener('DOMContentLoaded', (event) => {
  swRegister();
  RenderComponent.appBar();
  RenderComponent.eploreMovie();
  RenderComponent.themeMode();
});
