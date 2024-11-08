/**
 * @format
 */

import { AppRegistry, Platform } from 'react-native';
import { Text, Heading } from '@gluestack-ui/themed';
import App from './App';
import { name as appName } from './app.json';
import { registerGlobals } from '@livekit/react-native';
import { fontFamily } from './src/utils/constants/Constants';

function getFontsName(props) {
   if (props?.fontFamily === fontFamily.Poppins) {
    if (Platform.OS === 'android') {
      switch (props?.fontWeight) {
        case 'bold':
          return 'Poppins-Bold';
        case '$bold':
          return 'Poppins-Bold';
        case 'semibold':
          return 'Poppins-SemiBold';
        case '$semibold':
          return 'Poppins-SemiBold';
        case 'black':
          return 'Poppins-Black';
        case '$black':
          return 'Poppins-Black';
        case 'thin':
          return 'Poppins-Thin';
        case '$thin':
          return 'Poppins-Thin';
        case 'light':
          return 'Poppins-Light';
        case '$light':
          return 'Poppins-Light';
        case '$heading':
          return 'Poppins-Bold';
        case 'heading':
          return 'Poppins-Bold';
        case 'medium':
          return 'Poppins-Medium';
        case '$medium':
          return 'Poppins-Medium';
        case '$normal':
          return 'Poppins-Regular';
        case 'normal':
          return 'Poppins-Regular';
        default:
          return 'Poppins-Regular';
      }
    } else {
      switch (props?.fontWeight) {
        case 'bold':
          return 'Poppins-Bold';
        case '$bold':
          return 'Poppins-Bold';
        case 'semibold':
          return 'Poppins-SemiBold';
        case '$semibold':
          return 'Poppins-SemiBold';
        case 'black':
          return 'Poppins-Black';
        case '$black':
          return 'Poppins-Black';
        case 'thin':
          return 'Poppins-Thin';
        case '$thin':
          return 'Poppins-Thin';
        case 'light':
          return 'Poppins-Light';
        case '$light':
          return 'Poppins-Light';
        case '$heading':
          return 'Poppins-Bold';
        case 'heading':
          return 'Poppins-Bold';
        case 'medium':
          return 'Poppins-Medium';
        case '$medium':
          return 'Poppins-Medium';
        case '$normal':
          return 'Poppins';
        case 'normal':
          return 'Poppins';
        default:
          return 'Poppins';
      }
    }
  } else {
    return 'Poppins-Regular';
  }
}

function getFontWeight(props) {
  if (
    Platform.OS === 'android' &&
    (props.fontFamily === fontFamily.AvianoSans ||
      props.fontFamily === fontFamily.Poppins)
  ) {
    return '';
  } else {
    switch (props?.fontWeight) {
      case 'bold':
        return '700';
      case '$bold':
        return '700';
      case 'thin':
        return '200';
      case '$thin':
        return '200';
      case 'light':
        return '300';
      case '$light':
        return '300';
      case 'medium':
        return '500';
      case '$medium':
        return '500';
      case 'semibold':
        return '600';
      case '$semibold':
        return '600';
      case 'black':
        return '900';
      case '$black':
        return '900';
      default:
        return '400';
    }
  }
}

const TextRendrer = Text.render;
const HeadingRendrer = Heading.render;

Text.render = function render(props) {
  props = {
    ...props,
    style: [
      {
        fontFamily: getFontsName(props) || fontFamily.Poppins,
        fontWeight: getFontWeight(props),
      },
      props.style,
    ],
    allowFontScaling: false,
  };
  return TextRendrer.apply(this, [props]);
};

Heading.render = function render(props) {
  props = {
    ...props,
    style: [
      {
        fontFamily: getFontsName(props) || fontFamily.Poppins,
        fontWeight: getFontWeight(props),
      },
      props.style,
    ],
    allowFontScaling: false,
  };
  return HeadingRendrer.apply(this, [props]);
};

registerGlobals();

AppRegistry.registerComponent(appName, () => App);
