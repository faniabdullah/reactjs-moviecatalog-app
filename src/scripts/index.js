import 'regenerator-runtime';
import '../styles/main.sass';

import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@/components/AppBar.js';
import ExploreMovie from '@/views/ExploreMovie.js';

ReactDOM.render(
    <AppBar title="Movie Catalogue"/>,
    document.getElementById('appBar'),
);

ReactDOM.render(
    <ExploreMovie/>,
    document.getElementById('mainContent'),
);
