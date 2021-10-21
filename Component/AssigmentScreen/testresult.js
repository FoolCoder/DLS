import React, { Fragment, useRef } from 'react'
import {
  Text, View, Animated, ImageBackground, Image, TouchableOpacity,
  Button, StyleSheet
} from 'react-native'
import { height, width, totalSize } from 'react-native-dimension'
import xw from './ASSIGNMENT/XW.png'
import Ellipse from './ASSIGNMENT/Ellipse.png'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Testresult({ navigation }) {


  return (
    <Fragment>

      <ImageBackground style={{
        flex: 1,


        backgroundColor: '#E5E5E5'

      }}
        source={xw}
      >
        <View style={{ marginTop: height(3), width: width(95), alignSelf: 'center' }}>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ width: width(10), flexDirection: 'row', alignItems: 'center' }}
          >

            <MaterialIcons
              name='arrow-back-ios'
              size={20}
              color='#5e81f4'
            />

            <Text style={{ fontSize: totalSize(1.1), marginLeft: width(1), color: '#5e81f4', fontWeight: 'bold' }}>

              Back

                 </Text>

          </TouchableOpacity>

        </View>
        {/* <View> */}
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',

          height: height(90)
        }}>
          <Text style={{
            fontSize: totalSize(2),
          }}>

            Biology
            </Text>

          <Image style={{
            width: 80,
            height: 80,
            marginTop: height(5),
            marginBottom: height(1)
          }}
            source={Ellipse} />
          <Text style={styles.txt}>
            Mr, Browm
            </Text>
          <View style={[styles.innerc, { marginVertical: height(3) }]}>
            <Text style={styles.txt}>
              Your test grade
                </Text>
            <Text style={[styles.txt, { fontWeight: 'bold' }]}>
              84
                </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('assigmentscreen')}
            style={styles.button}>
            <Text style={{
              color: '#FFFFFF',
              fontSize: totalSize(1)
            }}>
              Go to home
</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </Fragment>

  )
}
const styles = StyleSheet.create({
  txt: {
    fontSize: totalSize(1.3),
    color: '#4A4A68'
  },
  innerc: {
    width: width(35),
    height: height(15),
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    height: height(3),
    width: width(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#5E81F4',
    marginTop: height(3)
  }
})