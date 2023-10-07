import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {authRouter} from '../constants/navigators';

export type AuthNavigationProps = NativeStackNavigationProp<AuthStackParamList>;

export type AuthStackParamList = {
  Login: undefined;
  ForgotPassword: undefined;
  Registration: undefined;
  Welcome: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={
          authRouter.find(n => n.name === 'Welcome')
            ?.name as keyof AuthStackParamList
        }
        screenOptions={{
          headerBackTitleVisible: false,
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'tomato'},
        }}>
        <Stack.Group>
          {authRouter.map(screen => {
            return (
              <Stack.Screen
                key={screen.id}
                name={screen.name as keyof AuthStackParamList}
                component={screen.component}
                options={screen.options}
              />
            );
          })}
        </Stack.Group>
      </Stack.Navigator>
    </>
  );
};

export default AuthNavigator;
