import React, { useState } from 'react';
import Logo from '../../../assets/icons/logo.svg'
import { Divider, Heading, KeyboardAvoidingView, SafeAreaView, ScrollView, Text, VStack } from "@gluestack-ui/themed"
import { fontFamily } from '../../../utils/constants/Constants';
import StepIndicator from 'react-native-step-indicator';
import { styles } from './style';
import ContactDetails from './ContactDetails';
import { useNavigation } from '@react-navigation/native';
import { Alert, Platform } from 'react-native';
import PersonalDetails from './PersonalDetails';
import ProfilePhoto from './ProfilePhoto';
import OptionalFields from './OptionalFields';

const RegisterScreen = () => {
    const navigation = useNavigation();

    const labelForStep = ['1', '2', '3', '4'];
    const [step, setStep] = useState(2);
    const stepperStyles = {
        stepIndicatorSize: 30,
        currentStepIndicatorSize: 30,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: '#FF0080',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#FF0080',
        stepStrokeUnFinishedColor: '#EFF0F6',
        separatorFinishedColor: '#FF0080',
        separatorUnFinishedColor: '#EFF0F6',
        stepIndicatorFinishedColor: '#FF0080',
        stepIndicatorUnFinishedColor: '#EFF0F6',
        stepIndicatorCurrentColor: '#FF0080',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: '#fff',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#6F6C90',
        labelColor: 'transparent',
        labelSize: 13,
        currentStepLabelColor: 'transparent'

    };
    const handleStepClick = (position: number) => {
        if (position < step) {
            setStep(position);
        }
    };

    return (
        <SafeAreaView flex={1}>
            <KeyboardAvoidingView
                // behavior={'position'}
                //  flex={1}
                bg='$white'
                // contentContainerStyle={{marginBottom:10}}
            >
                <ScrollView keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    automaticallyAdjustKeyboardInsets
                    >
                    <VStack bg='$white' p={12}>
                        <VStack alignItems='center' mt={'$5'}>
                            <Logo />
                        </VStack>
                        <VStack alignItems='center' mt={'$5'}>

                            <Heading
                                fontSize={20}
                                fontFamily={fontFamily.Poppins}
                                fontWeight="$semibold"
                                color="$coolGray800"
                                $dark-color="$white"
                                letterSpacing={1}>
                                Create Account
                            </Heading>

                            <Text color="$coolGray700"
                                $dark-color="$white"
                                fontSize={12}
                                fontWeight={'normal'}
                                fontFamily={fontFamily.Poppins}
                                textAlign='center'
                            >
                                Lorem ipsum dolor sit amet consectetur. Ultricies bibendum ut malesuada varius ante venenatis. Vestibulum arcu.
                            </Text>
                        </VStack>
                        <VStack mt='$6'>
                            <StepIndicator
                                customStyles={stepperStyles}
                                currentPosition={step}
                                labels={labelForStep}
                                stepCount={4}
                                // onPress={(position: number) => setStep(+position)}
                                onPress={(position: number) => {
                                    handleStepClick(position);
                                }}
                            />
                            <Divider />
                        </VStack>
                        {step === 0 && (<ContactDetails onSuccess={()=>{{setStep(1)}}} />)}
                        {step === 1 && (<PersonalDetails onSuccess={()=>{setStep(2)}} onBackClick={() => setStep(0)} />)}
                        {step === 2 && (<ProfilePhoto onSuccess={()=>{setStep(3)}} onBackClick={() => setStep(1)} />)}
                        {step === 3 && (<OptionalFields onSuccess={()=>{Alert.alert("Final step")}} onBackClick={() => setStep(2)} />)}
                    </VStack>
                </ScrollView></KeyboardAvoidingView>
        </SafeAreaView>)
}
export default RegisterScreen