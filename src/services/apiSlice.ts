// apiSlice.ts
import {
  createApi,
  fetchBaseQuery,
  FetchArgs,
} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../configs';
import {saveDataToStorage, getDataFromStorage} from '../utils';
import NetInfo from '@react-native-community/netinfo';

// Define the base query
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

// Base query with enhanced logging, storage integration, and network status check
const baseQueryWithAPI = async (
  args: FetchArgs,
  api?: any,
  extraOptions?: any,
) => {
  const {url, method = 'GET'} = args;

  // Check network status
  const state = await NetInfo.fetch();
  const isOnline = state.isConnected;

  if (!isOnline && method === 'GET' && url) {
    // Device is offline; fetch data from MMKV
    console.log('Fetching data from MMKV storage due to offline status');
    const cachedData = await getDataFromStorage(url);
    if (cachedData) {
      return {data: cachedData}; // Return cached data
    }
    // No data in cache, handle as needed
    return {error: 'No cached data available'};
  }

  // Device is online or method is not GET; fetch data from API
  let result = await baseQuery(args, api, extraOptions);

  if (method === 'GET' && url && result.data) {
    try {
      // Store response data in MMKV
      await saveDataToStorage(url, result.data);
      console.log('Successfully stored data in MMKV');
    } catch (error) {
      console.error('Error saving data to MMKV storage:', error);
    }
  }

  return result;
};

// Create API slice
export const apiSlice = createApi({
  baseQuery: baseQueryWithAPI,
  endpoints: () => ({}),
});
