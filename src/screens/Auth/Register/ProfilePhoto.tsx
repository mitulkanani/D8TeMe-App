import React, { useRef, useState } from 'react';
import { AddIcon, Divider, FlatList, Heading, HStack, KeyboardAvoidingView, Pressable, ScrollView, Text, VStack } from "@gluestack-ui/themed"
import { fontFamily } from '../../../utils/constants/Constants';
import { styles } from './style';
import { TextInput } from '../../../components/TextInput';
import { Button } from '../../../components/Button';
const ProfilePhoto = ({ onSuccess, onBackClick }) => {
    const [image, setImage] = useState([{},{},{},{},{},{}]);
    return (
        <VStack>
            <React.Fragment>
                <VStack my='$8'>
                    <Text style={[styles.titleTextStyle, { fontWeight: '600' }]}>Profile Photo</Text>
                    <Text style={[styles.secondaryTextStyle, { fontSize: 14 }]}>Lorem ipsum dolor sit amet consectetur adipisc.</Text>
                    <VStack my='$6'>
                    <FlatList 
                    data={image}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    renderItem={({item, index}) => (
                        <Pressable key={index} onPress={() => console.log('Image clicked')} 
                        style={
                            {
                                borderWidth:1,
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
                                height:200,
                                width:'45%',
                                justifyContent:'center',
                                alignItems: 'center',
                            }
                        }>
                            <VStack  style={{ borderRadius:100, borderWidth:1 ,borderStyle:'dashed',width:50,height:50,
                                borderColor:'#FF0080',alignItems: 'center',justifyContent:'center'
                            }}>
                                <AddIcon color='#FF0080' size='xl'/>
                            </VStack>
                        </Pressable>)}
                    />
                    </VStack>
                    <Text style={[styles.secondaryTextStyle, { fontSize: 14 , textAlign:'center'}]}>Add at least 2 photos to Continue</Text>

                    <HStack alignSelf='center' justifyContent='space-between'  gap={'$8'}>
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