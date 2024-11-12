import React from 'react';
import {
  Button,
  ButtonIcon,
  ButtonSpinner,
  ButtonText,
  createIcon,
} from '@gluestack-ui/themed';
import { useAppDispatch, useAppSelector } from '../../../store/store';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import { loginWithSocial } from '../../../features/auth/authSlice';
import { Path } from 'react-native-svg';

// GoogleSignin.configure({
//   scopes: ['email', 'profile'],
// });

const GoogleIcon = createIcon({
  viewBox: '0 0 18 18',
  path: (
    <>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.64 9.20419C17.64 8.56601 17.5827 7.95237 17.4764 7.36328H9V10.8446H13.8436C13.635 11.9696 13.0009 12.9228 12.0477 13.561V15.8192H14.9564C16.6582 14.2524 17.64 11.9451 17.64 9.20419Z"
        fill="#4285F4"
        strokeWidth={0}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.99976 18.0009C11.4298 18.0009 13.467 17.195 14.9561 15.8205L12.0475 13.5623C11.2416 14.1023 10.2107 14.4214 8.99976 14.4214C6.65567 14.4214 4.67158 12.8382 3.96385 10.7109H0.957031V13.0428C2.43794 15.9841 5.48158 18.0009 8.99976 18.0009Z"
        fill="#34A853"
        strokeWidth={0}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.96409 10.7108C3.78409 10.1708 3.68182 9.59398 3.68182 9.0008C3.68182 8.40762 3.78409 7.8308 3.96409 7.2908V4.95898H0.957273C0.347727 6.17398 0 7.54853 0 9.0008C0 10.4531 0.347727 11.8276 0.957273 13.0426L3.96409 10.7108Z"
        fill="#FBBC05"
        strokeWidth={0}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.99976 3.57955C10.3211 3.57955 11.5075 4.03364 12.4402 4.92545L15.0216 2.34409C13.4629 0.891818 11.4257 0 8.99976 0C5.48158 0 2.43794 2.01682 0.957031 4.95818L3.96385 7.29C4.67158 5.16273 6.65567 3.57955 8.99976 3.57955Z"
        fill="#EA4335"
        strokeWidth={0}
      />
    </>
  ),
});

export const LoginWithGoogle = ({navigation}) => {
//   const dispatch = useAppDispatch();
//   const selector = useAppSelector(state => state.auth);

  const [isLoading, setIsLoading] = React.useState(false);

//   const loginGoogle = async () => {
//     try {
//       setIsLoading(true);
//       await GoogleSignin.signOut();
//       const googleSignInResponse = await GoogleSignin.signIn();
//       console.log('GOOGLE googleSignInResponse', googleSignInResponse);
//       if (googleSignInResponse) {
//         const googleToken = await GoogleSignin.getTokens();
//         console.log('GOOGLE googleToken', googleToken);
//         if (googleToken && googleToken.accessToken) {
//           const response = await dispatch(
//             loginWithSocial({
//               social: 'google',
//               accessToken: googleToken.accessToken,
//               invitedBy: selector?.invitedByPartner || '',
//             }),
//           ).unwrap();
//           console.log('GOOGLE response', response);
//           // const googleCurrentUser = await GoogleSignin.getCurrentUser()
//           // console.log("GOOGLE currentUser", googleCurrentUser)
//           //Send token to API.
//           // await afterSocialLogin('google', googleToken.accessToken)
//         }
//         try {
//           GoogleSignin.revokeAccess()
//             .then(() => {
//               GoogleSignin.signOut();
//             })
//             .then(() => {
//               console.log('FINISH logout from Google');
//             });
//         } catch (error) {
//           console.error(error);
//         }
//       }
//     } catch (error) {
//       console.log(error);
//       // Alert.alert('Error', error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

  return (
    <Button
      variant={'outline'}
      isDisabled={isLoading}
      // onPress={loginGoogle}
      onPress={()=>navigation.navigate("ConfirmEmailScreen")}
    justifyContent='flex-start'
      borderColor={'#CCCCCC'}
      h={52}
      w={'100%'}>
      {!isLoading && <ButtonIcon as={GoogleIcon} />}
      {isLoading && <ButtonSpinner mr="$1" />}
      <ButtonText color={'black'} px={'$4'}>
      Log in with Google
      </ButtonText>
    </Button>
  );
};