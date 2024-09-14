import {FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import {wrapper} from '../../styles';
import {FabBtn, Lists} from '../../components';
import {useGetAllPostsQuery} from '../../services';

const Home = () => {
  const {data, isLoading} = useGetAllPostsQuery();
  return (
    <SafeAreaView style={wrapper}>
      <FlatList
        data={data}
        keyExtractor={item => item?.id?.toString()}
        renderItem={({item}) => (
          <Lists title={item.title} desc={item.body} isLoading={isLoading} /> // Passing props to Lists
        )}
      />
      <FabBtn onPress={() => {}} />
    </SafeAreaView>
  );
};

export default Home;
