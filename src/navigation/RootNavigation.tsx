import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoginScreen from '../screens/Auth/Login/LoginScreen';
import { COLOR_PRIMARY } from '../utils/constants/colors';
const AuthStack = createStackNavigator();
const AuthNavigator = () => {
    return (
      <AuthStack.Navigator
        screenOptions={{ title: '', headerTintColor: COLOR_PRIMARY }}>
        <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      </AuthStack.Navigator>
    );
  };
export const RootNavigation = () => {
    return <AuthNavigator />;
}