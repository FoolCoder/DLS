import React, { useState } from 'react'
import { View, Text, Image, ImageBackground, SafeAreaView, TouchableOpacity, TextInput, FlatList, LayoutAnimation } from 'react-native'
import { height, width, totalSize } from 'react-native-dimension'

import splash from '../../assets/Splash.png';

export default function Splash() {

  return (
    <ImageBackground
      source={splash}
      style={{ flex: 1 }}
    >

    </ImageBackground>
  )
}