import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useGetSinglePostQuery} from '../../services/ListApi';
import {useRoute} from '@react-navigation/native';
import {PrivateRootRouteProps} from '../../types/allRoutes';

const Details = () => {
  const {params} = useRoute<PrivateRootRouteProps<'Details'>>();
  const {data} = useGetSinglePostQuery(params?.id);
  console.log('data', data);
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
