import { configureStore } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { TaskDto } from '../../../shared-types/src';

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  tagTypes: ['Task'],
  endpoints: (builder) => ({
    getTasks: builder.query<TaskDto[], void>({
      query: () => 'tasks',
      providesTags: ['Task'],
    }),
  }),
});

export const { useGetTasksQuery } = tasksApi;

export const store = configureStore({
  reducer: {
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tasksApi.middleware),
});
