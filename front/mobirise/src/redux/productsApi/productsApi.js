// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { BASE_URL } from '../../api'

// export const productsApi = createApi({
//   reducerPath: 'productsApi',
//   baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
//   tagTypes: ['Products'],
//   endpoints: (builder) => ({
//     getAllProducts: builder.query({
//       query: () => 'products',
//       providesTags: ['Products'],
//     }),
//     getProductByName: builder.query({
//       query: (name) => `/${name}`,
//     }),
//     createProduct: builder.mutation({
//       query: (newCategory) => ({
//         url: '/',
//         method: 'POST',
//         body: newCategory,
//       }),
//       invalidatesTags: ['Products'],
//     }),
//     updateProduct: builder.mutation({
//       query: ({ id, ...put }) => ({
//         url: `/${id}`,
//         method: 'PUT',
//         body: put,
//       }),
//       invalidatesTags: ['Products'],
//     }),
//     partialUpdateProduct: builder.mutation({
//       query: ({ id, ...patch }) => ({
//         url: `/${id}`,
//         method: 'PATCH',
//         body: patch,
//       }),
//       invalidatesTags: ['Products'],
//     }),
//     deleteProduct: builder.mutation({
//       query: (id) => ({
//         url: `/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Products'],
//     }),
//   }),
// })


// export const {
//     useGetAllProductsQuery,
//     useGetProductByNameQuery,
//     useCreateProductMutation,
//     useUpdateProductMutation,
//     usePartialUpdateProductMutation,
//     useDeleteProductMutation,
// } = productsApi