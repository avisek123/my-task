import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useGetSingleEmpQuery} from '../../services/EmpApi';
import {useRoute} from '@react-navigation/native';
import {PrivateRootRouteProps} from '../../types/allRoutes';
import {colors, wrapper} from '../../styles';
import {Loader} from '../../components';

const Details = () => {
  const {params} = useRoute<PrivateRootRouteProps<'Details'>>();
  const {data, isLoading} = useGetSingleEmpQuery(params?.id);
  return (
    <SafeAreaView style={[wrapper, {backgroundColor: colors.white}]}>
      {isLoading ? (
        <Loader />
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>Employee Name: {data?.name}</Text>
          <Text style={styles.body}>Employee Email: {data?.email}</Text>
          <Text style={styles.body}>Employee Id: {data?.id}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    color: colors.black,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 18,
    color: colors.greyOne,
    fontWeight: '500',
  },
});
