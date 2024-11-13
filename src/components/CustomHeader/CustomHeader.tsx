import React, { Component } from "react";
import { View, StatusBar, Platform } from "react-native";

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
const HEADER_HEIGHT = Platform.OS === "ios" ? 44 : 56;

export  const  CustomHeader=()=>{
    return(
        <View style={{ flex: 1 }}>
        <View style={{ height: STATUS_BAR_HEIGHT, backgroundColor: "#5E8D48" }}>
          <StatusBar
            translucent
            backgroundColor="#5E8D48"
            barStyle="light-content"
          />
        </View>
        <View style={{ backgroundColor: "#79B45D", height: HEADER_HEIGHT }} />
        <View style={{ flex: 1, backgroundColor: "#33373B" }}>
          {/* Display your content */}
        </View>
      </View>
    )
}