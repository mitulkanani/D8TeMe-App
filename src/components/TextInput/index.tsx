import React, { ComponentProps } from 'react';
import {
  AlertCircleIcon,
  Box,
  EyeIcon,
  EyeOffIcon,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  Input,
  InputField,
  Pressable,
  Text,
  Icon,
} from '@gluestack-ui/themed';
import {
  DimensionValue,
  NativeSyntheticEvent,
  Platform,
  TextInputFocusEventData,
} from 'react-native';
import { FormikErrors } from 'formik';
import { fontFamily } from '../../utils/constants/Constants';

interface InputProps extends ComponentProps<typeof InputField> {
  multiline?: any;
  label?: string;
  error?: string | FormikErrors<any> | string[] | FormikErrors<any>[];
  helperText?: string;
  leftItem?: JSX.Element;
  rightItem?: JSX.Element;
  width?: DimensionValue;
  height?: DimensionValue;
  type?: string;
  onFocus?: any;
  onBlur?: any;
  maxLength?: any;
  borderColor?: string;
}

function TextInput(props: InputProps) {
  const {
    label,
    error,
    helperText,
    onFocus,
    onBlur,
    leftItem,
    rightItem,
    width,
    height,
    type,
    maxLength,
    fontWeight,
    borderColor,
    ...rest
  } = props;

  // Focus handling
  const [_focused, setFocused] = React.useState(false);
  const [showPass, setShowPass] = React.useState(false);

  const handleFocus = React.useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onFocus?.(event);
      setFocused(true);
    },
    [onFocus],
  );
  const handleBlur = React.useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onBlur?.(event);
      setFocused(false);
    },
    [onBlur],
  );

  return (
    <FormControl isInvalid={!!error} width={width}>
      <Input
        height={height ? height : props.multiline ? 100 : 52}
        alignItems="center"
        borderColor={borderColor?borderColor:"#D6DCEC"}
        $dark-borderColor="$appDarkBorder"
        justifyContent="space-between"
        bgColor="white"
        $dark-bgColor="$appDarkBg">
        {leftItem}
        <InputField
          type={type === 'password' ? (showPass ? 'text' : 'password') : 'text'}
          verticalAlign={props.multiline ? 'top' : 'middle'}
          fontSize="$sm"
          // lineHeight="$sm"
          pt={props.multiline && Platform.OS === 'ios' && 15}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
          width="100%"
          height={'100%'}
          paddingRight={10}
          fontWeight={fontWeight || 'normal'}
          clearButtonMode="while-editing"
          fontFamily={fontFamily.Poppins}
          maxLength={maxLength}
        />

        {type === 'password' ? (
          <Pressable onPress={() => setShowPass(!showPass)}>
            <Icon as={showPass ? EyeOffIcon : EyeIcon} m="$2" w="$6" h="$6"  color='black'/>
          </Pressable>
        ) : (
          rightItem
        )}
      </Input>
      {helperText && (
        <FormControlHelper>
          <FormControlHelperText>{helperText}</FormControlHelperText>
        </FormControlHelper>
      )}
      {error && (
        <FormControlError mt={'$2'} mr={'$2'}>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>{error}</FormControlErrorText>
        </FormControlError>
      )}

      {label && (
        <Box
          bottom={0}
          left={0}
          pointerEvents="none"
          position="absolute"
          right={0}
          top={0}>
          <Box
            backgroundColor="$white"
            $dark-bg={'$backgroundSecondaryDark'}
            px="$1"
            position="absolute"
            top={-10}
            height="$5"
            left="$2">
            <Text fontSize="$sm" px={2} color="$black" $dark-color={'$white'}>
              {label}
            </Text>
          </Box>
        </Box>
      )}
    </FormControl>
  );
}

export { TextInput };
