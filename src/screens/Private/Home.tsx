import {FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import {wrapper} from '../../styles';
import {FabBtn, Lists, Loader} from '../../components';
import {useGetAllEmployeesQuery} from '../../services';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {PrivateNavigationProps} from '../../types/allRoutes';

const Home = () => {
  const {navigate} = useNavigation<PrivateNavigationProps>();
  const {data, isLoading, refetch} = useGetAllEmployeesQuery();
  console.log('data', data);
  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [refetch]),
  );
  return (
    <SafeAreaView style={wrapper}>
      {isLoading ? (
        <Loader />
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
