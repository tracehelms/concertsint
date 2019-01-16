import React, { Component } from "react";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";

import HeaderNav from "./HeaderNav";
import rootReducer from "../store";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <HeaderNav />
            <div className="container">
              <h1 className="is-size-1">Concert Interview App</h1>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
