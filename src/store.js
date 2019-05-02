import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import reducers
import mainReducer from './reducers';

// const initialState = {};
const middleware = [thunk];

// Add LS
const storageState = localStorage.getItem('dates') ? JSON.parse(localStorage.getItem('dates')) : [];

const store = createStore(mainReducer, storageState, compose(applyMiddleware(...middleware), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;