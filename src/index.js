import { StrictMode } from "react";
import ReactDOM from "react-dom";
import fontawesome from "./fontawesome";
import App from "./App";
//import store from "./store";
import { PersistGate } from 'redux-persist/integration/react'

import {Provider} from "react-redux";
import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';


import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './services/reducers/index';

const rootElement = document.getElementById("root");
 
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer, composeWithDevTools(
  applyMiddleware(thunk)
  ))
let persistor = persistStore(store)


// const store = createStore(rootReducer, composeWithDevTools(
//   applyMiddleware(thunk)
//   ));


ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </StrictMode>,
  rootElement
);
