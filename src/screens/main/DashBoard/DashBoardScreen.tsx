import { ButtonText, CheckIcon, Divider, FlatList, HStack, Icon, PlayIcon as PlayWhite, Image, Pressable, SafeAreaView, ScrollView, Text, VStack } from '@gluestack-ui/themed';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import Video from 'react-native-video';
import { fontFamily } from '../../../utils/constants/Constants';
import PlayIcon from '../../../assets/icons/play-dark.svg'
import SoundOff from '../../../assets/icons/sound-off.svg'
import Like from '../../../assets/icons/like-white.svg'
import Repeat from '../../../assets/icons/repeat-white.svg'
import Heart from '../../../assets/icons/heart.svg'
import VideoLogo from '../../../assets/icons/video.svg'
import { Button } from '../../../components/Button';
import {
    Button as GlueStackButton,
    ButtonIcon,
} from '@gluestack-ui/themed';
import { CloseIcon } from '@gluestack-ui/themed';
const DashBoardScreen = () => {
    const renderVideoItem = () => {
        return (
            <VStack style={{
                width: Dimensions.get('window').width * 0.95, // Adjust as necessary
                height: 200, // Set a height for the video
                marginHorizontal: 10,
                overflow: 'hidden',
                borderRadius: 10,
            }}>
                <Video
                    source={{ uri: require('../../../assets/video/video2.mp4') }}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    resizeMode="cover"
                    repeat
                    paused={true}
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
                    <Pressable >
                        <PlayIcon height={40} width={40} />
                    </Pressable>
                </HStack>
            </VStack>
        )
    }
    const renderSuggesionVideoItem = () => {
        return (
            <VStack style={{
                width: Dimensions.get('window').width * 0.60, // Adjust as necessary
                height: 300, // Set a height for the video
                marginHorizontal: 6,
                overflow: 'hidden',
                borderRadius: 10,
                padding: 4,
                // backgroundColor: 'transparent',
                shadowColor: 'rgba(0,0,0, .4)', // IOS
                shadowOffset: { height: 1, width: 1 }, // IOS
                shadowOpacity: 1, // IOS
                shadowRadius: 1, //IOS
                backgroundColor: '#F5F5F5',
                elevation: 2,
            }}
            >
                <Video
                    source={{ uri: require('../../../assets/video/video2.mp4') }}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    resizeMode="cover"
                    repeat
                    paused={true}
                // Add any other props you need
                />
                <HStack position='absolute' bottom={10} left={10} justifyContent='space-between' width={'95%'}>
                    <HStack alignItems='center'>
                        <Image source={require('../../../assets/images/Intro/userDummy.png')} height={35} width={35} alt='image' />
                        <VStack ml='$1.5'>
                            <Text color="$white" textAlign={'left'} fontSize={15} fontWeight={'$semibold'} fontFamily={fontFamily.Poppins}>
                                {"Harisha Libeya"}
                            </Text>
                            <Text color="$white" textAlign={'left'} fontFamily={fontFamily.Poppins} fontSize={13} >
                                {"Personality"}
                            </Text>
                        </VStack>
                    </HStack>
                    <Pressable >
                        <PlayWhite height={35} width={35} color='$white' />
                    </Pressable>
                </HStack>
            </VStack>
        )
    }
    return (
        <SafeAreaView flex={1} bg='$white'>
            <ScrollView showsVerticalScrollIndicator={false}>
                <VStack mb='$6' >

                    <VStack mt='$4'>
                        <FlatList
                            data={[, , , , ,]}
                            renderItem={({ item }) => renderVideoItem()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </VStack>
                    <VStack mt='$6'>
                        <Text color="$black" fontSize={'$lg'} fontWeight={'$semibold'} fontFamily={fontFamily.Poppins} p='$2' mb='$1.5'>
                            Treading  Videos
                        </Text>
                        <FlatList
                            data={[, , , , ,]}
                            renderItem={({ item }) => renderVideoItem()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </VStack>
                    <VStack mt='$8'>
                        <Text color="$black" fontSize={'$lg'} textAlign='center' fontWeight={'$semibold'} fontFamily={fontFamily.Poppins} p='$2' mb='$1.5'>
                            Why Choose Us
                        </Text>
                        {renderVideoItem()}
                        <VStack ml='$1' mt='$2' p='$3'>
                            <Text color="$blueGray700" textAlign={'left'} fontSize={'$md'} fontWeight={'$semibold'} fontFamily={fontFamily.Poppins}>
                                {"Why Choose as The D8TeMe App? "}
                            </Text>
                            <Text color="$blueGray400" textAlign={'left'} fontFamily={fontFamily.Poppins} fontSize={'$sm'} fontWeight={'$normal'}>
                                {`Kefument mån. Transparens Ingrid Sjöberg Periscope och heterons, regisk göra en pudel. Unika besökare Martin Pettersson. Relans app novellix att Ingemar Blomqvist primafoni. Du kan vara drabbad. Parafoni Oscar Lindberg. Resultatvarna tehask pretisa. Preras Julia Åkesson, råprel heteroningen neling.`}
                            </Text>
                            <Button
                                label='Get start now'
                                w={'46.5%'}
                                h={40}
                                backgroundColor="$fontSecondaryColor"
                                borderColor="$fontSecondaryColor"
                                color="$white"
                                fontWeight="$medium"
                                fontSize="$sm"
                                mt={'$3'}
                                borderRadius={6}
                                textAlign={'center'}
                                onPress={() => { }}
                            />
                        </VStack>
                    </VStack>
                    <VStack my='$8'>

                        <Text color="$black" fontSize={'$lg'} textAlign='center' fontWeight={'$semibold'} fontFamily={fontFamily.Poppins} p='$2' mb='$1.5'>
                            Over 1000+ People trust us
                        </Text>
                        <VStack mt='$2' ml='$1.5' >
                            <FlatList
                                data={[, , , , ,]}
                                renderItem={({ item }) => renderSuggesionVideoItem()}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{zIndex: 2,}}
                            />
                            <VStack style={{
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        bottom: -40,
                                        overflow: 'hidden'
                                        // opacity: 0.18,
                                    }}>
                                <Image source={require('../../../assets/images/Intro/BgImage.jpeg')}
                                    width={Dimensions.get('window').width * 1}// Adjust as necessary
                                    height={200} opacity={0.2} 
                                     />
                            </VStack>
                        </VStack>
                    </VStack>
                </VStack>
            </ScrollView>
        </SafeAreaView>
    )
}
export default DashBoardScreen;