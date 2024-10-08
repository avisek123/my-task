// all external imports
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
// all internal imports
import {PrivateNavigationProps} from '../types/allRoutes';
import {strings} from '../constants/strings';
import {colors} from '../styles';

// Define the props interface
interface ListsProps {
  name: string;
  email: string;
  id: string;
}

const Lists: React.FC<ListsProps> = ({name, email, id}) => {
  const {navigate} = useNavigation<PrivateNavigationProps>();
  const navigateToEditScreen = () => {
    navigate('AddEmp', {
      id,
    });
  };
  return (
    <TouchableOpacity
      onPress={() => {
        navigate('Details', {
          id,
        });
      }}
      style={styles.listContainer}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={{flex: 1}}>
          <Text style={styles.listTitle}>
            {strings.emp_Name} {name}
          </Text>
          <Text style={styles.listDesc}>
            {strings.emp_email} {email}
          </Text>
          <Text style={styles.listDesc}>
            {strings.emp_id} {id}
          </Text>
        </View>
        <TouchableOpacity onPress={navigateToEditScreen}>
          <MaterialIcons name="mode-edit" color={colors.black} size={22} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
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
    width: '95%',
  },
  listDesc: {
    fontSize: 14,
    color: colors.greyOne,
    width: '100%',
    fontWeight: '600',
  },
  shimmerTitle: {
    marginBottom: 8,
  },
  shimmerDesc: {
    marginBottom: 8,
  },
});
