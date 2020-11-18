import 'regenerator-runtime';
import '../styles/main.sass';

import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@/components/AppBar.js';
import ExploreMovie from '@/views/ExploreMovie.js';
import initThemeFirst from '@/utils/theme-init.js';
import ModeTheme from '@/components/ModeTheme.js';

ReactDOM.render(
    <AppBar title="Movie Catalogue"/>,
    document.getElementById('appBar'),
);

ReactDOM.render(
    <ExploreMovie/>,
    document.getElementById('mainContent'),
);


ReactDOM.render(
    <ModeTheme isDark = { initThemeFirst()} />,
    document.getElementById('mode-theme'),
);
