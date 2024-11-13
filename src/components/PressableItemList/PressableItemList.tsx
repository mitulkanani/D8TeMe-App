import { FlatList, Pressable, Text, VStack } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { fontFamily } from '../../utils/constants/Constants';

interface ItemListProps {
    data?: any[],
    onclickItem?: any,
    selectSingleItem?: boolean
}
export const PressableItemList = (props: ItemListProps) => {
    const {
        data,
        selectSingleItem = false,
        onclickItem
    } = props;
    const [selectedItem, setSelectedItem] = useState(selectSingleItem ? "" : [])
    const handleSelectItem = (item) => {

        if (selectSingleItem) {
            // If single item selection is enabled, set the selected item
            setSelectedItem(item);
            onclickItem(item)
        } else {
            // If multiple item selection is enabled, toggle the item in the selectedItems array
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
    }
    const renderListItem = ({ item, index }) => {
        const isSelected = selectSingleItem ? selectedItem == item : selectedItem?.includes(item);

        return (
            <Pressable onPress={() => handleSelectItem(item)}>
                <VStack bg={isSelected ? "#FF008024" : "$white"} style={[styles.containerStyle, { borderColor: isSelected ? "#FF008024" : '#CDCDCD', }]}>
                    <Text color={isSelected ? '$fontSecondaryColor' : '$lableLightcolor'} fontFamily={fontFamily.Poppins} fontSize={'$md'} fontWeight={'$normal'}>{item}</Text>
                </VStack>
            </Pressable>
        )
    }
    return (
        <VStack>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={renderListItem}
                keyExtractor={(index) => index?.toString()}
                numColumns={5} />
        </VStack>
    )
}
export const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderRadius: 47,
        paddingHorizontal: 20,
        paddingVertical: 4,
        marginRight: 6

    },
})