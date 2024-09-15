import {apiSlice} from './apiSlice';
interface IPost {
  id: number;
  name: string;
  email: string;
}

// For query return type
interface IPosts {
  data: IPost[];
}

export const Emp = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllEmployees: builder.query<{data: {data: IPosts[]}}, void>({
      query: () => ({
        url: `users`,
      }),
    }),
    getSingleEmp: builder.query<IPost, string>({
      query: id => ({
        url: `users/${id}`,
      }),
    }),
    addEmp: builder.mutation({
      query: body => ({
        url: 'users',
        method: 'POST',
        body,
      }),
    }),
    editPost: builder.mutation({
      query: ({id, ...body}) => ({
        url: `users/${id}`,
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const {
  useGetAllEmployeesQuery,
  useGetSingleEmpQuery,
  useAddEmpMutation,
  useEditPostMutation,
} = Emp;
