import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type PublicStackParams = {
  Login: undefined;
};

export type PrivateStackParams = {
  Home: undefined;
  Details: {
    id: string;
  };
  AddEmp?: {
    id?: string;
  };
};

export type PublicNavigationProps =
  NativeStackNavigationProp<PublicStackParams>;
export type PrivateNavigationProps =
  NativeStackNavigationProp<PrivateStackParams>;
export type RootRouteProps<RouteName extends keyof PublicStackParams> =
  RouteProp<PublicStackParams, RouteName>;
export type PrivateRootRouteProps<RouteName extends keyof PrivateStackParams> =
  RouteProp<PrivateStackParams, RouteName>;
