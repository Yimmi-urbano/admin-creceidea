import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.hydrate(
  React.createElement('h1', null, '¡Hola desde el cssliente!'),
  document.getElementById('root')
);
