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
    addPost: builder.mutation({
      query: body => ({
        url: 'posts',
        method: 'POST',
        body,
      }),
    }),
    editPost: builder.mutation({
      query: ({id, ...body}) => ({
        url: `posts/${id}`,
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetSinglePostQuery,
  useAddPostMutation,
  useEditPostMutation,
} = Lists;
