import React from 'react';
import { Alert, Dimensions } from 'react-native';
// import { resendConfirmationEmail } from '../../../features/auth/authSlice';
import { useAppDispatch } from '../../../store/store';
import {
    ArrowDownIcon,
    ButtonSpinner,
    Center,
    ChevronDownIcon,
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
import ArrowDownFillLogo from '../../../assets/icons/arrow_down_fill_black.svg';
import {
    Button as GlueStackButton,
    ButtonIcon,
} from '@gluestack-ui/themed';
import { ButtonText } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import CountryPicker from 'react-native-country-picker-modal';
import { OtpTextIntput } from '../../../components/OTPTextInput/OtpTextIntput';
const width = Dimensions.get('window').width;

const RegisterWithPhoneNumberScreen = () => {
    const navigation = useNavigation();
    //   const user = route.params?.user;
    //   const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = React.useState(false);
    const [isLinkSent, setIsLinkSent] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [showPicker, setShowPicker] = React.useState(false);
    const [selectedCountryCode, setSelectedCountryCode] = React.useState('IN');
    const [selectedCallingCode, setSelectedCallingCode] = React.useState('91');
    const [phoneNo, setPhoneNo] = React.useState('');
    const [verificationCode, setVerificationCode] = React.useState('');


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
    const onSelect = (country: any) => {
        setSelectedCountryCode(country.cca2);
        setSelectedCallingCode(country.callingCode[0]);
        setShowPicker(false);
    };
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
                            <Text style={[styles.signInTextStyle, { fontWeight: '600' }]}>Can we get your number?</Text>
                        </HStack>
                        <VStack height={20} />
                        {showPicker && (
                            <CountryPicker
                                visible={showPicker}
                                onSelect={onSelect}
                                onClose={() => setShowPicker(false)}
                                countryCode={selectedCountryCode}
                                withFilter
                                withFlag
                                withCallingCode
                            />)}
                        <HStack justifyContent='space-between' alignItems='center'>
                            <GlueStackButton
                                variant={'outline'}
                                isDisabled={isLoading}
                                onPress={() => setShowPicker(true)}
                                justifyContent='flex-start'
                                borderColor={'#CCCCCC'}
                                bg="$white"
                                h={52}
                                w={'25%'}>
                                <ButtonText color={'#000000'} >
                                    +{selectedCallingCode}
                                </ButtonText>
                                <ButtonIcon as={ArrowDownFillLogo} ml={'$4'} color='black' />
                            </GlueStackButton>
                            <TextInput
                                width={'70%'}
                                placeholder="98675 89684"
                                value={phoneNo}
                                color="$black"
                                keyboardType='phone-pad'
                                onChangeText={(text) => setPhoneNo(text)}
                                borderColor='#cccccc' />
                        </HStack>
                        <VStack height={20} />
                        <Text style={styles.termsConditionTextStyle}>We’ll text you a code to verify you’re really you Message and data rats may apply.
                            <Text style={[styles.termsConditionTextStyle, { fontWeight: '500', textDecorationLine: 'underline', color: '#1E22FB' }]}> What happens if your number changes? </Text></Text>
                        <Button
                            label={'Next'}
                            w={'100%'}
                            backgroundColor="$fontSecondaryColor"
                            borderColor="$fontSecondaryColor"
                            color="white"
                            fontWeight="medium"
                            fontSize="$md"
                            mt={'$6'}
                            borderRadius={6}
                            onPress={() => setIsLinkSent(true)}
                        />
                    </VStack>
                )}
                {isLinkSent && (
                    <VStack p={12} >
                        <Text style={[styles.signInTextStyle, { fontWeight: '600' }]}>Enter OTP</Text>
                        <Text style={[styles.termsConditionTextStyle, { fontSize: 14 }]}>Type in the 6-digit code sent to the number <Text style={[styles.termsConditionTextStyle, { fontSize: 14, fontWeight: '600' }]}>+91 9867589684</Text></Text>
                        <OtpTextIntput
                        verificationCode={verificationCode}
                        onCodeChanged={(code)=>setVerificationCode(code)}
                        type="phoneNo"
                        onPressAutofilled={()=>console.log("pressed")}
                        />
                        <VStack height={10} />

                        <Text style={styles.secondaryTextStyle}>Update a contact info</Text>
                        <Button
                            label={'Next'}
                            w={'100%'}
                            backgroundColor="$fontSecondaryColor"
                            borderColor="$fontSecondaryColor"
                            color="white"
                            fontWeight="medium"
                            fontSize="$md"
                            mt={'$4'}
                            borderRadius={6}
                          onPress={()=>{
                            navigation.navigate("SubscriptionPlanScreen")
                          }}
                        />
                    </VStack>)}
            </React.Fragment>
        </VStack>
    );
};

export default RegisterWithPhoneNumberScreen;
