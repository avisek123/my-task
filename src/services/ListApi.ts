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
  }),
});

export const {useGetAllPostsQuery} = Lists;
