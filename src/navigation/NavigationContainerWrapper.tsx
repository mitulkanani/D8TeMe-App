import React, { useEffect, useState } from 'react';
import { Appearance, StatusBar as NativeStatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { MenuProvider } from 'react-native-popup-menu';
import { SafeAreaView as StatusBar } from 'react-native-safe-area-context';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { SafeAreaView, GluestackUIProvider } from '@gluestack-ui/themed';
import { RootNavigation } from './RootNavigation';
import { config } from '../../config/gluestack-ui.config';
import { useAppSelector, useAppDispatch } from '../store/store';
import { changeColorTheme } from '../features/auth/authSlice';
import { RootState } from '../store/rootReducer';
import { COLOR_PRIMARY } from '../utils/constants/colors';
import { COLOR_THEME } from '../utils/constants/Constants';

const NavigationLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLOR_PRIMARY,
    background: '#FBFBFF',
    border: '#E5E5E5',
  },
};
const NavigationDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: COLOR_PRIMARY,
    background: '#181724',
  },
};

// const useColorScheme = () => {
//   const isLoggedIn: boolean = useSelector(
//     (state: RootState) => state?.auth?.isLoggedIn,
//   );

//   const colorScheme = isLoggedIn
//     ? useAppSelector(state => state.auth.colorTheme)
//     : Appearance.getColorScheme();

//   return colorScheme;
// };
export const NavigationContainerWrapper = () => {
  const currentAppearance = Appearance.getColorScheme();
  const dispatch = useAppDispatch();

  const colorScheme = useAppSelector(state =>
    state.auth.userColorTheme === COLOR_THEME.SYSTEM
      ? currentAppearance
      : state.auth.colorTheme,
  );

  const userColorTheme = useAppSelector(state => state.auth.userColorTheme);

  useEffect(() => {
    if (userColorTheme === COLOR_THEME.SYSTEM) {
      dispatch(changeColorTheme(COLOR_THEME.SYSTEM));
    }
  }, []);

  return (
    <StatusBar
      style={{
        backgroundColor: colorScheme === 'dark' ? '#181724' : '#ffffff',
        flex: 1,
      }}>
      <NativeStatusBar
        animated={true}
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colorScheme === 'dark' ? '#181724' : '#ffffff'}
      />
      {/* <GluestackUIProvider colorMode={colorScheme} config={config}> */}
      <GluestackUIProvider colorMode={"light"} config={config}>
        <SafeAreaView flex={1}>
          <MenuProvider>
            <NavigationContainer
              theme={
                colorScheme === COLOR_THEME.DARK
                  ? NavigationDarkTheme
                  : NavigationLightTheme
              }>
              <RootNavigation />
            </NavigationContainer>
          </MenuProvider>
        </SafeAreaView>
      </GluestackUIProvider>
    </StatusBar>
  );
};
