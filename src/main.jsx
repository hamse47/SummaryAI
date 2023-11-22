import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./services/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 
      The Provider component from react-redux allows your Redux store to be accessible
      to any nested components that have been wrapped in the connect() function.
    */}
    <Provider store={store}>
      {/* App component is the root component of your application */}
      <App />
    </Provider>
  </React.StrictMode>
);
