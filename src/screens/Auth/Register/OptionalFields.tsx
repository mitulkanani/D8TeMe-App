import React, { useRef, useState } from 'react';
import { Divider, Heading, HStack, KeyboardAvoidingView, Pressable, ScrollView, Text, VStack } from "@gluestack-ui/themed"
import { fontFamily } from '../../../utils/constants/Constants';
import { styles } from './style';
import { TextInput } from '../../../components/TextInput';
import { Button } from '../../../components/Button';
const OptionalFields = ({ onSuccess, onBackClick }) => {
    return (
        <VStack>
            <React.Fragment>
                <VStack my='$8'>
                    <Text style={[styles.titleTextStyle, { fontWeight: '600' }]}>Gender</Text>
                    <Text style={[styles.secondaryTextStyle, { fontSize: 14 }]}>Lorem ipsum dolor sit amet consectetur adipisc.</Text>
                    
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