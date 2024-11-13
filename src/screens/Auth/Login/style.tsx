import { StyleSheet } from "react-native";
import { fontFamily } from "../../../utils/constants/Constants";

export const styles = StyleSheet.create({
  signInTextStyle: {
    fontFamily: fontFamily.Poppins,
    fontWeight: 'semibold',
    fontSize: 20,
    color: '#000'
  },
  secondaryTextStyle: {
    fontFamily: fontFamily.Poppins,
    fontWeight: 'medium',
    fontSize: 14,
    color: '#1E22FB'
  },
  termsConditionTextStyle: {
    fontFamily: fontFamily.Poppins,
    fontWeight: 'normal',
    fontSize: 12,
    color: '#374151',
    marginTop: 8,
    marginLeft: 2
  },
  borderStyleBase: {
    width: 50,
    height: 50
  },

  borderStyleHighLighted: {
    width: 50,
    height: 50,
    borderWidth: 1, borderColor: '#9CA3AF',
    borderRadius: 6,
    backgroundColor: '##E0E3E5',
  },

  underlineStyleBase: {
    width: 50,
    height: 50,
    borderWidth: 1, borderColor: '#9CA3AF',
    borderRadius: 6,
    color: 'black'
  },

  underlineStyleHighLighted: {
    width: 50,
    height: 50,
    borderWidth: 1, borderColor: '#9CA3AF',
    borderRadius: 6,
    backgroundColor: '##E0E3E5'

  },
  buttonStyle: {
    borderRadius: 12,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#F5F5F5',
    elevation: 2,
  }
})