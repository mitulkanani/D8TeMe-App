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
import PauseIcon from '../../../assets/icons/pause.svg'
import { Button } from '../../../components/Button';
import {
    Button as GlueStackButton,
    ButtonIcon,
} from '@gluestack-ui/themed';
import { CloseIcon } from '@gluestack-ui/themed';
import FoodWhite from '../../../assets/icons/foodwhite.svg'
import FoodPink from '../../../assets/icons/foodpink.svg'
import HotOver from '../../../assets/icons/friendship.svg'
import HotOverWhite from '../../../assets/icons/friendship-white.svg'
import RomanticPink from '../../../assets/icons/romanticpink.svg'
import RomanticWhite from '../../../assets/icons/romanticwhite.svg'
import FriendshipPink from '../../../assets/icons/friendshippink.svg'
import FriendshipWhite from '../../../assets/icons/friendshipwhite.svg'
import AnimalPink from '../../../assets/icons/hotlover.svg'
import AnimalWhite from '../../../assets/icons/hotloverwhite.svg'
const DashBoardScreen = () => {
    const [videoData, setVideoData] = useState([{ playing: false }, { playing: false }, { playing: false }, { playing: false }, { playing: false }]);
    const [trendingVideo, setTrendingVideo] = useState([{ playing: false }, { playing: false }, { playing: false }, { playing: false }, { playing: false }]);
    const [sugggestVideo, setSuggestVideo] = useState([{ playing: false }, { playing: false }, { playing: false }, { playing: false }, { playing: false }]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [types, setTypes] = useState(
        [
            {
                title: 'Foodie',
                selected: false,
                icon: FoodWhite,
                selectedIcon:FoodPink
            },
            {
                title: 'Hot Lover',
                selected: false,
                icon: HotOverWhite,
                selectedIcon: HotOver
            },
            {
                title: 'Romantic',
                selected: false,
                icon: RomanticWhite,
                selectedIcon: RomanticPink
            },
            {
                title: 'Friendship',
                selected: false,
                icon: FriendshipWhite,
                selectedIcon: FriendshipPink
            },
            {
                title: 'Animal Cruelty Free',
                selected: false,
                icon: AnimalWhite,
                selectedIcon: AnimalPink
            },
        ]
    )
    const renderVideoItem = (item: any, index: number) => {
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
                    paused={!(item?.playing)}
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
                        let data = [...videoData];
                        data[index].playing = !data[index].playing;
                        setVideoData(data);
                    }}>
                        {!item?.playing && (
                            <PlayIcon height={40} width={40} />
                        )}
                        {item?.playing && (
                            <VStack mr='$1'>
                                <PauseIcon height={35} width={35} />
                            </VStack>
                        )}
                    </Pressable>
                </HStack>
            </VStack>
        )
    }
    const renderTrendingVideoItem = (item: any, index: number) => {
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
                    paused={!(item?.playing)}
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
                        let data = [...trendingVideo];
                        data[index].playing = !data[index].playing;
                        setTrendingVideo(data);
                    }}>
                        {!item?.playing && (
                            <PlayIcon height={40} width={40} />
                        )}
                        {item?.playing && (
                            <VStack mr='$1'>
                                <PauseIcon height={35} width={35} />
                            </VStack>
                        )}
                    </Pressable>
                </HStack>
            </VStack>
        )
    }
    const renderSuggesionVideoItem = (item: any, index: number) => {
        return (
            <VStack style={{
                width: Dimensions.get('window').width * 0.60, // Adjust as necessary
                height: 300, // Set a height for the video
                marginHorizontal: 6,
                overflow: 'hidden',
                borderRadius: 10,
                // padding: 4,
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
                    source={{ uri: require('../../../assets/video/video3.mp4') }}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    resizeMode="cover"
                    repeat
                    paused={!(item?.playing)}
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
                    <Pressable onPress={() => {
                        let data = [...sugggestVideo];
                        data[index].playing = !data[index].playing;
                        setSuggestVideo(data);
                    }}>
                        {!item?.playing && (
                            <PlayIcon height={40} width={40} />
                        )}
                        {item?.playing && (
                            <VStack mr='$1'>
                                <PauseIcon height={35} width={35} />
                            </VStack>
                        )}
                    </Pressable>
                </HStack>
            </VStack>
        )
    }
    const renderTypeItems = (item: any, index: number) => {
        return (
            <Pressable onPress={()=>{
                let newdata=[...types];
                newdata[index].isSelected=!newdata[index].isSelected;
                setTypes(newdata);
            }}>
                <HStack key={index} py='$2' px='$4' borderWidth={1} borderColor='$fontSecondaryColor' my='$1' mx='$1' borderRadius={100} alignItems='center' bg={
                    item.isSelected? '$fontSecondaryColor' : 'white'
                }>
                    <VStack mr='$2'>
                        <Icon as={ item.isSelected? item.icon: item.selectedIcon} size='md' />
                    </VStack>
                    <Text color={
                    item.isSelected?  'white':'$fontSecondaryColor' 
                    } fontSize={'$md'} fontWeight={'$semibold'} fontFamily={fontFamily.Poppins} textAlign='center'>{item.title}</Text>

                </HStack>
            </Pressable>
        )
    }
    return (
        <SafeAreaView flex={1} bg='$white'>
            <ScrollView showsVerticalScrollIndicator={false}>
                <VStack mb='$6' >
                    <VStack my={'$3'} mx='$1.5'>
                    <Text color="$black" fontSize={'$lg'} textAlign='center' fontWeight={'$semibold'} fontFamily={fontFamily.Poppins} p='$2' mb='$1.5'>
                    Explore By Tags
                        </Text>
                        <FlatList
                            data={types}
                            renderItem={({ item, index }) => renderTypeItems(item, index)}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </VStack>
                    <VStack mt='$4'>
                        <FlatList
                            data={videoData}
                            renderItem={({ item, index }) => renderVideoItem(item, index)}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </VStack>
                    <VStack mt='$6'>
                        <Text color="$black" fontSize={'$lg'} fontWeight={'$semibold'} fontFamily={fontFamily.Poppins} p='$2' mb='$1.5'>
                            Treading  Videos
                        </Text>
                        <FlatList
                            data={trendingVideo}
                            renderItem={({ item, index }) => renderTrendingVideoItem(item, index)}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </VStack>
                    <VStack mt='$8' borderWidth={1} borderColor='$coolGray300' borderRadius={12} mx='$2' p='$2'>
                        <Text color="$black" fontSize={'$lg'} textAlign='center' fontWeight={'$semibold'} fontFamily={fontFamily.Poppins} p='$2' mb='$1.5'>
                            Why Choose Us
                        </Text>
                        <VStack style={{
                            width: Dimensions.get('window').width * 0.90, // Adjust as necessary
                            height: 200, // Set a height for the video
                            alignSelf:'center',
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
                                paused={!isPlaying}
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
                                    setIsPlaying(!isPlaying)
                                }}>
                                    {!isPlaying && (
                                        <PlayIcon height={40} width={40} />
                                    )}
                                    {isPlaying && (
                                        <PauseIcon height={35} width={35} />
                                    )}
                                </Pressable>
                            </HStack>
                        </VStack>
                        <VStack mt='$2' p='$3'>
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
                    <VStack mt='$8'>
                        <Text color="$black" fontSize={'$lg'} textAlign='center' fontWeight={'$semibold'} fontFamily={fontFamily.Poppins} p='$2' mb='$1.5'>
                            Over 1000+ People trust us
                        </Text>
                        <VStack mt='$4' >
                            <VStack mt='$20'>
                                <Image source={require('../../../assets/images/Intro/BgImage.jpeg')}
                                    width={Dimensions.get('window').width * 1}// Adjust as necessary
                                    height={Dimensions.get('window').height / 3.5} opacity={0.2}
                                />
                            </VStack>
                            <VStack position='absolute' ml='$1.5' top={-12} >
                                <FlatList
                                    data={sugggestVideo}
                                    renderItem={({ item, index }) => renderSuggesionVideoItem(item, index)}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{ zIndex: 2, }}
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