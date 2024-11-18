import React, { useState } from 'react';
import { Button, Heading, HStack, Icon, Image, Pressable, ScrollView, Text, VStack } from "@gluestack-ui/themed"
import { fontFamily } from "../../../utils/constants/Constants";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { styles } from './style';
import { Dimensions } from 'react-native';
import Video from 'react-native-video';
import { FlatList } from '@gluestack-ui/themed';
import PlayIcon from '../../../assets/icons/play-dark.svg'
import PauseIcon from '../../../assets/icons/pause.svg'
import { ButtonIcon } from '@gluestack-ui/themed';

export const IntroSection2 = () => {
    const Data = [
        {
            name: "Harisha LibeyaL",
            occupation: "Personality",
            url: require('../../../assets/video/video2.mp4'),
            profile: require('../../../assets/images/Intro/userDummy.png'),
            playing: false
        },
        {
            name: "Harisha LibeyaL",
            occupation: "Personality",
            url: require('../../../assets/video/fishvideo.mp4'),
            profile: require('../../../assets/images/Intro/userDummy.png'),
            playing: false
        },
        {
            name: "Harisha Libeya",
            occupation: "Personality",
            url: require('../../../assets/video/hero-video.mp4'),
            profile: require('../../../assets/images/Intro/userDummy.png'),
            playing: false
        }
    ]
    const [activeSlider, setActiveSlider] = useState(0);
    const [videoLayout, setVideoLayout] = useState({});
    const SLIDER_WIDTH = Dimensions.get('window').width;
    const [isPlaying, setIsPlaying] = useState(true);
    const [userData, setUserData] = useState(Data)
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
                    Watch in all<Heading
                        fontSize={22}
                        fontFamily={fontFamily.Poppins}
                        letterSpacing={1.5}
                        color="$fontPrimaryColor"
                        fontWeight={'$semibold'}
                        textAlign={'center'}> your favourite video</Heading>
                </Heading>
                <Text color="$grayDisableTextColor" textAlign={'center'} fontSize={'$sm'} mx={'$4'} fontWeight={'$medium'}>
                    Sync movies and shows across your phone, Laptop and computer and easily access your favourites anywhere in the world
                </Text>
            </VStack>
            {/* <ScrollView horizontal> */}
            <VStack mt={'$4'}>
                {!isPlaying && (
                    <Pressable
                        w={'100%'}
                        h={'100%'}
                        alignItems="center"
                        justifyContent="center"
                        position="relative"
                        onPress={() => {
                            setIsPlaying(true);
                        }}>
                        <Image
                            source={{
                                uri: 'https://static.reup.live/explainers/boost/boost_cover.png',
                            }}
                            w={'100%'}
                            h={'100%'}
                            position="absolute"
                            alt="thumbnail"
                        />
                        <VStack>
                            <Icon as={PlayIcon} w={80} h={80} color="white" />
                        </VStack>
                    </Pressable>
                )}
                {isPlaying && (
                    <> <VStack
                        onLayout={event => {
                            const { y, height } = event.nativeEvent.layout;
                            setVideoLayout({ y, height });
                        }}
                        h={200}
                        borderRadius={10}
                        w={'100%'}
                        overflow="hidden">
                        {/* <Video
                            source={require('../../../assets/video/fishvideo.mp4')}
                            // eslint-disable-next-line react-native/no-inline-styles
                            style={{ width: '100%', height: '100%' }}
                            controls={true}
                            resizeMode="cover"
                            paused={!isPlaying}
                        /> */}
                        <FlatList
                            data={userData}
                            renderItem={({ item, index }) => {
                                return (
                                    <VStack style={{
                                        width: Dimensions.get('window').width * 0.9, // Adjust as necessary
                                        height: 200, // Set a height for the video
                                        marginHorizontal: 10,
                                        overflow: 'hidden',
                                        borderRadius: 10,
                                    }}>
                                        <Video
                                            source={{ uri: item.url }}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                            }}
                                            resizeMode="cover"
                                            repeat
                                            paused={!(item.playing)}
                                        // Add any other props you need
                                        />
                                        <HStack position='absolute' bottom={10} left={10} justifyContent='space-between' width={'95%'}>
                                            <HStack alignItems='center'>
                                                <Image source={require('../../../assets/images/Intro/userDummy.png')} height={35} width={35} alt='image' />
                                                <VStack ml='$2'>
                                                    <Text color="$white" textAlign={'left'} fontSize={'$md'} fontWeight={'$semibold'} fontFamily={fontFamily.Poppins}>
                                                        {"Harisha Libeya"}
                                                    </Text>
                                                    <Text color="$white" textAlign={'left'} fontFamily={fontFamily.Poppins}>
                                                        {"Personality"}
                                                    </Text>
                                                </VStack>
                                            </HStack>
                                            <Pressable onPress={() => {
                                                let data = [...userData];
                                                data[index].playing = !data[index].playing;
                                                setUserData(data);
                                            }}>
                                                {!item?.playing && (
                                                    <PlayIcon height={40} width={40} />
                                                )}
                                                {item?.playing && (
                                               <PauseIcon height={35} width={35}/>
                                                )}
                                            </Pressable>
                                        </HStack>
                                    </VStack>)
                            }}
                            keyExtractor={({ item, index }) => index}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </VStack>
                    </>)
                }
            </VStack>
            {/* </ScrollView> */}
        </VStack>
    )
}
