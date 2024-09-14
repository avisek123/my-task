import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PrivateStackParams} from '../../types/allRoutes';
import {Private} from '../../screens';

const Stack = createNativeStackNavigator<PrivateStackParams>();
const PrivateRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Private.Home}
      />
    </Stack.Navigator>
  );
};

export default PrivateRoutes;
