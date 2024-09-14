import {SafeAreaView} from 'react-native';
import React from 'react';
import {wrapper} from '../../styles';
import {FabBtn, Lists} from '../../components';

const Home = () => {
  return (
    <SafeAreaView style={wrapper}>
      <Lists />
      <FabBtn onPress={() => {}} />
    </SafeAreaView>
  );
};

export default Home;
