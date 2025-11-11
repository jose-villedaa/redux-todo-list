import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Post } from "../types";

export const itemApi = createApi({
    reducerPath: "itemsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
    tagTypes: ['Posts', 'Post'],
    endpoints: (builder) => ({
        getItems: builder.query<Post[], number>({
            query: (limit: number) => `posts?_limit=${limit}`,
            providesTags: ['Posts'],
        }),
        deleteItem: builder.mutation<void, number>({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Posts'],
        }),
        getItem: builder.query<Post, number>({
            query: (id: number) => `posts/${id}`,
            providesTags: (_result, _error, id) => [{ type: 'Post', id }],
        }),
    }),
})

export const { useGetItemsQuery, useDeleteItemMutation, useGetItemQuery } = itemApi;