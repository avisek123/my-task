import {FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import {wrapper} from '../../styles';
import {FabBtn, Lists, Loader} from '../../components';
import {useGetAllPostsQuery} from '../../services';
import {clearAllDataFromStorage} from '../../utils';

const Home = () => {
  const {data, isLoading} = useGetAllPostsQuery();

  return (
    <SafeAreaView style={wrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item?.id?.toString()}
          renderItem={({item}) => (
            <Lists
              title={item.title}
              id={item?.id}
              desc={item.body}
              isLoading={isLoading}
            /> // Passing props to Lists
          )}
        />
      )}
      <FabBtn
        onPress={() => {
          clearAllDataFromStorage();
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
