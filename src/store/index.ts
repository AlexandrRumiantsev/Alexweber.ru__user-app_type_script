import {createStore, Store, applyMiddleware} from 'redux'

import {rootReducer} from './reducers/root'
import {RootState} from './reducers/root'

import {composeWithDevTools} from "redux-devtools-extension";

import thunk from 'redux-thunk';

export const getStore = (state?): Store<RootState> => {
  
    const store = createStore<RootState, any, {}, undefined>(
        rootReducer,
            composeWithDevTools(
                applyMiddleware(thunk)
            )
    )
      
    return store
}
