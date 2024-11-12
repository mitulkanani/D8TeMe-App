import { ButtonText, VStack } from '@gluestack-ui/themed';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import React, { ComponentProps , useState } from 'react';
import {
    Button as GlueStackButton,
    ButtonIcon,
} from '@gluestack-ui/themed';
import MessageLogo from '../../assets/icons/message.svg';
import { fontFamily } from '../../utils/constants/Constants';
import { StyleSheet } from 'react-native';

interface InputProps {
    verificationCode?: string,
    onCodeChanged?: any,
    type?: string,
    onPressAutofilled?: any,
    disabledAutofill?: boolean,
}

export const OtpTextIntput = (props: InputProps) => {
    const [iscodeFilled, setisCodeFilled]=useState(false)
    const {
        verificationCode,
        onCodeChanged,
        type,
        onPressAutofilled,
        disabledAutofill,
    } = props
    return (
        <VStack>
            <OTPInputView
                style={{ width: '100%', height: 90 }}
                pinCount={6}
                code={verificationCode}
                onCodeChanged={onCodeChanged}
                autoFocusOnLoad
                codeInputFieldStyle={ iscodeFilled?styles.underlineFilledStyleBase :styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={(code => {
                    console.log(`Code is ${code}, you are good to go!`)
                    setisCodeFilled(true)
                })}

            />
            {type && type == "phoneNo" && (
                <GlueStackButton
                    variant={'outline'}
                    isDisabled={disabledAutofill}
                    onPress={onPressAutofilled}
                    // justifyContent='flex-start'
                    style={styles.buttonStyle}
                    borderColor={'#F5F5F5'}
                    bg="$white"
                    h={52}
                    w={'40%'}>
                    <ButtonIcon as={MessageLogo} mr={'$2'} color='black' />
                    <VStack alignItems='flex-start'>

                        <ButtonText color={'#000000'} fontFamily={fontFamily.Poppins} fontWeight={'500'} fontSize={14}>
                            Autofill code
                        </ButtonText>
                        <ButtonText color={'#000000'} fontFamily={fontFamily.Poppins} fontWeight={'400'} fontSize={11} mt={'-$1.5'}>
                            from Messages
                        </ButtonText>
                    </VStack>
                </GlueStackButton>
            )}
        </VStack>
    )
}


export const styles = StyleSheet.create({

    borderStyleBase: {
        width: 50,
        height: 50
    },

    borderStyleHighLighted: {
        width: 50,
        height: 50,
        borderWidth: 1, borderColor: '#9CA3AF',
        borderRadius: 6,
        backgroundColor: '#E0E3E5',
    },

    underlineStyleBase: {
        width: 50,
        height: 50,
        borderWidth: 1, 
        borderColor: '#9CA3AF',
        borderRadius: 6,
        color: 'black'
    },
    underlineFilledStyleBase: {
        width: 50,
        height: 50,
        borderWidth: 1, 
        borderColor: '#9CA3AF',
        borderRadius: 6,
        backgroundColor: '#E0E3E5',
        color: '#9CA3AF'
    },

    underlineStyleHighLighted: {
        width: 50,
        height: 50,
        borderWidth: 1, 
        borderColor: '#9CA3AF',
        borderRadius: 6,
        // backgroundColor: '#E0E3E5'

    },
    buttonStyle: {
        borderRadius: 12,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        // backgroundColor: '#F5F5F5',
        elevation: 2,
    }
})