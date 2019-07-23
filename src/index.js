import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import configureStore from './store/configureStore';
import { PublicRoutes } from './Routes';
import * as serviceWorker from './serviceWorker';
import theme from './theme';
import './index.css';

const store = configureStore({});

const renderApp = () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <PublicRoutes />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
  );
};

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./components/App', renderApp);
}

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
