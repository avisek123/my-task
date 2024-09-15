import {SafeAreaView} from 'react-native';
import React from 'react';
import {useGetSingleEmpQuery} from '../../services/EmpApi';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import {PrivateRootRouteProps} from '../../types/allRoutes';
import {colors, wrapper} from '../../styles';
import {Lists, Loader} from '../../components';

const Details = () => {
  const {params} = useRoute<PrivateRootRouteProps<'Details'>>();
  const {data, isLoading, refetch} = useGetSingleEmpQuery(params?.id);
  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [refetch]),
  );
  return (
    <SafeAreaView style={[wrapper, {backgroundColor: colors.white}]}>
      {isLoading ? (
        <Loader />
      ) : (
        <Lists
          email={data?.email ?? ''}
          name={data?.name ?? ''}
          id={data?.id ?? ''}
        />
      )}
    </SafeAreaView>
  );
};

export default Details;
