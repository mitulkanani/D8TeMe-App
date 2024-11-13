import { StyleSheet } from "react-native";
import { fontFamily } from "../../../utils/constants/Constants";

export const styles = StyleSheet.create({
  titleTextStyle: {
    fontFamily: fontFamily.Poppins,
    fontWeight: 'semibold',
    fontSize: 18,
    color: '#000'
  },
  secondaryTextStyle: {
    fontFamily: fontFamily.Poppins,
    fontWeight: 'normal',
    fontSize: 12,
    color: '#7F7F7F',
    marginLeft: 2
  },
})