import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import * as AppAPI from './utils/appAPI';

AppAPI.getNotes();

ReactDOM.render(
<App />,
  document.getElementById('app')
);