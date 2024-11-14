import { FlatList, Pressable, SafeAreaView, Text, VStack } from '@gluestack-ui/themed';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { fontFamily } from '../../../utils/constants/Constants';
import { Button } from '../../Button';
interface ItemListProps {
    data?: any[],
    onclickItem?: any,
    selectSingleItem?: boolean,
    isModalVisible: boolean,
    toggleModal: any,
    selectedItems?: any[],
    title:string,
    subtitle:string,
}
export const OptionalFieldModal = (props: ItemListProps) => {
    const {
        data,
        selectSingleItem = false,
        onclickItem,
        isModalVisible,
        toggleModal,
        selectedItems,
        title,
        subtitle,

    } = props;
    const [selectedItem, setSelectedItem] = useState(selectSingleItem ? "" : [])

    const handleSelectItem = (item: any) => {

        if (selectSingleItem) {
            // If single item selection is enabled, set the selected item
            setSelectedItem(item);
            onclickItem(item)
        } else {
            // If multiple item selection is enabled, toggle the item in the selectedItems array
            if (selectedItem?.length) {
                setSelectedItem(prevSelected => {
                    if (prevSelected?.includes(item)) {
                        let filteredData = prevSelected?.filter(selectedItem => selectedItem !== item);
                        onclickItem(filteredData)
                        return filteredData; // Deselect item
                    } else {
                        let filteredData = [...prevSelected, item];
                        onclickItem(filteredData)
                        return filteredData;// Select item
                    }

                });
            }
            else {
                setSelectedItem([item])
                onclickItem([item])
            }
        }
    }
    const renderListItem = ({ item, index }) => {
        const isSelected = selectSingleItem ? selectedItem == item : selectedItem?.includes(item);

        return (
            <Pressable onPress={() => handleSelectItem(item)} >
                <VStack bg={isSelected ? "#FF008024" : "$white"} style={[styles.containerStyle, { borderColor: isSelected ? "#FF008024" : '#CDCDCD', }]}>
                    <Text color={isSelected ? '$fontSecondaryColor' : '$lableLightcolor'} fontFamily={fontFamily.Poppins} fontSize={'$md'} fontWeight={'$normal'}>{item}</Text>
                </VStack>
            </Pressable>
        )
    }
    useEffect(() => {
        if (isModalVisible) {
            setSelectedItem(selectedItems)
        }
    }, [isModalVisible])
    return (
        <SafeAreaView>
            <VStack>
                <Modal
                    isVisible={isModalVisible}
                    onSwipeComplete={toggleModal}
                    onBackdropPress={toggleModal}
                    onModalHide={toggleModal}
                    onBackButtonPress={toggleModal}
                    style={styles.modal}
                    useNativeDriverForBackdrop={true}
                    propagateSwipe={true}
                    animationOutTiming={500}
                    animationInTiming={500}
                    animationIn="slideInUp"
                    animationOut="slideOutDown"

                >
                    <VStack bg='$white' style={{
                        width: '95%',
                        height: '70%',
                        maxHeight: '90%',
                        minHeight: '50%',
                        alignSelf: 'center',
                        padding: 16,
                        borderRadius: 16,
                        justifyContent: 'center',
                    }}>
                        <VStack mt='$4' mb='$6'>
                            <Text style={[styles.titleTextStyle, { fontWeight: '600' }]}>{title}</Text>
                            <Text style={[styles.secondaryTextStyle, { fontSize: 14 }]}>{subtitle}</Text>

                        </VStack>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={data}
                            renderItem={renderListItem}
                            keyExtractor={(index) => index?.toString()}
                            numColumns={4}
                            columnWrapperStyle={styles.columnWrapper} />

                        <Button
                            label={'Continue'}
                            w={'100%'}
                            backgroundColor="$fontSecondaryColor"
                            borderColor="$fontSecondaryColor"
                            color="white"
                            fontWeight="medium"
                            fontSize="$md"
                            mt={'$6'}
                            borderRadius={6}
                            onPress={toggleModal}
                        />
                    </VStack>

                </Modal>
            </VStack>
        </SafeAreaView>
    )
}
export const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderRadius: 47,
        paddingHorizontal: 20,
        paddingVertical: 4,
        marginRight: 6,
        marginBottom: 8
    },
    modal: {
        justifyContent: 'center',
        margin: 0,
    },
    titleTextStyle: {
        fontFamily: fontFamily.Poppins,
        fontWeight: 'semibold',
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
    },
    secondaryTextStyle: {
        fontFamily: fontFamily.Poppins,
        fontWeight: 'normal',
        fontSize: 12,
        color: '#7F7F7F',
        marginLeft: 2,
        textAlign: 'center',
    },
    modalContainer: {
        width: '95%',
        height: '70%',
        maxHeight: '90%',
        minHeight: '50%',
        alignSelf: 'center',
        padding: 16,
        borderRadius: 16,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
})