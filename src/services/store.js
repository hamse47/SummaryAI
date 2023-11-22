import { configureStore } from "@reduxjs/toolkit";

// Import the article API slice
import { articleApi } from "./article";

// Configure and export the Redux store
export const store = configureStore({
  // Reducer configuration
  reducer: {
    // Integrating the article API slice reducer with the Redux store
    [articleApi.reducerPath]: articleApi.reducer,
  },

  // Middleware configuration
  middleware: (getDefaultMiddleware) =>
    // Combining default middleware with the article API middleware
    getDefaultMiddleware().concat(articleApi.middleware),
});
