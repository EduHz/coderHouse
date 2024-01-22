import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../../firebase/db";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  tagTypes: ["image"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (category) =>
        `products.json?orderBy="category"&equalTo="${category}"`,
    }),
    getProduct: builder.query({
      query: (id) => `products/${id}.json`,
    }),
    getCategories: builder.query({
      query: () => "categories.json",
    }),
    postOrders: builder.mutation({
      query: (order) => ({
        url: "orders.json",
        method: "POST",
        body: order,
      }),
    }),
    // POST ES PARA CREAR UN RECURSO , PUT ES PARA PODER PISARLO
    postProfileImage: builder.mutation({
      query: ({ localId, image }) => ({
        url: `profileImage/${localId}.json`,
        method: "PUT",
        body: { image },
      }),
      invalidatesTags: ["image"],
    }),
    getProfileImage: builder.query({
      query: (localId) => `profileImage/${localId}.json`,
      providesTags: ["image"],
    }),
    postUserLocation: builder.mutation({
      query: ({ locationFormatted, localId }) => ({
        url: `locations/${localId}.json`,
        method: "PUT",
        body: locationFormatted,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetCategoriesQuery,
  usePostOrdersMutation,
  usePostProfileImageMutation,
  useGetProfileImageQuery,
  usePostUserLocationMutation,
} = shopApi;
