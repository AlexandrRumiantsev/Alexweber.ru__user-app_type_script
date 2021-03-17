import {createStore, Store, applyMiddleware} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';

import {rootReducer} from './reducers/root'
import {RootState} from './reducers/root'

export const getStore = (state?): Store<RootState> => {  
    const store = createStore<RootState, any, {}, undefined>(
        rootReducer,
            composeWithDevTools(
                applyMiddleware(thunk)
            )
    );
    return store;
}
