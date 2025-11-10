// Imports the React library, which is necessary to define and use React components.
import React from "react";

// Imports the react-dom library, which provides methods to render React components into the DOM.
import ReactDOM from "react-dom";

// Imports the Provider component from react-redux. This component wraps the application and makes the Redux store available to all components.
import { Provider } from "react-redux";

// Imports necessary functions from the Redux library.
// createStore: Creates the Redux store that holds the application's state.
// applyMiddleware: Allows you to use middleware like 'thunk' for asynchronous actions.
// compose: A utility to combine multiple store enhancers (like middleware and dev tools) together.
import { createStore, applyMiddleware, compose } from "redux";

// Imports the redux-thunk middleware. Thunk allows you to write action creators that return a function instead of a plain action object, which is essential for handling asynchronous operations like API calls.
import thunk from "redux-thunk";

// Imports the combined reducers for the application from a local file (likely './reducers/index.js'). Reducers specify how the application's state changes in response to actions.
import { reducers } from "./reducers";

// Imports the main App component, which is the root component of the React application.
import App from "./App";

// Imports a CSS file for global styling.
import "./index.css";

// Creates the Redux store.
// 'reducers' is the root reducer that manages the application state.
// 'compose(applyMiddleware(thunk))' is a store enhancer. 'applyMiddleware(thunk)' applies the thunk middleware to the store, and 'compose' is used to potentially combine it with other enhancers (like Redux DevTools).
const store = createStore(reducers, compose(applyMiddleware(thunk)));

// Renders the entire React application into the DOM.
ReactDOM.render(
  // The Provider component wraps the App. It takes the created Redux 'store' as a prop.
  // This makes the Redux store accessible to any component in the component tree that needs it.
  <Provider store={store}>
    {/* The root component of the application. */}
    <App />
  </Provider>,
  // Specifies the DOM element where the React app should be mounted. It looks for an element with the id 'root' in your HTML file.
  document.getElementById("root")
);

// Redux for State Management
// createStore: This function from Redux creates the centralized store that holds your entire application's state. Without a store, there is no state management.

// reducers: These are the functions that determine how the application's state changes in response to actions. Without reducers, the store has no logic for updating the state.

// Provider: This component from react-redux wraps your application and makes the Redux store available to all components. Without the Provider, your components cannot access the application state or dispatch actions.
