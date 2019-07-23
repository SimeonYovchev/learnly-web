import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import monitorReducersEnhancer from './enhancers/monitorReducer';
import loggerMiddleware from './middleware/logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const middlewares = [thunkMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(loggerMiddleware);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, initialState, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}
