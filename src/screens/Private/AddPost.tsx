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
  useAddPostMutation,
  useEditPostMutation,
  useGetSinglePostQuery,
} from '../../services/ListApi';

const AddPost = () => {
  const {params} = useRoute<PrivateRootRouteProps<'AddPost'>>();
  const {goBack} = useNavigation<PrivateNavigationProps>();
  const {data} = useGetSinglePostQuery(params?.id ?? '');
  const [loading, setLoading] = React.useState(false);
  const [addPost, {isSuccess, reset, data: SuccessData}] = useAddPostMutation();
  const [editPost, {isSuccess: editSuccess, reset: editReset, error}] =
    useEditPostMutation();
  const {setOptions} = useNavigation();
  const [title, setTitle] = React.useState('');
  const [desc, setDesc] = React.useState('');
  useLayoutEffect(() => {
    if (params?.id) {
      setOptions({title: 'Edit Post'});
    } else {
      setOptions({title: 'Create a New Post'});
    }
  }, [setOptions, params?.id]);

  useEffect(() => {
    if (params?.id) {
      setTitle(data?.title ?? '');
      setDesc(data?.body ?? '');
    }
  }, [params?.id, data]);

  const onSubmit = async () => {
    try {
      setLoading(true);
      if (!title && !desc)
        return Alert.alert('Error', 'Please fill all the fields.');
      if (!params?.id) {
        await addPost({
          title: title,
          body: desc,
        });
      } else {
        await editPost({
          title: title,
          body: desc,
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
  console.log('isError', error);
  return (
    <SafeAreaView style={[wrapper, {backgroundColor: colors.white}]}>
      <View
        style={{
          margin: 20,
        }}>
        <Text style={styles.label}>Post Title</Text>
        <TextInput
          value={title}
          onChangeText={txt => setTitle(txt)}
          placeholder="Enter title here"
          placeholderTextColor="#888"
          style={styles.input}
        />
        <Text style={styles.label}>Post Description</Text>
        <TextInput
          value={desc}
          onChangeText={txt => setDesc(txt)}
          placeholder="Enter description here"
          placeholderTextColor="#888"
          style={styles.multiInput}
          multiline={true}
          numberOfLines={4}
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

export default AddPost;

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
  multiInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: colors.white,
    color: colors.black,
    textAlignVertical: 'top',
    minHeight: 100,
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
