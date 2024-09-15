// all external imports
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {FlatList, SafeAreaView, Text} from 'react-native';
import React from 'react';
// all internal imports
import {PrivateNavigationProps} from '../../types/allRoutes';
import {FabBtn, Lists, Loader} from '../../components';
import {useGetAllEmployeesQuery} from '../../services';
import {wrapper} from '../../styles';

const Home = () => {
  const {navigate} = useNavigation<PrivateNavigationProps>();
  const {data, isLoading, refetch, error, isError} = useGetAllEmployeesQuery();

  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [refetch]),
  );

  return (
    <SafeAreaView style={wrapper}>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Text>{error?.data || 'Something went wrong!'}</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item?.id?.toString()}
          renderItem={({item}) => (
            <Lists name={item.name} id={item?.id} email={item.email} /> // Passing props to Lists
          )}
        />
      )}

      <FabBtn
        onPress={() => {
          navigate('AddEmp');
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
