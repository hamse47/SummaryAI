import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Retrieve the API key from environment variables
const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

// Create a Redux Toolkit API slice for article data
export const articleApi = createApi({
  // Unique identifier for this API slice
  reducerPath: "articleApi",

  // Base query setup with the base URL and headers preparation
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      // Setting the necessary headers for API requests
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );

      return headers;
    },
  }),

  // Define API endpoints and corresponding queries
  endpoints: (builder) => ({
    // 'getSummary' endpoint for fetching article summaries
    getSummary: builder.query({
      // Define the query with URL parameters
      // Using encodeURIComponent to safely encode URL parameters
      query: (params) =>
        `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

// Export the auto-generated hook for the 'getSummary' query
export const { useLazyGetSummaryQuery } = articleApi;
