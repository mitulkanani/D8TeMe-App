import React, { useRef, useState } from 'react';
import { AddIcon, ButtonText, CloseCircleIcon, CloseIcon, Divider, FlatList, Heading, HStack, Icon, Image, KeyboardAvoidingView, Pressable, ScrollView, Text, VStack } from "@gluestack-ui/themed"
import { fontFamily } from '../../../utils/constants/Constants';
import { styles } from './style';
import { TextInput } from '../../../components/TextInput';
import { Button } from '../../../components/Button';
import { Checkbox } from '../../../components/Checkbox';
import { PressableItemList } from '../../../components/PressableItemList/PressableItemList';
import {
    Button as GlueStackButton,
    ButtonIcon,
} from '@gluestack-ui/themed';
const PersonalDetails = ({ onSuccess, onBackClick }) => {
    const [showGender, setshowGender] = useState(false);

    const [selectedItems, setSelectedItems] = useState();
    const [selectedgender, setSelectedGender] = useState();
    const [selectedLookingfor, setSelectedLookingfor] = useState([]);
    const [showLookingFor, setshowLookingFor] = useState(false);
    const genderData = ["Men", "Women", "More"];
    const showMeData = ["Men", "Women", "Everyone"];
    const imageData = [
        require('../../../assets/images/image.jpg'),
        require('../../../assets/images/image1.jpg'),
        require('../../../assets/images/image2.jpg'),
        require('../../../assets/images/image3.jpg'),
        require('../../../assets/images/image4.jpg'),
        require('../../../assets/images/image5.jpg'),
        require('../../../assets/images/image6.jpg'),
        require('../../../assets/images/image7.jpg'),
        require('../../../assets/images/image8.jpg'),
        require('../../../assets/images/image9.jpg'),
        require('../../../assets/images/image10.jpg'),
    ]
    const handleselectItem = (item: any) => {
        setSelectedLookingfor((prevSelected: any) => {
            if (prevSelected?.includes(item)) {
                let filteredData = prevSelected?.filter((selectedItem: any) => selectedItem !== item);
                return filteredData; // Deselect item
            } else {
                let filteredData = [...prevSelected, item];
                return filteredData;// Select item
            }
        });
    }
    const renderSelectedLookingForItem = (item: unknown) => {
        return (
            <VStack bg='#CDCDCD4D' mr='$3' mb='$3' mt='$3'>
                <Image source={item ? item : require('../../../assets/images/defaultImage.jpg')} style={{ width: 100, height: 100, margin: 6 }} resizeMode='contain' />

                <Pressable onPress={() => handleselectItem(item)} position='absolute' right={-5} top={-8} >
                    <CloseCircleIcon color={'#FF0080'} />
                </Pressable>
            </VStack>
        )
    }
    const renderLookingForItem = (item: unknown) => {
        const isSelected = selectedLookingfor?.includes((item));
        return (
            <Pressable onPress={() => {
                handleselectItem(item)
            }}
                bg='#CDCDCD4D'
                mx={'$2'}
                my={'$3'}
                style={{
                    borderWidth: 1,
                    borderColor: isSelected ? "#FF0080" : "white",
                    borderRadius: 4
                }}
                alignSelf='center'
            >
                <Image source={item ? item : require('../../../assets/images/defaultImage.jpg')} style={{ width: 150, height: 200, margin: 8 }} resizeMode='contain' />
            </Pressable>
        )
    }

    return (
        <VStack>
            <React.Fragment>
                {!showLookingFor && (
                    <VStack mt='$8'>
                        <Text style={[styles.titleTextStyle, { fontWeight: '600' }]}>Gender</Text>
                        <Text style={[styles.secondaryTextStyle, { fontSize: 14 }]}>Lorem ipsum dolor sit amet consectetur adipisc.</Text>
                        <VStack mt='$8'>
                            <Text fontFamily={fontFamily.Poppins} fontWeight={'$medium'} color='$labelColor' fontSize={'$md'} mb={'$2'}>Gender</Text>
                            <PressableItemList
                                data={genderData}
                                selectSingleItem
                                onclickItem={(item) => setSelectedGender(item)}
                            />
                            <VStack mt={'$3'} mb={'$8'}>
                                <Checkbox
                                    aria-label="multiple"
                                    labelColor="#7F7F7F"
                                    value=""
                                    isChecked={showGender}
                                    onChange={e => {
                                        setshowGender(e);
                                    }}
                                    checkboxContainerStyle={{
                                        alignSelf: 'flex-start',
                                        marginTop: 4,
                                    }}
                                    label="Show my gender on my profile."
                                    fontFamily={fontFamily.Poppins}
                                />
                            </VStack>
                            <Text fontFamily={fontFamily.Poppins} fontWeight={'$medium'} color='$labelColor' fontSize={'$md'} mb={'$2'}>Show me</Text>
                            <PressableItemList
                                data={showMeData}
                                selectSingleItem
                                onclickItem={(item: React.SetStateAction<undefined>) => setSelectedItems(item)}
                            />
                            <VStack mt={'$8'}>

                                <Text fontFamily={fontFamily.Poppins} fontWeight={'$medium'} color='$labelColor' fontSize={'$md'} mb={'$2'}>Looking for</Text>

                                {selectedLookingfor && (selectedLookingfor?.length ?
                                    <VStack mb='$8'>
                                        <FlatList
                                            // horizontal
                                            showsVerticalScrollIndicator={false}
                                            numColumns={3}
                                            data={selectedLookingfor}
                                            keyExtractor={(index: any) => index.toString()}
                                            renderItem={({ item }) => renderSelectedLookingForItem(item)} />

                                    </VStack> : null)}
                                <GlueStackButton
                                    variant={'outline'}
                                    isDisabled={false}
                                    onPress={() => setshowLookingFor(true)}
                                    // justifyContent='flex-start'
                                    style={{
                                        borderColor: '#E9E9E9',
                                    }}
                                    rounded={100}
                                    bg="$white"
                                    w={'60%'}>
                                    <ButtonIcon as={AddIcon} mr={'$2'} color='#A6A6A6' />
                                    <VStack alignItems='flex-start'>
                                        <ButtonText color={'#A6A6A6'} fontFamily={fontFamily.Poppins} fontWeight={'500'} fontSize={14}>
                                            Add Relationship intent
                                        </ButtonText>
                                    </VStack>
                                </GlueStackButton>
                            </VStack>
                        </VStack>
                        <HStack alignSelf='center' justifyContent='space-between' mt={'$4'} gap={'$8'}>

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
                )}
                {showLookingFor && (
                    <VStack mt='$8'>
                        <Text style={[styles.titleTextStyle, { fontWeight: '600', textAlign: 'center' }]}>Right now i’m looking for...</Text>
                        <Text style={[styles.secondaryTextStyle, { fontSize: 14, textAlign: 'center' }]}>Lorem ipsum dolor sit amet Odio augue</Text>
                        <FlatList
                            // horizontal
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            data={imageData}
                            renderItem={({ item }) => renderLookingForItem(item)
                            } />
                        <Button
                            label={'Continue'}
                            // w={'45%'}
                            backgroundColor={selectedLookingfor?.length ? "#FF0080" : "#F1F1F1"}
                            borderColor={selectedLookingfor?.length ? "#FF0080" : "#F1F1F1"}
                            color={selectedLookingfor?.length ? "#fff" : "#B9B9B9"}
                            fontWeight="medium"
                            fontSize="$md"
                            mt={'$6'}
                            borderRadius={6}
                            onPress={() => setshowLookingFor(false)}
                            disabled={selectedLookingfor?.length > 0 ? false : true}
                        />
                    </VStack>
                )}
            </React.Fragment>
        </VStack>

    )
}
export default PersonalDetails