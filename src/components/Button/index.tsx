/**
 * @format
 */
import React, { ComponentProps } from 'react';
import { ButtonText, Button as GlueStackButton } from '@gluestack-ui/themed';
import { GestureResponderEvent } from 'react-native';
import { fontFamily as ExternalFontFamily } from '../../utils/constants/Constants';

interface ButtonProps extends ComponentProps<typeof GlueStackButton> {
  label?: string | JSX.Element;
  color?: string;
  fontFamily?: string;
  onPress?: (event?: GestureResponderEvent) => void;
  fontWeight?: string;
  disabled?: boolean;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
  textAlign?: string;
  fontSize?: string | number;
}

function Button(props: ButtonProps) {
  const {
    label,
    color,
    fontFamily,
    fontWeight,
    disabled,
    backgroundColor,
    borderWidth,
    borderColor,
    textAlign,
    fontSize,
  } = props;
  return (
    <GlueStackButton
      height={50}
      {...props}
      onPress={props.onPress}
      backgroundColor={disabled ? '#FBFBFF' : backgroundColor}
      borderWidth={borderWidth !== undefined ? borderWidth : 1}
      borderColor={borderColor ? borderColor : '#D6DCEC'}
      $dark-borderColor={
        props['$dark-borderColor']
          ? props['$dark-borderColor']
          : '$backgroundSecondaryDark'
      }>
      <ButtonText
        fontSize={fontSize || '$md'}
        fontWeight={fontWeight}
        p={0}
        // $dark-color="$white"
        $dark-color={
          disabled
            ? '$black'
            : props['$dark-color']
            ? props['$dark-color']
            : '$white'
        }
        color={disabled ? '#D6DCEC' : color}
        fontFamily={fontFamily || ExternalFontFamily.Poppins}
        textAlign={textAlign ? textAlign : 'left'}>
        {label}
      </ButtonText>
    </GlueStackButton>
  );
}

export { Button };
