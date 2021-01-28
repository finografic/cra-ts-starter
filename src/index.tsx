// POLYFILLS
import 'regenerator-runtime/runtime';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

// BASE IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';

// UTILS
import reportWebVitals from './reportWebVitals';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

// STORE
import { GlobalProvider } from 'store';

// MAIN APP ENTRY
import App from 'containers/App';

const MOUNT_NODE = document.getElementById('app')  as HTMLElement;

const Root =  () => (
  <React.StrictMode>
    <GlobalProvider>
      <Router>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </Router>
    </GlobalProvider>
  </React.StrictMode>
);

const render = () => {
  ReactDOM.render(<Root />, MOUNT_NODE);
};

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  OfflinePluginRuntime.install();
}