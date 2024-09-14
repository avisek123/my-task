import {apiSlice} from './apiSlice';
interface IPost {
  id: number;
  title: string;
  body: string;
}

// For query return type
interface IPosts {
  data: IPost[];
}

export const Lists = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllPosts: builder.query<{data: {data: IPosts[]}}, void>({
      query: () => ({
        url: `posts`,
      }),
    }),
    getSinglePost: builder.query<IPost, string>({
      query: id => ({
        url: `posts/${id}`,
      }),
    }),
  }),
});

export const {useGetAllPostsQuery, useGetSinglePostQuery} = Lists;
