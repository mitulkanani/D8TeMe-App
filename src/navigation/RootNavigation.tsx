import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoginScreen from '../screens/Auth/Login/LoginScreen';
import { COLOR_PRIMARY } from '../utils/constants/colors';
import IntroScreen from '../screens/Auth/Introduction/IntroScreen';
import RegisterScreen from '../screens/Auth/Register/RegisterScreen';
import ConfirmEmailScreen from '../screens/Auth/Login/ConfirmEmailScreen';
import RegisterWithPhoneNumberScreen from '../screens/Auth/Login/RegisterWithPhoneNumberScreen';
import SubscriptionPlanScreen from '../screens/Auth/SubscriptionPlan/SubscriptionPlanScreen';
import WelcomePageScreen from '../screens/Auth/WelcomePage/WelcomePageScreen';
const AuthStack = createStackNavigator();
const AuthNavigator = () => {
    return (
      <AuthStack.Navigator
        screenOptions={{ title: '', headerTintColor: COLOR_PRIMARY }}>
        <AuthStack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }}/>
        <AuthStack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: true }}/>
        <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }}/>
        <AuthStack.Screen name="ConfirmEmailScreen" component={ConfirmEmailScreen} options={{ headerShown: true }}/>
        <AuthStack.Screen name="RegisterWithPhoneNumberScreen" component={RegisterWithPhoneNumberScreen} options={{ headerShown: true }}/>
        <AuthStack.Screen name="SubscriptionPlanScreen" component={SubscriptionPlanScreen} options={{ headerShown: false }}/>
        <AuthStack.Screen name="WelcomePageScreen" component={WelcomePageScreen} options={{ headerShown: false }}/>
      </AuthStack.Navigator>
    );
  };
export const RootNavigation = () => {
    return <AuthNavigator />;
}