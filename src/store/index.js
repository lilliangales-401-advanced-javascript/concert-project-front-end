import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import concerts from './reducers/concerts';

const reducers = combineReducers({
  concerts,
});

const store = () => createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store; 
