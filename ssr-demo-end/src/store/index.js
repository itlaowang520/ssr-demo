import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default function createStoreInstance(preloadedState = {}) {
    return createStore(reducers, preloadedState, applyMiddleware(thunk));
}

// const store = createStore(reducers, applyMiddleware(thunk));
//
// export default store;
