import React, { useEffect } from 'react';
import {
  Button,
  ButtonIcon,
  ButtonSpinner,
  ButtonText,
  createIcon,
} from '@gluestack-ui/themed';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { Settings, AccessToken, LoginManager } from 'react-native-fbsdk-next';
// import { loginWithSocial } from '../../../features/auth/authSlice';
import { Path } from 'react-native-svg';
import { Alert } from 'react-native';

const FacebookIcon = createIcon({
  viewBox: '0 0 18 18',
  path: (
    <>
      <Path
        d="M18 9.055C18 4.05406 13.9706 0 9 0C4.02943 0 0 4.05406 0 9.055C0 13.5745 3.29115 17.3207 7.59375 18V11.6725H5.30859V9.055H7.59375V7.06007C7.59375 4.79066 8.93742 3.53711 10.9932 3.53711C11.9776 3.53711 13.0078 3.71397 13.0078 3.71397V5.94235H11.873C10.755 5.94235 10.4062 6.64039 10.4062 7.35719V9.055H12.9023L12.5033 11.6725H10.4062V18C14.7088 17.3207 18 13.5745 18 9.055Z"
        fill="#1877F2"
        strokeWidth={0}
      />
    </>
  ),
});

export const LoginWithFacebook = () => {
//   const dispatch = useAppDispatch();
//   const selector = useAppSelector(state => state.auth);
 
  const [isLoading, setIsLoading] = React.useState(false);

//   useEffect(() => {
//     Settings.initializeSDK();
//     Settings.setAdvertiserTrackingEnabled(true);

//     //Try to remove facebook session if one exists
//     try {
//       LoginManager.logOut();
//     } catch (e) {
//       console.log('LoginWithFacebook::Error on logout', e);
//     }
//   }, []);

//   const loginFacebook = async () => {
//     try {
//       setIsLoading(true);
//       const loginResult = await LoginManager.logInWithPermissions([
//         'public_profile',
//         'email',
//       ]);
//       if (loginResult.isCancelled) {
//         console.log('Login cancelled');
//       } else if (loginResult && loginResult.grantedPermissions) {
//         const tokenFB = await AccessToken.getCurrentAccessToken();
//         if (tokenFB && tokenFB.accessToken) {
//           // const currentProfile = await Profile.getCurrentProfile()
//           const response = await dispatch(
//             loginWithSocial({
//               social: 'facebook',
//               accessToken: tokenFB.accessToken,
//               invitedBy: selector?.invitedByPartner || '',
//             }),
//           ).unwrap();
//           console.log('Facebook response', response);
//         } else {
//           Alert.alert(
//             'Error',
//             'Your Facebook account must have email to sign in with Facebook',
//           );
//         }
//       } else {
//         console.log(loginResult, 'loginResult');
//       }
//     } catch (error) {
//       Alert.alert(
//         'Error',
//         'There has been an error while trying to login with Facebook. Check that you are logged in on Facebook and have a confirmed account and try again.',
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

  return (
    <Button
      variant={'outline'}
      isDisabled={isLoading}
    //   onPress={loginFacebook}
      borderColor={'#CCCCCC'}
      h={52}
      w={'100%'}
      justifyContent='flex-start'>
      {!isLoading && <ButtonIcon as={FacebookIcon} />}
      {isLoading && <ButtonSpinner mr="$1" />}
      <ButtonText color={'black'} px={'$4'}>
      Log in with Facebook
      </ButtonText>
    </Button>
  );
};
