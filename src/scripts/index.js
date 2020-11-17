import 'regenerator-runtime';
import '../styles/main.sass';

import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@/views/templates/template-creator.js';

import ExploreMovie from '@/views/ExploreMovie.js';

ReactDOM.render(
    <AppBar title="Movie Catalogue"/>,
    document.getElementById('appBar')
)
