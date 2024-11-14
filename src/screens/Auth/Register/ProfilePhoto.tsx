import React, { useRef, useState } from 'react';
import { AddIcon, Divider, FlatList, Heading, HStack, KeyboardAvoidingView, Pressable, ScrollView, Text, VStack } from "@gluestack-ui/themed"
import { CAMERA, fontFamily } from '../../../utils/constants/Constants';
import { styles } from './style';
import { TextInput } from '../../../components/TextInput';
import { Button } from '../../../components/Button';
import DocumentPicker from 'react-native-document-picker';
import ImagePicker, { Options } from 'react-native-image-crop-picker';
import { Alert } from 'react-native';
import { ActionSheetComponentForImagePick } from '../../../components/ImageActionSheet';

const ProfilePhoto = ({ onSuccess, onBackClick }) => {
    const [image, setImage] = useState([{}, {}, {}, {}, {}, {}]);
    const [imageMedia, setImageMedia] = useState([]);
    const [imageActionSheet, setImageActionSheet] = useState(false);

    function handleAddMedia(type: string) {
        const configOption: Options = {
            compressImageQuality: 1,
            multiple: true,
            mediaType: 'photo',
        };
        if (type === CAMERA) {
            ImagePicker.openCamera(configOption)
                .then((image: any) => handleImageResponse([image]))
                .catch((error: any) => handlePickerError(error));
        } else {
            ImagePicker.openPicker(configOption)
                .then((image: any) => handleImageResponse(image))
                .catch((error: any) => handlePickerError(error));
        }
    }

    function handleImageResponse(image: any) {
        console.log(`Image`,image);
        // let response = [...imageMedia, ...image]
        // setImageMedia(response);
        setImageActionSheet(false);
    }

    function handlePickerError(error: any) {
        if (error.code === 'E_PICKER_NO_CAMERA_PERMISSION') {
            // Handle Camera Permission
        } else if (error.code === 'E_PERMISSION_MISSING') {
            // Handle Gallery Permission
        } else if (error.code === 'E_NO_CAMERA_PERMISSION') {
            // Handle error
            Alert.alert(
                'Permission',
                'Please allow camera permission to upload image',
            );
        } else if (error.code === 'E_NO_LIBRARY_PERMISSION') {
            // Handle error
            Alert.alert('Permission', 'Please allow library to upload image');
        } else {
        }
    }

    return (
        <VStack>
            {imageActionSheet ? (
                <ActionSheetComponentForImagePick
                    imageActionSheet={imageActionSheet}
                    setImageActionSheet={setImageActionSheet}
                    handleAddMedia={handleAddMedia}
                />
            ) : null}
            <React.Fragment>
                <VStack my='$8'>
                    <Text style={[styles.titleTextStyle, { fontWeight: '600' }]}>Profile Photo</Text>
                    <Text style={[styles.secondaryTextStyle, { fontSize: 14 }]}>Lorem ipsum dolor sit amet consectetur adipisc.</Text>
                    <VStack my='$6'>
                        <FlatList
                            data={image}
                            keyExtractor={(item, index) => index.toString()}
                            numColumns={2}
                            renderItem={({ item, index }) => (
                                <Pressable key={index} onPress={() => setImageActionSheet(true)}
                                    style={
                                        {
                                            borderWidth: 1,
                                            borderColor: '#CDCDCD',
                                            borderRadius: 8,
                                            padding: 16,
                                            margin: 8,
                                            backgroundColor: 'white',
                                            shadowColor: 'rgba(0,0,0, .4)', // IOS
                                            shadowOffset: { height: 1, width: 1 }, // IOS
                                            shadowOpacity: 1, // IOS
                                            shadowRadius: 1, //IOS
                                            elevation: 2,
                                            height: 200,
                                            width: '45%',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }
                                    }>
                                    <VStack style={{
                                        borderRadius: 100, borderWidth: 1, borderStyle: 'dashed', width: 50, height: 50,
                                        borderColor: '#FF0080', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <AddIcon color='#FF0080' size='xl' />
                                    </VStack>
                                </Pressable>)}
                        />
                    </VStack>
                    <Text style={[styles.secondaryTextStyle, { fontSize: 14, textAlign: 'center' }]}>Add at least 2 photos to Continue</Text>

                    <HStack alignSelf='center' justifyContent='space-between' gap={'$8'}>
                        <Button
                            label={'Previous step'}
                            w={'45%'}
                            backgroundColor="$fff"
                            borderColor="$fontSecondaryColor"
                            color="$fontSecondaryColor"
                            fontWeight="medium"
                            fontSize="$md"
                            mt={'$6'}
                            borderRadius={6}
                            onPress={onBackClick}
                            style={{
                                shadowColor: 'rgba(0,0,0, .4)', // IOS
                                shadowOffset: { height: 1, width: 1 }, // IOS
                                shadowOpacity: 1, // IOS
                                shadowRadius: 1, //IOS
                                backgroundColor: '#fff',
                                elevation: 2,
                            }}

                        />
                        <Button
                            label={'Next step'}
                            w={'45%'}
                            backgroundColor="$fontSecondaryColor"
                            borderColor="$fontSecondaryColor"
                            color="white"
                            fontWeight="medium"
                            fontSize="$md"
                            mt={'$6'}
                            borderRadius={6}
                            onPress={onSuccess}
                        />
                    </HStack>
                </VStack>
            </React.Fragment>
        </VStack>

    )
}
export default ProfilePhoto