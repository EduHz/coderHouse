import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../Firebase/database";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `categories.json`,
    }),
    getProduct: builder.query({
      query: (id) => `products/${id}.json`,
    }),
    getProducts: builder.query({
      query: () => `products.json`,
    }),
    getProductsByCategory: builder.query({
      query: (category) =>
        `products.json?orberBy="category"&equalTo="${category}`,
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
} = shopApi;
