import 'regenerator-runtime';
import '../styles/main.sass';

import React from 'react';
import ReactDOM from 'react-dom';

const AppBar = (props) => {
    return (
        <div className="card-1">
            <h1> {props.title} </h1>
        </div>
    );
}

ReactDOM.render(
    <AppBar title="Movie Catalogue"/>,
    document.getElementById('appBar')
)
