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
import UserProfile from '../screens/main/UserProfile/UserProfile';
import Logo from '../assets/icons/logo.svg';
import { ChevronLeftIcon, ChevronsLeftIcon, Icon, VStack } from '@gluestack-ui/themed';
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const RootStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{ title: '', headerTintColor: COLOR_PRIMARY }}>
      <AuthStack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: true }} />
      <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: true }} />
      <AuthStack.Screen name="ConfirmEmailScreen" component={ConfirmEmailScreen} options={{ headerShown: true }} />
      <AuthStack.Screen name="RegisterWithPhoneNumberScreen" component={RegisterWithPhoneNumberScreen} options={{ headerShown: true }} />
      <AuthStack.Screen name="SubscriptionPlanScreen" component={SubscriptionPlanScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="WelcomePageScreen" component={WelcomePageScreen} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );
};

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='userProfile' component={UserProfile} options={{
        headerTitle: () => (
          <VStack style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }} mb='$1'>
            <Logo />
          </VStack>
        ),

        headerBackTitle: " "
      }} />
    </HomeStack.Navigator>
  )
}
export const RootNavigation = () => {
  return (
    <RootStack.Navigator screenOptions={
      {
        headerShown: false
      }
    }>
      <RootStack.Screen name="Auth" component={AuthNavigator} />
      <RootStack.Screen name="DashBoard" component={HomeNavigator} />
    </RootStack.Navigator>
  )
}