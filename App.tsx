import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store/store';
import BootSplash from 'react-native-bootsplash';
import { InteractionManager, Platform } from 'react-native';
import { NavigationContainerWrapper } from './src/navigation/NavigationContainerWrapper';


function App(): React.JSX.Element {
  function hideSplashScreen() {
    InteractionManager.runAfterInteractions(async () => {
      await BootSplash.hide({ fade: true });
      console.log('BootSplash has been hidden successfully');
    });
  }

  function init() {
    //Do here init stuff before hide splash screen

    return hideSplashScreen();
  }
  useEffect(() => {
    init();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainerWrapper />
      </PersistGate>
    </Provider>
  );
}


export default App;
