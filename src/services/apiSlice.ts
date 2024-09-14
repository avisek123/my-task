import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../configs';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});
const baseQueryWithReauth = async (
  args?: any,
  api?: any,
  extraOptions?: any,
) => {
  let result = await baseQuery(args, api, extraOptions);
  console.log('result', result);

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
