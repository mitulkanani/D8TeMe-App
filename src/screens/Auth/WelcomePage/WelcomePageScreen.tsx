import React, { useState } from 'react';
import { Alert, Dimensions, StyleSheet } from 'react-native';
// import { resendConfirmationEmail } from '../../../features/auth/authSlice';
import { useAppDispatch } from '../../../store/store';
import {
    Center,
    Heading,
    HStack,
    Icon,
    Image,
    ScrollView,
    Text,
    VStack,
} from '@gluestack-ui/themed';
// import { openInbox } from 'react-native-email-link';
import Logo from '../../../assets/icons/logo.svg'
import ConfirmEmailSvg from '../../../assets/icons/verifyemailstep.svg';
import WelcomeSvg from '../../../assets/icons/welcomephoto.svg';
import { fontFamily } from '../../../utils/constants/Constants';
import { Button } from '../../../components/Button';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { TextInput } from '../../../components/TextInput';
const width = Dimensions.get('window').width;

const WelcomePageScreen = ({ }) => {
    const SLIDER_WIDTH = Dimensions.get('window').width;
    const [activeSlider, setActiveSlider] = useState(0);

    const carousoleData = [
        {
            title: "Lorem ipsum dolor sit ",
            image: ConfirmEmailSvg,
            description: "Lorem ipsum dolor sit amet consectetur. Ornare diam aliquet ut facilisis lectus pretium amet tellus est. Facilisis facilisis."
        },
        {
            title: "Lorem ipsum dolor sit ",
            image: WelcomeSvg,
            description: "Lorem ipsum dolor sit amet consectetur. Ornare diam aliquet ut facilisis lectus pretium amet tellus est. Facilisis facilisis."
        },
        {
            title: "Lorem ipsum dolor sit ",
            image: ConfirmEmailSvg,
            description: "Lorem ipsum dolor sit amet consectetur. Ornare diam aliquet ut facilisis lectus pretium amet tellus est. Facilisis facilisis."
        },
        {
            title: "Lorem ipsum dolor sit ",
            image: WelcomeSvg,
            description: "Lorem ipsum dolor sit amet consectetur. Ornare diam aliquet ut facilisis lectus pretium amet tellus est. Facilisis facilisis."
        },
        {
            title: "Lorem ipsum dolor sit ",
            image: ConfirmEmailSvg,
            description: "Lorem ipsum dolor sit amet consectetur. Ornare diam aliquet ut facilisis lectus pretium amet tellus est. Facilisis facilisis."
        },

    ]
    return (
        <VStack
            h={'100%'}
            bg={'$white'}
            $dark-bg="$backgroundSecondaryDark">
            <VStack alignItems='center' mt={'$5'}>
                <Logo />
            </VStack>
            <React.Fragment>
                <VStack p={12} >
                    <VStack alignItems='center' mt={'$5'}>

                        <Heading
                            fontSize={20}
                            fontFamily={fontFamily.Poppins}
                            fontWeight="$semibold"
                            color="$coolGray800"
                            $dark-color="$white"
                            letterSpacing={1}>
                            👋 Welcome to D8TeMe!
                        </Heading>

                        <Text color="$coolGray700"
                            $dark-color="$white"
                            fontSize={12}
                            fontWeight={'normal'}
                            fontFamily={fontFamily.Poppins}
                            textAlign='center'
                        >
                            Lorem ipsum dolor sit amet consectetur. Ornare diam aliquet ut facilisis lectus pretium amet tellus est. Facilisis facilisis donec viverra arcu ullamcorper. Tempus viverra nunc ac sit nunc volutpat. Mi faucibus quam iaculis facilisis.
                        </Text>
                        <VStack height={20} />
                        <>
                            <Carousel
                                layout={'default'}
                                layoutCardOffset={0}
                                data={carousoleData}
                                renderItem={({ item, index }) => (
                                    <VStack
                                        key={index}
                                        bg='$white'
                                        alignSelf="center"
                                        alignItems='center'
                                        borderRadius={10}
                                        p={'$2'}
                                        mx={'$2'}
                                        // height={230}
                                    >
                                        <Icon as={item.image} />
                                        <VStack mt='$6' 
                                        alignItems='center'
                                        >
                                        <Text color="$black" textAlign={'center'} fontSize={'$lg'} fontWeight={'$semibold'}>
                                            {item?.title}
                                        </Text>
                                        <Text color="$grayText" textAlign={'center'} fontSize={'$xs'} >
                                            {item?.description}
                                        </Text>
                                        </VStack>
                                    </VStack>
                                )}
                                onSnapToItem={index => setActiveSlider(index)}
                                sliderWidth={SLIDER_WIDTH - 35}
                                itemWidth={Math.round(SLIDER_WIDTH - 35)}
                                inactiveSlideShift={0}
                                useScrollView={true}
                                enableMomentum={true}
                                decelerationRate={0.9}
                            />
                            <Pagination
                                dotsLength={carousoleData.length}
                                activeDotIndex={activeSlider}
                                dotStyle={styles.dotsStyle}
                                inactiveDotOpacity={0.5}
                                inactiveDotScale={1}
                                inactiveDotStyle={styles.inActivedotsStyle}
                                containerStyle={styles.dotsContainerStyle}
                            />
                        </>


                    </VStack>

                    <HStack alignSelf='center' justifyContent='space-between' mt={'$4'} gap={'$8'}>
                            <Button
                                label={'Dismiss'}
                                w={'40%'}
                                backgroundColor="$fff"
                                borderColor="$fontSecondaryColor"
                                color="$fontSecondaryColor"
                                fontWeight="medium"
                                fontSize="$md"
                                mt={'$6'}
                                borderRadius={6}
                                // onPress={()=>setIsLinkSent(false)}

                            />
                            <Button
                                label={'Next'}
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

                </VStack>
            </React.Fragment>
        </VStack>
    );
};
export const styles = StyleSheet.create({
    bgImageStyle: {
        height: 250,
        width: 500,
    },
    dotsStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 0,
        backgroundColor: '#FF0080',
    },
    inActivedotsStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 0,
        backgroundColor: '#C4C4C4',
    },
    dotsContainerStyle: {
        paddingVertical: 10,
    },
})
export default WelcomePageScreen;
