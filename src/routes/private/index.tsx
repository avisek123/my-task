import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PrivateStackParams} from '../../types/allRoutes';
import {Private} from '../../screens';

const Stack = createNativeStackNavigator<PrivateStackParams>();
const PrivateRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Private.Home} />
      <Stack.Screen name="Details" component={Private.Details} />
      <Stack.Screen name="AddEmp" component={Private.AddEmp} />
    </Stack.Navigator>
  );
};

export default PrivateRoutes;
