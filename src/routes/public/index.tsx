import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PublicStackParams} from '../../types/allRoutes';
import {Public} from '../../screens';

const Stack = createNativeStackNavigator<PublicStackParams>();
const PublicRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Public.Login} />
    </Stack.Navigator>
  );
};

export default PublicRoutes;
