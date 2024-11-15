import React, { useState } from 'react';
import Logo from '../../../assets/icons/logo.svg'
import { Box, ButtonSpinner, ButtonText, Center, HStack, ScrollView, Text, VStack } from "@gluestack-ui/themed"
import { styles } from './style';
import { TextInput } from '../../../components/TextInput';
import { Button } from '../../../components/Button';
import { LoginWithGoogle } from './LoginWithGoogle';
import { LoginWithFacebook } from './LoginWithFaceBook';
import PhoneLogo from '../../../assets/icons/phone.svg';
import { useNavigation } from '@react-navigation/native';

import {
    Button as GlueStackButton,
    ButtonIcon,
} from '@gluestack-ui/themed';
const LoginScreen = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showMoreOptoions, setShowMoreOptions] = useState(false)
    const [isLoading, setIsLoading] = React.useState(false);

    const handleMoreOption = () => {
        setShowMoreOptions(true)
    }
    return (
        <VStack flex={1} bg='$white' mx={12}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <VStack alignItems='center' mt={'$6'}>
                    <Logo />
                </VStack>
                <HStack justifyContent='space-between' mt={'$8'} alignItems='center'>
                    <Text style={styles.signInTextStyle}>Sign in</Text>
                    <Text style={styles.secondaryTextStyle} onPress={()=> navigation.navigate("RegisterScreen")}>I don't have an account</Text>
                </HStack>
                <VStack mt={'$4'}>
                    <VStack height={20} />

                    <TextInput
                        placeholder="Email"
                        value={email}
                        color="$black"
                        onChangeText={(text) => setEmail(text)} />
                    <VStack height={20} />
                    <TextInput
                        type="password"
                        autoCapitalize="none"
                        autoComplete="current-password"
                        placeholder="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <Text style={styles.termsConditionTextStyle}>By signing up, you agree to the
                        <Text style={[styles.termsConditionTextStyle, { fontWeight: '500', textDecorationLine: 'underline' }]}> Terms and Conditions </Text> and <Text style={[styles.termsConditionTextStyle, { fontWeight: '500', textDecorationLine: 'underline' }]}>Privacy Policy</Text>.</Text>
                    <Button
                        label={
                            'Agree and Sign up'
                        }
                        w={'100%'}
                        backgroundColor="$fontSecondaryColor"
                        borderColor="$fontSecondaryColor"
                        color="white"
                        fontWeight="medium"
                        fontSize="$md"
                        mt={'$6'}
                        borderRadius={6}
                    //   onPress={handleSendMessage}
                    />
                </VStack>
                <VStack>
                    <HStack mt={'$4'}>
                        <Center flex={1}>
                            <Box h={1} w={'100%'} bg={'$coolGray500'} />
                        </Center>
                        <Center px={8}>
                            <Text color={'$coolGray500'} textTransform="uppercase">or sign up with</Text>
                        </Center>
                        <Center flex={1}>
                            <Box h={1} w={'100%'} bg={'$coolGray500'} />
                        </Center>
                    </HStack>
                    {!showMoreOptoions && (
                        <Button
                            label={
                                'More Option'
                            }
                            w={'100%'}
                            backgroundColor="#1E1E1E0D"
                            borderColor="#1E1E1E0D"
                            color="#1E1E1E"
                            fontWeight="medium"
                            fontSize="$md"
                            mt={10}
                            onPress={handleMoreOption}
                        />)}
                    {showMoreOptoions && (
                        <>
                            <VStack height={20} />

                            <LoginWithFacebook />
                            <VStack height={10} />

                            <LoginWithGoogle navigation={navigation}/>
                            <VStack height={10} />

                            <GlueStackButton
                                variant={'outline'}
                                isDisabled={isLoading}
                                  onPress={()=>navigation.navigate("RegisterWithPhoneNumberScreen")}
                                justifyContent='flex-start'
                                borderColor={'#CCCCCC'}
                                bg="$white"
                                h={52}
                                w={'100%'}>
                                {!isLoading && <ButtonIcon as={PhoneLogo} />}
                                {isLoading && <ButtonSpinner mr="$1" />}
                                <ButtonText color={'#000000'} px={'$4'}>
                                    Log in with Phone number
                                </ButtonText>
                            </GlueStackButton>
                        </>
                    )}
                    <VStack my={"$4"}>
                        <Text style={styles.termsConditionTextStyle}>This site is protected by reCAPTCHA and the Google <Text style={[styles.termsConditionTextStyle, { fontWeight: '500', textDecorationLine: 'underline' }]}>Privacy Policy</Text> and
                            <Text style={[styles.termsConditionTextStyle, { fontWeight: '500', textDecorationLine: 'underline' }]}> Terms and Conditions </Text>.</Text>

                        <Text style={[styles.termsConditionTextStyle, { marginTop: 10 }]}>You also agree to receive product-related marketing emails from D8teme, which you can unsubscribe from at any time.
                        </Text>
                    </VStack>
                </VStack>
            </ScrollView>
        </VStack>)
}
export default LoginScreen