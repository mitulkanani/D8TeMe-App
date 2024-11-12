import { Heading, HStack, Image, ScrollView, Text, VStack } from "@gluestack-ui/themed"
import LinearGradient from "react-native-linear-gradient"
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { fontFamily } from "../../../utils/constants/Constants";
import { Dimensions } from "react-native";
import React, { useState } from 'react';
import { styles } from "./style";
export const IntroSection3 = () => {
    const [activeSlider, setActiveSlider] = useState(0);

    const userData = [
        {
            name: "Melania L",
            occupation: "Customer service agent",
            description: "Lorem ipsum dolor sit amet consectetur. Bibendum ornare turpis tincidunt proin convallis massa. Elit eget est dictumst urna. Ut ridiculus nec diam malesuada elementum ipsum nisi nunc. Tellus nunc quis velit lectus laoreet viverra est consequat pretium.",
            profile: require('../../../assets/images/Intro/userDummy.png')
        },
        {
            name: "Melania L",
            occupation: "Customer service agent",
            description: "Lorem ipsum dolor sit amet consectetur. Bibendum ornare turpis tincidunt proin convallis massa. Elit eget est dictumst urna. Ut ridiculus nec diam malesuada elementum ipsum nisi nunc. Tellus nunc quis velit lectus laoreet viverra est consequat pretium.",
            profile: require('../../../assets/images/Intro/userDummy.png')
        },
        {
            name: "Melania L",
            occupation: "Customer service agent",
            description: "Lorem ipsum dolor sit amet consectetur. Bibendum ornare turpis tincidunt proin convallis massa. Elit eget est dictumst urna. Ut ridiculus nec diam malesuada elementum ipsum nisi nunc. Tellus nunc quis velit lectus laoreet viverra est consequat pretium.",
            profile: require('../../../assets/images/Intro/userDummy.png')
        }
    ]
    const SLIDER_WIDTH = Dimensions.get('window').width;
    return (
        <VStack my={20} space={'md'} px={12}>
            <VStack>
                <Heading
                    fontSize={22}
                    fontFamily={fontFamily.Poppins}
                    letterSpacing={1.5}
                    color="$black"
                    $dark-color="$white"
                    fontWeight={'$semibold'}
                    textAlign={'center'}>
                    What our <Heading
                        fontSize={22}
                        fontFamily={fontFamily.Poppins}
                        letterSpacing={1.5}
                        color="$fontPrimaryColor"
                        fontWeight={'$semibold'}
                        textAlign={'center'}>customer says</Heading>
                </Heading>
                <Text color="$grayDisableTextColor" textAlign={'center'} fontSize={'$sm'} mx={'$4'} fontWeight={'$medium'}>
                    Sync movies and shows across your phone, Laptop and computer and easily access your favourites anywhere in the world.
                </Text>
            </VStack>
            <VStack height={250} >

                <LinearGradient
                    colors={[
                        'rgba(253, 72, 79, 0.53)',
                        'rgba(238, 42, 123, 0.53))',
                    ]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{
                        height: 270,
                        // width: 150,  
                        borderRadius: 24,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                </LinearGradient>
                <VStack position="absolute" top={10} left={5} >
                    <Carousel
                        layout={'default'}
                        layoutCardOffset={0}
                        data={userData}
                        renderItem={({ item, index }) => (
                            <VStack
                                key={index}
                                bg='$white'
                                alignSelf="center"
                                borderRadius={10}
                                p={'$2'}
                                mx={'$2'}
                                height={230}
                            >
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <Image source={require('../../../assets/images/Intro/userDummy.png')} height={50} width={50} />
                                    <Text color="$black" textAlign={'left'} fontSize={'$lg'} fontWeight={'$semibold'}>
                                        {item?.name}
                                    </Text>
                                    <Text color="$grayText" textAlign={'left'} fontSize={'$xs'} >
                                        {item?.occupation}
                                    </Text>
                                    <Text color="$coolGray500" textAlign={'left'} fontSize={'$sm'} fontWeight={'$medium'}>
                                        {item?.description}
                                    </Text>
                                </ScrollView>
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
                        dotsLength={userData.length}
                        activeDotIndex={activeSlider}
                        dotStyle={styles.dotsStyle}
                        inactiveDotOpacity={0.5}
                        inactiveDotScale={1}
                        containerStyle={styles.dotsContainerStyle}
                    />
                </VStack>
            </VStack>
        </VStack>
    )
}
