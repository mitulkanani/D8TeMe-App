import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
} from '@gluestack-ui/themed';
import React from 'react';
import { CAMERA, GALLERY } from '../../utils/constants/Constants';

export const ActionSheetComponentForImagePick = ({
  imageActionSheet,
  setImageActionSheet,
  handleAddMedia,
}) => {
  return (
    <Actionsheet
      isOpen={imageActionSheet}
      onClose={() => setImageActionSheet(!imageActionSheet)}
      zIndex={999}>
      <ActionsheetBackdrop />
      <ActionsheetContent h="$40" zIndex={999}>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>

        <ActionsheetItem
          onPress={() => {
            handleAddMedia(CAMERA);
            setImageActionSheet(false);
          }}>
          <ActionsheetItemText>Camera</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem
          onPress={() => {
            handleAddMedia(GALLERY);
            setImageActionSheet(false);
          }}>
          <ActionsheetItemText>Gallery</ActionsheetItemText>
        </ActionsheetItem>
      </ActionsheetContent>
    </Actionsheet>
  );
};
