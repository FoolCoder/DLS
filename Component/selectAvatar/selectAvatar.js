import React, { useState } from 'react'
import { View, Text, Image, ImageBackground, SafeAreaView, TouchableOpacity, TextInput, FlatList, LayoutAnimation, Modal } from 'react-native'
import { height, width, totalSize } from 'react-native-dimension'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import * as ImagePicker from 'react-native-image-picker'

import { styles } from '../styles/styles'

import shapes from '../../assets/shapes.png'
import logo from '../../assets/logo.png'
import one from '../../assets/1.png'
import two from '../../assets/2.png'
import three from '../../assets/3.png'
import four from '../../assets/4.png'
import five from '../../assets/5.png'
import six from '../../assets/6.png'
import seven from '../../assets/7.png'
import eight from '../../assets/8.png'
import drag from '../../assets/Drag.png'


export default function Savatar({ navigation, route }) {
  const [nextB, setnextB] = useState(true)
  const [pic, setpic] = useState('')
  const [pics, setpics] = useState([one, two, three, four, five, six, seven, eight])
  const [visible, setvisible] = useState(false)
  const [number, setnumber] = useState(null)


  const _Flatlist = ({ item, index }) => {

    return (
      <TouchableOpacity
        onPress={() => { setpic(item), setnextB(false), setnumber(index + 1) }}
        style={
          item == pic
            ?
            {
              height: height(11), shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,

              elevation: 10, width: width(15),
              marginHorizontal: width(1), marginBottom: height(2),
              alignSelf: 'center', backgroundColor: '#5e81f4',
              justifyContent: 'center', alignItems: 'center',
              borderRadius: 5, borderWidth: 1, borderColor: '#cad1e8'
            }
            :
            {
              height: height(11), width: width(15),
              marginHorizontal: width(1), marginBottom: height(2),
              alignSelf: 'center', backgroundColor: '#fff',
              justifyContent: 'center', alignItems: 'center',
              borderRadius: 5, borderWidth: 1, borderColor: '#cad1e8'
            }}
      >

        <Image
          source={item}
          style={{ height: 100, width: 100, borderRadius: 50 }}
        />

      </TouchableOpacity>
    )
  }


  return (

    <View style={styles.mainView}>

      <ImageBackground
        source={shapes}
        style={styles.mainActivityView}>

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

        <View style={{ width: width(70), marginTop: height(10), alignSelf: 'center' }}>

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

            <Image
              source={logo}
              style={{ height: 50, width: 50 }}
            />

            <View style={{ marginLeft: width(2) }}>

              <Text style={{ fontSize: totalSize(1.5), fontWeight: 'bold' }}>

                Holo-school

             </Text>

              <Text style={{ fontSize: totalSize(0.8), marginTop: height(0.5), textAlign: 'right' }}>

                Better education

              </Text>

            </View>

          </View>

          <View style={{ height: height(15), width: width(17), marginTop: height(4), alignSelf: 'center' }}>

            <View
              style={
                pic !== ''
                  ?
                  {
                    height: height(11), width: width(15),
                    alignSelf: 'center', backgroundColor: '#fff',
                    justifyContent: 'center', alignItems: 'center'
                    , borderRadius: 5, borderWidth: 1, borderColor: '#5e81f4'
                  }
                  :
                  {
                    height: height(11), width: width(15),
                    alignSelf: 'center', backgroundColor: '#fff',
                    justifyContent: 'center', alignItems: 'center'
                    , borderRadius: 5, borderWidth: 1, borderColor: '#cad1e8'
                  }}
            >

              <Image
                source={pic.uri ? { uri: pic.uri } : pic}
                style={{ height: 100, width: 100, borderRadius: 50 }}
              />

            </View>

            <TouchableOpacity
              onPress={() => { setpic(''), setnextB(true), setnumber(null) }}
              style={{ alignSelf: 'center' }}
            >

              <Text style={{ fontSize: totalSize(1), marginTop: height(1), color: '#a0adcf' }}>
                Remove
              </Text>

            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setvisible(true)}
              style={{
                borderRadius: 20, marginTop: height(10), shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,

                elevation: 3, backgroundColor: '#fff', position: 'absolute', alignSelf: 'flex-end'
              }}
            >

              <MaterialCommunityIcons name='camera-outline' size={15} color='#aaa' style={{ padding: 5 }} />

            </TouchableOpacity>

          </View>

          <Text style={{ fontSize: totalSize(1.2), fontFamily: 'Poppins-Medium', marginTop: height(3), alignSelf: 'center', color: '#4a4a68' }}>
            Please select your avatar
          </Text>

          <FlatList
            data={pics}
            style={{ marginTop: height(1), alignSelf: 'center', }}
            numColumns={4}
            keyExtractor={(item, index) => { return index.toString() }}
            renderItem={_Flatlist}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('savatar', { data: route.params.data, pic: pic, number: number })}
            disabled={nextB}
            style={
              nextB == false
                ?
                {
                  height: height(4), shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.34,
                  shadowRadius: 6.27,

                  elevation: 10, width: width(55),
                  marginTop: height(3), alignSelf: 'center',
                  backgroundColor: '#5e81f4', borderRadius: 20,
                  justifyContent: 'center', alignItems: 'center'
                }
                :
                {
                  height: height(4), width: width(55),
                  marginTop: height(3), alignSelf: 'center',
                  backgroundColor: '#a0adcf', borderRadius: 20,
                  justifyContent: 'center', alignItems: 'center'
                }}
          >

            <Text style={{ fontSize: totalSize(1.3), color: '#fff' }}>
              Next
            </Text>

          </TouchableOpacity>

        </View>

        <Modal
          animationType='fade'
          transparent={true}
          visible={visible}
        >
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }}>

            <View style={{ height: height(22), width: width(30), justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: 20 }}>

              <Image
                source={drag}
                style={{ height: height(10), resizeMode: 'contain', width: width(26) }}
              />

              <TouchableOpacity
                onPress={() =>
                  ImagePicker.launchImageLibrary(
                    {
                      mediaType: 'photo',
                      includeBase64: false,
                      maxHeight: 200,
                      maxWidth: 200
                    },
                    (response) => {
                      setvisible(false)
                      setpic(response)
                      setnumber(null)
                      setnextB(false)
                    },
                  )
                }
                style={{ height: height(4), width: width(16), marginTop: height(1.5), justifyContent: 'center', alignItems: 'center', backgroundColor: '#5e81f4', borderRadius: 20 }}
              >

                <Text style={{ fontSize: totalSize(1), fontFamily: 'Poppins-Bold', color: '#fff' }}>
                  Upload
                </Text>

              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setvisible(false)}
                style={{ height: height(4), width: width(16), justifyContent: 'center', alignItems: 'center' }}
              >

                <Text style={{ fontSize: totalSize(1), fontFamily: 'Poppins-Bold', color: '#a0adcf' }}>
                  Cancel
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        </Modal>

      </ImageBackground>

    </View>

  )
}