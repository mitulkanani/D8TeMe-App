import React, { useRef, useState } from 'react';
import {
    AddIcon,
    FlatList,
    HStack,
    Text,
    VStack,
    Pressable,
    Alert,
    Image
} from "@gluestack-ui/themed";
import { CAMERA } from '../../../utils/constants/Constants';
import { styles } from './style';
import { Button } from '../../../components/Button';
import ImagePicker, { Options } from 'react-native-image-crop-picker';
import { ActionSheetComponentForImagePick } from '../../../components/ImageActionSheet';
import { CloseCircleIcon } from '@gluestack-ui/themed';

const ProfilePhoto = ({ onSuccess, onBackClick }) => {
    const [images, setImages] = useState(Array(6).fill(null));
    const [imageActionSheet, setImageActionSheet] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    function handleAddMedia(type: string) {
        const configOption: Options = {
            compressImageQuality: 1,
            mediaType: 'photo',
        };

        const openPicker = type === CAMERA ? ImagePicker.openCamera : ImagePicker.openPicker;

        openPicker(configOption)
            .then((image) => handleImageResponse(image))
            .catch((error) => handlePickerError(error));
    }

    function handleImageResponse(image) {
        if (selectedIndex !== null) {
            const updatedImages = [...images];
            updatedImages[selectedIndex] = image;
            setImages(updatedImages);
            setSelectedIndex(null); // Reset the index after selection
        }
        setImageActionSheet(false);
    }

    function handlePickerError(error) {
        const errorMessages = {
            'E_PICKER_NO_CAMERA_PERMISSION': 'Camera permission is required',
            'E_PERMISSION_MISSING': 'Gallery permission is required',
            'E_NO_CAMERA_PERMISSION': 'Please allow camera permission to upload image',
            'E_NO_LIBRARY_PERMISSION': 'Please allow library to upload image',
        };
        
        if (errorMessages[error.code]) {
            Alert.alert('Permission', errorMessages[error.code]);
        }
    }

    const removeImage = (index) => {
        const updatedImages = [...images];
        updatedImages[index] = null; // Clear the image at the index
        setImages(updatedImages);
    };

    return (
        <VStack>
            {imageActionSheet && (
                <ActionSheetComponentForImagePick
                    imageActionSheet={imageActionSheet}
                    setImageActionSheet={setImageActionSheet}
                    handleAddMedia={handleAddMedia}
                />
            )}
            <VStack my='$8'>
                <Text style={[styles.titleTextStyle, { fontWeight: '600' }]}>Profile Photo</Text>
                <VStack my='$6'>
                    <FlatList
                        data={images}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={2}
                        renderItem={({ item, index }) => (
                            <Pressable key={index} onPress={() => {
                                setSelectedIndex(index);
                                setImageActionSheet(true);
                            }} style={{
                                borderWidth: 1,
                                borderColor: '#CDCDCD',
                                borderRadius: 8,
                                padding: 8,
                                margin: 8,
                                backgroundColor: 'white',
                                elevation: 2,
                                height: 200,
                                width: '45%',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                {item ? (
                                    <VStack style={{ position: 'relative' }}>
                                        <Image source={{ uri: item.path }} style={{ width: 200, height:180, borderRadius: 8 }}  alt='image' resizeMode='contain'/>
                                        {/* <Pressable onPress={() => removeImage(index)} style={{
                                            position: 'absolute',
                                            top: 10,
                                            right: 0,
                                            backgroundColor: '#EEEEEE',
                                            borderRadius: 50,
                                            padding: 5
                                        }}>
                                          <CloseCircleIcon color={'#FF0080'} />
                                        </Pressable> */}
                                    </VStack>
                                ) : (
                                    <VStack style={{
                                        borderRadius: 100, borderWidth: 1, borderStyle: 'dashed', width: 50, height: 50,
                                        borderColor: '#FF0080', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <AddIcon color='#FF0080' size='xl' />
                                    </VStack>
                                )}
                            </Pressable>
                        )}
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
        </VStack>
    );
};

export default ProfilePhoto;
