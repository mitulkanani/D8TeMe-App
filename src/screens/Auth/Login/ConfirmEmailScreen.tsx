import React from 'react';
import { Alert, Dimensions } from 'react-native';
// import { resendConfirmationEmail } from '../../../features/auth/authSlice';
import { useAppDispatch } from '../../../store/store';
import {
    Center,
    Heading,
    HStack,
    Image,
    Text,
    VStack,
} from '@gluestack-ui/themed';
// import { openInbox } from 'react-native-email-link';
import Logo from '../../../assets/icons/logo.svg'
import ConfirmEmailSvg from '../../../assets/icons/verifyemailstep.svg';
import { fontFamily } from '../../../utils/constants/Constants';
import { Button } from '../../../components/Button';
import { styles } from './style';
import { TextInput } from '../../../components/TextInput';
const width = Dimensions.get('window').width;

const ConfirmEmailScreen = ({ }) => {
    //   const user = route.params?.user;
    //   const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = React.useState(false);
    const [isLinkSent, setIsLinkSent] = React.useState(false);
    const [email, setEmail] = React.useState("")

    //   const handleResendEmail = async () => {
    //     try {
    //       setIsLoading(true);
    //       const resultAction = await dispatch(
    //         resendConfirmationEmail({ id: user?._id }),
    //       ).unwrap();
    //       console.log('result', resultAction);
    //       Alert.alert('Success', 'Email has been re-sent successfully');
    //     } catch (error) {
    //       Alert.alert('Error', error?.message || 'Please try again later');
    //     } finally {
    //       setIsLoading(false);
    //     }
    //   };

    //   const openEmail = async () => {
    //     try {
    //       await openInbox();
    //     } catch (error) {
    //       console.log('Email app can not be opened', error);
    //       Alert.alert('Error', 'Email app can not be opened automatically');
    //     }
    //   };

    return (
        <VStack
            h={'100%'}
            bg={'$white'}
            $dark-bg="$backgroundSecondaryDark">
            <VStack alignItems='center' mt={'$5'}>
                <Logo />
            </VStack>
            <React.Fragment>
                {!isLinkSent && (
                    <VStack p={12}>
                        <HStack justifyContent='space-between' mt={'$8'} alignItems='center'>
                            <Text style={[styles.signInTextStyle,{fontWeight:'600'}]}>Email verification</Text>
                            <Text style={styles.secondaryTextStyle}>I have an account</Text>
                        </HStack>
                        <VStack height={20} />

                        <TextInput
                            placeholder="Email"
                            value={email}
                            color="$black"
                            onChangeText={(text) => setEmail(text)} />
                        <VStack height={20} />
                        <Text style={styles.termsConditionTextStyle}>By signing up, you agree to the
                            <Text style={[styles.termsConditionTextStyle, { fontWeight: '500', textDecorationLine: 'underline' }]}> Terms and Conditions </Text> and <Text style={[styles.termsConditionTextStyle, { fontWeight: '500', textDecorationLine: 'underline' }]}>Privacy Policy</Text>.</Text>
                        <Button
                            label={'Send verification code'}
                            w={'100%'}
                            backgroundColor="$fontSecondaryColor"
                            borderColor="$fontSecondaryColor"
                            color="white"
                            fontWeight="medium"
                            fontSize="$md"
                            mt={'$6'}
                            borderRadius={6}
                          onPress={()=>setIsLinkSent(true)}
                        />
                    </VStack>
                )}
                {isLinkSent && (
                    <VStack p={12} >
                        <VStack alignItems='center' mt={'$5'}>

                            <Heading
                                fontSize={20}
                                fontFamily={fontFamily.Poppins}
                                fontWeight="$semibold"
                                color="$coolGray800"
                                $dark-color="$white"
                                letterSpacing={1.5}>
                                Verify your email
                            </Heading>

                            <Text color="$coolGray700"
                                $dark-color="$white"
                                fontSize={12}
                                fontWeight={'normal'}
                                fontFamily={fontFamily.Poppins}
                                textAlign='center'
                            >
                                you will need to verify your email to complete the registration
                            </Text>
                            <VStack height={20} />

                            <ConfirmEmailSvg />
                            <VStack height={20} />
                            <Text color="$coolGray700"
                                $dark-color="$white"
                                fontSize={12}
                                fontWeight={'normal'}
                                fontFamily={fontFamily.Poppins}
                                textAlign='center'
                            >
                                An email has been set to jnfds@gmail.com with a link to verify your account.
                            </Text>

                        </VStack>
                        <HStack alignSelf='center' justifyContent='space-between' mt={'$4'} gap={'$8'}>
                            <Button
                                label={'Back'}
                                w={'40%'}
                                backgroundColor="$fff"
                                borderColor="$fontSecondaryColor"
                                color="$fontSecondaryColor"
                                fontWeight="medium"
                                fontSize="$md"
                                mt={'$6'}
                                borderRadius={6}
                                onPress={()=>setIsLinkSent(false)}

                            />
                            <Button
                                label={'Re-send'}
                                w={'40%'}
                                backgroundColor="$fontSecondaryColor"
                                borderColor="$fontSecondaryColor"
                                color="white"
                                fontWeight="medium"
                                fontSize="$md"
                                mt={'$6'}
                                borderRadius={6}
                            //   onPress={handleSendMessage}
                            />
                        </HStack>

                    </VStack>)}
            </React.Fragment>
        </VStack>
    );
};

export default ConfirmEmailScreen;
