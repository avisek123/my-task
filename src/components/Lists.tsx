import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import {colors} from '../styles';
// Define the props interface
interface ListsProps {
  title: string;
  desc: string;
  isLoading: boolean;
}

const Lists: React.FC<ListsProps> = ({title, desc, isLoading}) => {
  return (
    <View style={styles.listContainer}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={{flex: 1}}>
          <ShimmerPlaceholder
            visible={!isLoading}
            style={styles.shimmerTitle}
            height={20}
            width={100}>
            <Text style={styles.listTitle}>{title}</Text>
          </ShimmerPlaceholder>
          <ShimmerPlaceholder
            visible={!isLoading}
            style={styles.shimmerDesc}
            height={14}
            width={150}>
            <Text style={styles.listDesc}>{desc}</Text>
          </ShimmerPlaceholder>
        </View>
        <TouchableOpacity>
          <MaterialIcons name="mode-edit" color={colors.PRIMARY} size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Lists;

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: colors.white,
    marginTop: 10,
    padding: 10,
  },
  listTitle: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 17,
  },
  listDesc: {
    fontSize: 14,
    color: colors.greyOne,
    width: '100%',
  },
  shimmerTitle: {
    marginBottom: 8,
  },
  shimmerDesc: {
    marginBottom: 8,
  },
});
