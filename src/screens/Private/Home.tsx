import {SafeAreaView} from 'react-native';
import React from 'react';
import {wrapper} from '../../styles';
import {Lists} from '../../components';

const Home = () => {
  return (
    <SafeAreaView style={wrapper}>
      <Lists />
    </SafeAreaView>
  );
};

export default Home;
