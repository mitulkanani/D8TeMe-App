import React, { useRef, useState } from 'react';
import { ButtonText, Divider, Heading, HStack, KeyboardAvoidingView, Pressable, ScrollView, Text, VStack } from "@gluestack-ui/themed"
import { fontFamily } from '../../../utils/constants/Constants';
import { styles } from './style';
import { TextInput } from '../../../components/TextInput';
import { Button } from '../../../components/Button';
import {
    Button as GlueStackButton,
    ButtonIcon,
} from '@gluestack-ui/themed';
import { AddIcon } from '@gluestack-ui/themed';
import { OptionalFieldModal } from '../../../components/modals/OptionalFieldsModal/OptionalFieldModal';
const OptionalFields = ({ onSuccess, onBackClick }) => {
    const genderData = ["SoundCloud", "Spa", "Ludo","sdfsd", "dfsdfsdfffffz", "SoundCloud", "Spa", "Ludo","sdfsd", "dfsdfsdfffffz","SoundCloud", "Spa", "Ludo","sdfsd", "dfsdfsdfffffz","SoundCloud", "Spa", "Ludo","sdfsd", "dfsdfsdfffffz","SoundCloud", "Spa", "Ludo","sdfsd", "dfsdfsdfffffz"];
    const [selectedPassion, setSelectedPassion] = useState();
    const [selectedOrientation, setSelectedOrientation] = useState();
    const[showModalPassion,setShowModalPassion] = useState(false);
    const[showModalOrientation,setShowModalOrientation] = useState(false);

    return (
        <VStack >
           {showModalPassion&&( <OptionalFieldModal
                isModalVisible={showModalPassion}
                toggleModal={()=>setShowModalPassion(false)}
                data={genderData}
                // selectSingleItem
                onclickItem={(item) => setSelectedPassion(item)}
                selectedItems={selectedPassion}
                title='Passions'
                subtitle='Let everyone know what you’re passionate about by adding it to your profile.'
            />)}
             {showModalOrientation&&( <OptionalFieldModal
                isModalVisible={showModalOrientation}
                toggleModal={()=>setShowModalOrientation(false)}
                data={genderData}
                // selectSingleItem
                onclickItem={(item) => setSelectedOrientation(item)}
                selectedItems={selectedOrientation}
                title='Sexual Orientation         '
                subtitle='Let everyone know what you’re passionate about by adding it to your profile.'
            />)}
            <React.Fragment>
                <VStack my='$8'>
                    <Text style={[styles.titleTextStyle, { fontWeight: '600' }]}>Optional field</Text>
                    <Text style={[styles.secondaryTextStyle, { fontSize: 14 }]}>Lorem ipsum dolor sit amet consectetur adipisc.</Text>
                    <VStack mt={'$8'}>
                        <Text fontFamily={fontFamily.Poppins} fontWeight={'$medium'} color='$labelColor' fontSize={'$md'} mb={'$2'}>Passions</Text>
                        <GlueStackButton
                            variant={'outline'}
                            isDisabled={false}
                            onPress={() =>setShowModalPassion(true) }
                            // justifyContent='flex-start'
                            style={{
                                borderColor: '#E9E9E9',
                            }}
                            rounded={100}
                            bg="$white"
                            w={'40%'}>
                            <ButtonIcon as={AddIcon} mr={'$2'} color='#A6A6A6' />
                            <VStack alignItems='flex-start'>
                                <ButtonText color={'#A6A6A6'} fontFamily={fontFamily.Poppins} fontWeight={'500'} fontSize={14}>
                                    Add Passions
                                </ButtonText>
                            </VStack>
                        </GlueStackButton>
                    </VStack>
                    <VStack mt={'$4'}>
                        <Text fontFamily={fontFamily.Poppins} fontWeight={'$medium'} color='$labelColor' fontSize={'$md'} mb={'$2'}>Sexual Orientation</Text>
                        <GlueStackButton
                            variant={'outline'}
                            isDisabled={false}
                            onPress={() => { setShowModalOrientation(true)}}
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
                                    Add Sexual orientation
                                </ButtonText>
                            </VStack>
                        </GlueStackButton>
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
            </React.Fragment>
        </VStack>

    )
}
export default OptionalFields