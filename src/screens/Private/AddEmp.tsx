/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useLayoutEffect} from 'react';
import {colors, wrapper} from '../../styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  PrivateNavigationProps,
  PrivateRootRouteProps,
} from '../../types/allRoutes';
import {
  useAddEmpMutation,
  useEditPostMutation,
  useGetSingleEmpQuery,
} from '../../services/EmpApi';
import {isValidEmail} from '../../utils';

const AddEmp = () => {
  const {params} = useRoute<PrivateRootRouteProps<'AddEmp'>>();
  const {goBack} = useNavigation<PrivateNavigationProps>();
  const {data} = useGetSingleEmpQuery(params?.id ?? '');
  const [loading, setLoading] = React.useState(false);
  const [addEmp, {isSuccess, reset}] = useAddEmpMutation();
  const [
    editPost,
    {isSuccess: editSuccess, reset: editReset, data: editData, error},
  ] = useEditPostMutation();
  const {setOptions} = useNavigation();
  const [empName, setEmpName] = React.useState('');
  const [empEmail, setEmpEmail] = React.useState('');
  useLayoutEffect(() => {
    if (params?.id) {
      setOptions({title: 'Edit Employee'});
    } else {
      setOptions({title: 'Create Employee'});
    }
  }, [setOptions, params?.id]);

  useEffect(() => {
    if (params?.id) {
      setEmpName(data?.name ?? '');
      setEmpEmail(data?.email ?? '');
    }
  }, [params?.id, data]);

  const onSubmit = async () => {
    if (!isValidEmail(empEmail))
      return Alert.alert('Alert', 'Please enter a valid email!');
    try {
      setLoading(true);
      if (!empName && !empEmail)
        return Alert.alert('Error', 'Please fill all the fields.');
      if (!params?.id) {
        await addEmp({
          name: empName,
          email: empEmail,
        });
      } else {
        await editPost({
          name: empName,
          email: empEmail,
          id: params?.id,
        });
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  isSuccess &&
    Alert.alert('Success', 'Successfully submitted', [
      {
        text: 'OK',
        onPress: () => {
          reset();
          goBack();
        },
      },
    ]);
  editSuccess &&
    Alert.alert('Success', 'Successfully edited', [
      {
        text: 'OK',
        onPress: () => {
          editReset();
          goBack();
        },
      },
    ]);
  console.log('error', error);
  return (
    <SafeAreaView style={[wrapper, {backgroundColor: colors.white}]}>
      <View
        style={{
          margin: 20,
        }}>
        <Text style={styles.label}>Employee Name</Text>
        <TextInput
          value={empName}
          onChangeText={txt => setEmpName(txt)}
          placeholder="Enter name here"
          placeholderTextColor="#888"
          style={styles.input}
        />
        <Text style={styles.label}>Employee Email</Text>
        <TextInput
          value={empEmail}
          onChangeText={txt => setEmpEmail(txt)}
          placeholder="Enter email here"
          placeholderTextColor="#888"
          style={styles.input}
        />
        <TouchableOpacity onPress={onSubmit} style={styles.btnWrapper}>
          {loading ? (
            <ActivityIndicator color={colors.white} size={'small'} />
          ) : (
            <Text style={styles.btnText}>Submit</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddEmp;

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    color: '#333', // Dark grey for label text
    marginBottom: 8,
    marginTop: 10,
  },
  input: {
    borderColor: '#ccc', // Light grey border
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: colors.white,
    color: colors.black,
  },
  btnWrapper: {
    marginTop: 30,
    width: '100%',
    height: 40,
    backgroundColor: colors.PRIMARY,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});
