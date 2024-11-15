import { ButtonText, CheckIcon, Divider, FlatList, HStack, Icon, Image, Pressable, SafeAreaView, ScrollView, Text, VStack } from '@gluestack-ui/themed';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import Video from 'react-native-video';
import { fontFamily } from '../../../utils/constants/Constants';
import PlayIcon from '../../../assets/icons/play.svg'
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
const UserProfile = () => {
    const isFocused = useIsFocused();
    const navigation = useNavigation();

    const { height: windowHeight } = Dimensions.get('window');
    const [videoLayout, setVideoLayout] = useState({});

    const [isPlaying, setIsPlaying] = useState(true);
    const ProfileSummerySection = () => {
        return (
            <VStack p={'$3'}>
                <VStack alignItems="center" justifyContent="center" mt={'$5'}>
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
                            <HStack>
                                <Icon as={PlayIcon} w={80} h={80} color="white" />
                            </HStack>
                        </Pressable>
                    )}
                    {isPlaying && (
                        <VStack
                            onLayout={event => {
                                const { y, height } = event.nativeEvent.layout;
                                setVideoLayout({ y, height });
                            }}
                            h={200}
                            borderRadius={10}
                            w={'100%'}
                            overflow="hidden">
                            <Video
                                source={{
                                    uri: require('../../../assets/video/fishvideo.mp4'),
                                }}
                                // eslint-disable-next-line react-native/no-inline-styles
                                style={{ width: '100%', height: '100%' }}
                                controls={true}
                                resizeMode="cover"
                                repeat
                            //   paused={!isPlaying || !isFocused}
                            />
                            <HStack position='absolute' bottom={10} left={10} justifyContent='space-between' width={'95%'}>
                                <HStack alignItems='center'>
                                    <VStack ml='$2'>
                                        <Text color="$white" textAlign={'left'} fontSize={'$md'} fontWeight={'$semibold'} fontFamily={fontFamily.Poppins}>
                                            {"Mars the fourth planet"}
                                        </Text>
                                        <Text color="$white" textAlign={'left'} fontFamily={fontFamily.Poppins} fontWeight={'$normal'} fontSize={14}>
                                            {"25 minutes"}
                                        </Text>
                                    </VStack>
                                </HStack >
                                <HStack >
                                    <Pressable mr='$1.5'>
                                        <Like height={25} width={25} />
                                    </Pressable>
                                    <Pressable mr='$1.5'>
                                        <Repeat height={25} width={25} />
                                    </Pressable>
                                    <Pressable mr='$1.5'>
                                        <SoundOff height={25} width={25} />
                                    </Pressable>
                                </HStack>

                            </HStack>
                        </VStack>
                    )}
                    <VStack mt={'$6'} bg='$containerBgColor ' width={'100%'} px='$1.5' py='$2' rounded={5}>
                        <HStack justifyContent='space-between' >
                            <HStack alignItems='center'>
                                <Image source={require('../../../assets/images/Intro/userDummy.png')} height={35} width={35} alt='image' />
                                <VStack ml='$2'>
                                    <Text color="$blueGray700" textAlign={'left'} fontSize={'$md'} fontWeight={'$semibold'} fontFamily={fontFamily.Poppins}>
                                        {"Harisha Libeya"}
                                    </Text>
                                    <Text color="$blueGray400" textAlign={'left'} fontFamily={fontFamily.Poppins} fontSize={'$sm'} fontWeight={'$normal'}>
                                        {`Age: ${25} | Height: ${5.7}`}
                                    </Text>
                                </VStack>

                            </HStack>
                            <Button
                                label='Request to Match'
                                w={'46.5%'}
                                h={40}
                                backgroundColor="$fontSecondaryColor"
                                borderColor="$fontSecondaryColor"
                                color="$white"
                                fontWeight="$medium"
                                fontSize="$sm"
                                // mt={'$6'}
                                borderRadius={6}
                                textAlign={'center'}
                                onPress={() => { }}
                            />
                        </HStack>
                        <VStack ml='$1' mt='$6'>
                            <Text color="$blueGray700" textAlign={'left'} fontSize={'$md'} fontWeight={'$semibold'} fontFamily={fontFamily.Poppins}>
                                {"Description"}
                            </Text>
                            <Text color="$blueGray400" textAlign={'left'} fontFamily={fontFamily.Poppins} fontSize={'$sm'} fontWeight={'$normal'}>
                                {`Building an enterprise level site doesn't need nightmare or cost your thousands. Felix is purpose built for ease of use and complete flexability to create even the most powerful of products.`}
                            </Text>
                        </VStack>
                        <VStack mt='$4' mx='$1' alignItems='center'>
                            <GlueStackButton
                                variant={'outline'}
                                isDisabled={false}
                                onPress={() => { }}
                                justifyContent='center'
                                borderColor={'$fontSecondaryColor'}
                                bg="$white"
                                h={45}
                                w={'100%'}
                                alignItems='center'>
                                {<ButtonIcon as={Heart} size='lg' />}

                                <ButtonText color={'$fontSecondaryColor'} px={'$2'} fontSize="$sm" fontWeight="$medium" textAlign={'center'} fontFamily={fontFamily.Poppins}>
                                    View Favourite
                                </ButtonText>
                            </GlueStackButton>
                            <GlueStackButton
                                variant={'outline'}
                                isDisabled={false}
                                onPress={() => { }}
                                justifyContent='center'
                                borderColor={'$fontSecondaryColor'}
                                bg="$white"
                                h={45}
                                w={'100%'}
                                mt={'$2'}
                                alignItems='center'>
                                {<ButtonIcon as={VideoLogo} size='lg' />}

                                <ButtonText color={'$fontSecondaryColor'} px={'$2'} fontSize="$sm" fontWeight="$medium" textAlign={'center'} fontFamily={fontFamily.Poppins}>
                                    Record new member video
                                </ButtonText>
                            </GlueStackButton>
                        </VStack>
                    </VStack>
                    {/* {VideosSection()} */}

                </VStack>
            </VStack>
        )
    }
    const RenderViewItem = () => {
        return (
            <VStack bg='$containerBgColor ' p='$2.5' rounded={6}>
                <VStack style={{
                    width: Dimensions.get('window').width * 0.84, // Adjust as necessary
                    height: 200, // Set a height for the video
                    // marginHorizontal: 10,
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
                        paused={false}
                    // Add any other props you need
                    />
                    <HStack position='absolute' bottom={10} left={10} justifyContent='space-between' width={'95%'}>
                        <HStack alignItems='center'>
                            <VStack ml='$2'>
                                <Text color="$white" textAlign={'left'} fontSize={'$md'} fontWeight={'$semibold'} fontFamily={fontFamily.Poppins}>
                                    {"Earth exploration"}
                                </Text>
                                <Text color="$white" textAlign={'left'} fontFamily={fontFamily.Poppins} fontWeight={'$normal'} fontSize={14}>
                                    {"23 minutes"}
                                </Text>
                            </VStack>
                        </HStack>
                    </HStack>
                </VStack>
                <HStack alignItems='center' mt='$2.5'>
                    <Image source={require('../../../assets/images/Intro/userDummy.png')} height={35} width={35} alt='image' />
                    <VStack ml='$2'>
                        <Text color="$blueGray700" textAlign={'left'} fontSize={'$md'} fontWeight={'$semibold'} fontFamily={fontFamily.Poppins}>
                            {"Harisha Libeya"}
                        </Text>
                        <Text color="$blueGray400" textAlign={'left'} fontFamily={fontFamily.Poppins} fontSize={'$sm'} fontWeight={'$normal'}>
                            {`Age: ${25} | Height: ${5.7}`}
                        </Text>
                    </VStack>

                </HStack>
            </VStack>
        )
    }
    const VideosSection = () => {
        return (
            <VStack p={'$3'} mt={'$4'}>
                <Text color="$black" textAlign={'left'} fontSize={'$lg'} fontWeight={'$semibold'} fontFamily={fontFamily.Poppins}>
                    {"Amazing Profile and Videos"}
                </Text>


                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <HStack mt={'$3'}>
                        <VStack>
                            <Text mb='$2' color="$blueGray700" textAlign={'left'} fontSize={'$md'} fontWeight={'$semibold'} fontFamily={fontFamily.Poppins}>
                                {"This Weeks Highlighted Video"}
                            </Text>
                            {RenderViewItem()}
                        </VStack>
                        <VStack mx={'$4'} borderColor='$blueGray200' borderWidth={1} />
                        <VStack>
                            <Text mb='$2' color="$blueGray700" textAlign={'left'} fontSize={'$md'} fontWeight={'$semibold'} fontFamily={fontFamily.Poppins}>
                                {"Most Viewed Profile"}
                            </Text>
                            <FlatList
                                data={[, , , , ,]}
                                renderItem={({ item }) => {
                                    return RenderViewItem()
                                }}
                                horizontal
                                scrollEnabled={false} />
                        </VStack>
                    </HStack>
                </ScrollView>
            </VStack>
        )
    }
    const MyMatchesSection = () => {
        return (
            <VStack mt={'$2'} bg='$coolGray100'>
                <HStack justifyContent='space-between' mt='$2'>
                    <Text color="$black" textAlign={'left'} fontSize={'$lg'} fontWeight={'$semibold'} fontFamily={fontFamily.Poppins} p='$3'>
                        {"My Matches"}
                    </Text>
                    <HStack>
                        <Button
                            label='View Single'
                            w={'40%'}
                            h={40}
                            backgroundColor="$fontSecondaryColor"
                            borderColor="$fontSecondaryColor"
                            color="$white"
                            fontWeight="$medium"
                            fontSize="$sm"
                            // mt={'$6'}
                            ml={'$1'}
                            borderRadius={6}
                            textAlign={'center'}
                            onPress={() => { }}
                        />
                        <Button
                            label='View More'
                            w={'38%'}
                            h={40}
                            backgroundColor="$white"
                            borderColor="$fontSecondaryColor"
                            color="$fontSecondaryColor"
                            fontWeight="$medium"
                            fontSize="$sm"
                            ml={'$1'}
                            borderRadius={6}
                            textAlign={'center'}
                            onPress={() => { }}
                        />
                    </HStack>
                </HStack>

                <FlatList
                    data={[, , , , ,]}
                    renderItem={({ item }) => {
                        return (RenderViewItem());
                    }}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                />
            </VStack>
        )
    }
    const renderRequestItem = () => {
        return (
            <VStack p={'$2'} borderRadius={8} overflow='hidden' borderWidth={1} borderColor='$blueGray100' bg='$blueGray100' mt='$3'>
                <HStack>

                    {/* <Image source={require('../../../assets/images/image4.jpg')} height={90} width={120} alt='image' borderRadius={6} /> */}
                    <Video
                        source={{
                            uri: require('../../../assets/video/fishvideo.mp4'),
                        }}
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{ width: '40%', height: 90, }}
                        controls={true}
                        resizeMode="cover"
                        repeat
                    //   paused={!isPlaying || !isFocused}
                    />
                    <VStack ml={'$3'}>
                        <Text color="$blueGray700" textAlign={'left'} fontSize={'$sm'} fontWeight={'$semibold'} fontFamily={fontFamily.Poppins}>
                            {"Harisha Libeya"}
                        </Text>
                        <Text color="$blueGray400" textAlign={'left'} fontFamily={fontFamily.Poppins} fontSize={'$xs'} fontWeight={'$normal'} mt='-$1'>
                            {`Age: ${25} | Height: ${5.7}`}
                        </Text>
                        <Text color="$blueGray700" textAlign={'left'} fontSize={'$sm'} fontWeight={'$semibold'} fontFamily={fontFamily.Poppins} mt='-$0.5'>
                            {"“Hi, I’d Love to Connect”"}
                        </Text>
                        <Text color="$blueGray400" textAlign={'left'} fontFamily={fontFamily.Poppins} fontSize={'$xs'} fontWeight={'$normal'} mt='-$1'>
                            {"Today 5:55 PM "}
                        </Text>
                        <Text color="$blueGray400" textAlign={'left'} fontFamily={fontFamily.Poppins} fontSize={11} fontWeight={'$normal'} mt='-$1.5'>
                            {`New Connection Requests`}
                        </Text>
                    </VStack>
                </HStack>
                <HStack justifyContent='space-between' mt={'$1'}>
                    <GlueStackButton
                        variant={'outline'}
                        isDisabled={false}
                        onPress={() => { }}
                        justifyContent='center'
                        borderColor={'#1A9901'}
                        bg="transperant"
                        h={38}
                        w={'48%'}
                        borderRadius={50}
                        alignItems='center'>
                        {<ButtonIcon as={CheckIcon} size='lg' color={'#1A9901'} />}

                        <ButtonText color={'#1A9901'} px={'$2'} fontSize="$sm" fontWeight="$medium" textAlign={'center'} fontFamily={fontFamily.Poppins}>
                            Accept
                        </ButtonText>
                    </GlueStackButton>
                    <GlueStackButton
                        variant={'outline'}
                        isDisabled={false}
                        onPress={() => { }}
                        justifyContent='center'
                        borderColor={'#C20000'}
                        bg="transperant"
                        h={38}
                        w={'48%'}
                        borderRadius={50}
                        alignItems='center'>
                        {<ButtonIcon as={CloseIcon} size='lg' color={'#C20000'} />}

                        <ButtonText color={'#C20000'} px={'$2'} fontSize="$sm" fontWeight="$medium" textAlign={'center'} fontFamily={fontFamily.Poppins}>
                            Reject
                        </ButtonText>
                    </GlueStackButton>
                </HStack>
            </VStack>
        )
    }
    const RequestSection = () => {
        return (
            <VStack p={'$3'} mt={'$4'} >
                <Text color="$black" textAlign={'left'} fontSize={'$lg'} fontWeight={'$semibold'} fontFamily={fontFamily.Poppins}>
                    {"Date/Connection Requests"}
                </Text>
                <FlatList
                    data={[, , , , ,]}
                    renderItem={({ item }) => {
                        return (renderRequestItem());
                    }}
                    showsVerticalScrollIndicator={false}
                />
                <VStack alignItems='center'>
                    <Button
                        label='View More'
                        w={'35%'}
                        h={40}
                        backgroundColor="$coolGray100"
                        borderColor="$coolGray100"
                        color="$blueGray700"
                        fontWeight="$medium"
                        fontSize="$sm"
                        mt={'$3'}
                        borderRadius={6}
                        textAlign={'center'}
                        onPress={() => { }}
                    />
                </VStack>

            </VStack>
        )
    }
    const renderChatItem = () => {
        return (
            <VStack overflow='hidden' borderWidth={1} borderColor='$white' bg='$white' mt='$3'>
                <HStack>
                    <Video
                        source={{
                            uri: require('../../../assets/video/video3.mp4'),
                        }}
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{ width: '38%', height: 100, }}
                        controls={true}
                        resizeMode="cover"
                        repeat
                        paused={true}
                    />
                    <VStack ml={'$2'}>
                        <Text color="$chatTextColor" textAlign={'left'} fontSize={'$sm'} fontWeight={'$semibold'} fontFamily={fontFamily.Poppins}
                            backgroundColor='$coolGray100' p='$2.5' width={220}
                            borderTopLeftRadius={30} borderBottomRightRadius={100} borderTopRightRadius={100}>
                            {"Lorem ipsum dolor sit amet consectetur. Pellentesque."}
                        </Text>
                        <Text color="$textLight500" textAlign={'left'} fontFamily={fontFamily.Poppins} fontWeight={'$normal'} fontSize={12} mt='$1'>
                            {"Today 5:55 PM"}
                        </Text>
                    </VStack>
                </HStack>
            </VStack>
        )
    }
    const ChatSection = () => {
        return (
            <VStack p={'$3'} mt={'$4'} >
                <Text color="$black" textAlign={'center'} fontSize={'$lg'} fontWeight={'$semibold'} fontFamily={fontFamily.Poppins} backgroundColor='$coolGray100' p='$2'>
                    {"Chat Room"}
                </Text>
                <FlatList
                    data={[, , , , ,]}
                    renderItem={({ item }) => {
                        return (renderChatItem());
                    }}
                    showsVerticalScrollIndicator={false}
                />
                <VStack alignItems='center'>
                    <Button
                        label='View More'
                        w={'35%'}
                        h={40}
                        backgroundColor="$coolGray100"
                        borderColor="$coolGray100"
                        color="$blueGray700"
                        fontWeight="$medium"
                        fontSize="$sm"
                        mt={'$3'}
                        borderRadius={6}
                        textAlign={'center'}
                        onPress={() => { }}
                    />
                </VStack>

            </VStack>
        )
    }
    return (
        <SafeAreaView flex={1} bg='$white'>
            <ScrollView showsVerticalScrollIndicator={false}>
                <VStack mb='$6'>
                    {ProfileSummerySection()}
                    {VideosSection()}
                    {MyMatchesSection()}
                    {RequestSection()}
                    {ChatSection()}
                </VStack>
            </ScrollView>
        </SafeAreaView>
    )
}
export default UserProfile;