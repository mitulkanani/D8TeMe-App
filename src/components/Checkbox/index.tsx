/**
 * @format
 */

import React, { ComponentProps } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import {
  CheckIcon,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  Checkbox as NativeCheckBox,
} from '@gluestack-ui/themed';

interface CheckboxProps extends ComponentProps<typeof NativeCheckBox> {
  label?: string | ReactNode;
  error?: string;
  helperText?: string;
  labelColor?: string;
  checkboxContainerStyle?: StyleProp<ViewStyle>;
  fontFamily?: string;
  isChecked: boolean;
  fontSize?:
    | number
    | '$xs'
    | '$sm'
    | '$md'
    | '$lg'
    | '$xl'
    | '$2xl'
    | '$3xl'
    | '$2xs'
    | '$4xl'
    | '$5xl'
    | '$6xl'
    | '$7xl'
    | '$8xl'
    | '$9xl';
}

function Checkbox(props: CheckboxProps) {
  const {
    label,
    checkboxContainerStyle,
    labelColor = '$black',
    fontFamily,
    fontSize,
    isChecked,
    width,
    ...rest
  } = props;
  return (
    <NativeCheckBox
      size="sm"
      maxWidth={width ? width : '95%'}
      isInvalid={false}
      isDisabled={false}
      isChecked={isChecked}
      {...rest}>
      <CheckboxIndicator
        mr="$2"
        bgColor={isChecked ? '$fontSecondaryColor' : '$white'}
        borderColor={isChecked ? '$fontSecondaryColor' : '$appFontPrimary'}
        $dark-borderColor={isChecked ? '$fontSecondaryColor' : '$white'}
        style={checkboxContainerStyle}>
        <CheckboxIcon as={CheckIcon} color={'$white'} size={'sm'} />
      </CheckboxIndicator>
      <CheckboxLabel
        color={labelColor}
        $dark-color={'$appFontPrimary'}
        width={'85%'}
        fontSize={fontSize}
        fontFamily={fontFamily || '$body'}
        pt={'$0.5'}>
        {label}
      </CheckboxLabel>
    </NativeCheckBox>
  );
}

export { Checkbox };
