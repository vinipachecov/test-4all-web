import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import reducers from './reducers';

const middleware = createSagaMiddleware();
// allow dev tools only in development
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(middleware),
));

middleware.run(sagas);

export default store;
