import { applyMiddleware, compose, createStore } from 'redux'
import reducers from './reducers';

export default (preloadedState) => {
  const middlewareEnhancer = applyMiddleware(...[])

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = compose(...enhancers)

  return createStore(
    reducers,
    preloadedState,
    composedEnhancers
  );
}
