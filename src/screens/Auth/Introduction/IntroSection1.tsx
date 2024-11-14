import React, { useEffect } from 'react';
import {
    Button,
    ButtonIcon,
    ButtonText,
    Center,
    ChevronDownIcon,
    Heading,
    HStack,
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    VStack,
} from '@gluestack-ui/themed';
import LogoWhite from '../../../assets/images/logo-white.svg';
import { styles } from './style';
import { fontFamily } from '../../../utils/constants/Constants';
import TranslateLogo from '../../../assets/icons/translate.svg';
import ArrowDownFillLogo from '../../../assets/icons/arrow_down_fill.svg';
import LinearGradient from 'react-native-linear-gradient';

const IntroSection1 = ({ navigation }) => {
    return (
        <VStack>
            <VStack style={styles.bgImageStyle}>
                <Image source={require('../../../assets/images/Intro/introBg.png')} style={styles.bgImageStyle}
                    alt="image" />
                <VStack style={styles.bgImageStyle} backgroundColor='#0000008F' position='absolute' top={0}>
                </VStack>
            </VStack>
            <HStack w={'100%'} justifyContent={'space-between'} p={'$1'} position='absolute' top={0} alignItems='center'>
                <Center>
                    <LogoWhite />
                </Center>
                <HStack gap={5}>
                    <Button width={110} height={40} backgroundColor='transperent'
                        borderWidth={1}
                        borderColor='$white'>
                        {/* <ButtonIcon as={TranslateLogo} mr={'$1'} /> */}
                        <ButtonText color={'$white'} fontFamily={fontFamily.Poppins} fontWeight={'$medium'}>English</ButtonText>
                        {/* <ButtonIcon as={ArrowDownFillLogo} ml={'$1'} /> */}
                    </Button>
                    <Button
                        onPress={() => navigation.navigate('LoginScreen')}
                        bgColor="white"
                        $dark-bgColor="black"
                        borderWidth={1}
                        width={100}
                        height={40}
                        borderColor={'grey'}>
                        <ButtonText $dark-color={'$white'} color={'$black'} fontFamily={fontFamily.Poppins} fontWeight={'$medium'}>
                            Log In
                        </ButtonText>
                    </Button>

                </HStack>
            </HStack>
            <VStack position='absolute' left={0} right={0} top={'30%'}>
                <Heading
                    fontSize={'$xl'}
                    lineHeight={40}
                    fontFamily={fontFamily.Poppins}
                    letterSpacing={1.5}
                    color="$white"
                    textAlign={'center'}
                    fontWeight={'$semibold'}>
                    Dating Application Concept
                </Heading>
                <Text color="$white" textAlign={'center'} fontSize={'$sm'} mx={'$4'} >
                    D8teme is a social dating app that let’s you find & interact with people nearby with similar interests using text, voice messages & fun emojis
                </Text>
                <Center>
                    <Button
                        onPress={() => navigation.navigate("RegisterScreen")}
                        backgroundColor="black"
                        height={40}
                        width={150}
                        my={'$2'}
                    >
                        <LinearGradient
                            colors={[
                                'rgba(232, 1, 43, 1)',
                                'rgba(246, 121, 79, 1)',
                            ]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={{
                                height: 40,
                                width: 150,
                                borderRadius: 4,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <ButtonText color={'$white'} fontFamily={fontFamily.Poppins} fontWeight={'$medium'} >
                                Create Account
                            </ButtonText>
                        </LinearGradient>
                    </Button>

                </Center>
            </VStack>
        </VStack>
    )
}
export default IntroSection1;

