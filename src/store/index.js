import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import companyReducer from './reducers/company'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  company : companyReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store