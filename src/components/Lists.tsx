import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Lists = () => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.listTitle}>
        sunt aut facere repellat provident occaecati
      </Text>
      <Text style={styles.listDesc}>
        quia et suscipit\nsuscipit recusandae consequuntur expedita et
        cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem
        sunt rem eveniet architecto
      </Text>
    </View>
  );
};

export default Lists;

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#fff',
    marginTop: 10,
    padding: 10,
  },
  listTitle: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 17,
  },
  listDesc: {
    fontSize: 14,
    color: '#504F54',
  },
});
