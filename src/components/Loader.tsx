import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../styles';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.black} size={'large'} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
