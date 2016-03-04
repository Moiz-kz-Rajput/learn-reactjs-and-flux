import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import {getContacts} from './utils/appAPI';

getContacts();

ReactDOM.render(
<App />,
  document.getElementById('app')
);