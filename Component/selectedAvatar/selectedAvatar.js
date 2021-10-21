import React, { useEffect, useState } from 'react'
import { View, Text, Image, ImageBackground, SafeAreaView, TouchableOpacity, TextInput, FlatList, LayoutAnimation, Modal } from 'react-native'
import { height, width, totalSize } from 'react-native-dimension'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


import { styles } from '../styles/styles'

import { apiCall } from '../Api/Api'
import { register } from '../Links/Links'

import shapes from '../../assets/shapes.png'
import logo from '../../assets/logo.png'
import frame from '../../assets/frame.png'



export default function Sedavatar({ navigation, route }) {
  const [name, setname] = useState('John')
  const [loaderM, setloaderM] = useState(false)

  useEffect(() => {
    setname(route.params.data.name)
    console.log(route.params.data)
    console.log(route.params.number)
    console.log(route.params.pic)
  }, [])

  const Signup = () => {
    setloaderM(true)
    var data = new FormData();
    if (route.params.number != null) {
      data.append('name', route.params.data.name)
      data.append('email', route.params.data.email)
      data.append('password', route.params.data.password)
      data.append('avatarNumber', route.params.number)
      data.append('file', route.params.pic)
    }
    else {
      data.append("name", route.params.data.name)
      data.append("email", route.params.data.email)
      data.append("password", route.params.data.password)
      data.append("file", {
        name: route.params.pic.fileName,
        type: route.params.pic.type,
        uri: route.params.pic.uri
      })
    }

    apiCall('post', register,
      data
    ).then((response) => {
      console.log(response)
      setloaderM(false)

    }).catch((e) => {
      console.log(e)
      setloaderM(false)
    })

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

        <View style={{ width: width(70), marginTop: height(10), alignSelf: 'center', alignItems: 'center' }}>

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

          <Text style={{ fontSize: totalSize(1.8), marginTop: height(3), fontFamily: 'Poppins-SemiBold' }}>
            Hello {name}
          </Text>

          <Text style={{ fontSize: totalSize(1), color: '#aaa' }}>
            Welcome to happy and easy learning
          </Text>

          <ImageBackground
            source={frame}
            style={{ height: height(50), width: width(60), marginLeft: width(2) }}
            imageStyle={{ resizeMode: 'center' }}
          >

            <View
              style={
                {
                  height: height(11), width: width(15),
                  marginTop: height(17.5), marginRight: width(2),
                  alignSelf: 'center', justifyContent: 'center',
                  alignItems: 'center', borderRadius: 5,
                  borderWidth: 1, borderColor: '#5e81f4'
                }}
            >

              <Image
                source={route.params.pic.uri ? { uri: route.params.pic.uri } : route.params.pic}
                style={{ height: 100, width: 100, borderRadius: 50 }}
              />

            </View>

          </ImageBackground>

          <TouchableOpacity
            onPress={() => Signup()}
            style={
              {
                height: height(4), shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 10, width: width(55), alignSelf: 'center',
                backgroundColor: '#5e81f4', borderRadius: 20,
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
          visible={loaderM}
        >
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'center', alignItems: 'center' }}>

            <Loader
              color='#5e81f4'
            />

          </View>

        </Modal>

      </ImageBackground>

    </View>

  )
}