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
import IntroSection1 from './IntroSection1';
import { IntroSection2 } from './IntroSection2';
import { IntroSection3 } from './IntroSection3';
import { IntroSection4FAQ } from './IntroSection4FAQ';
import { useNavigation } from '@react-navigation/native';

const IntroScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView flex={1}>
            <ScrollView bg='$white'>
                <IntroSection1 navigation={navigation} />
                <IntroSection2 />
                <IntroSection3 />
                <IntroSection4FAQ />
            </ScrollView>
        </SafeAreaView>
    )
}
export default IntroScreen;

