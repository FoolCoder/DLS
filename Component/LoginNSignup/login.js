import React, { useState, useEffect } from 'react'
import { View, Text, Image, ImageBackground, SafeAreaView, TouchableOpacity, TextInput, FlatList, LayoutAnimation, Alert } from 'react-native'
import { height, width, totalSize } from 'react-native-dimension'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { styles } from '../styles/styles'

import { apiCall } from '../Api/Api'
import { signin } from '../Links/Links'

import shapes from '../../assets/shapes.png'
import logo from '../../assets/logo.png'

let em = ''
let pass = ''

export default function Login({ navigation, route }) {
  const [loginT, setloginT] = useState(true)
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [incorrectLine, setincorrectLine] = useState(false)

  // useEffect(() => {
  //   alert(route.params.data)
  // }, [])


  const loginCheck = (type, value) => {
    if (type == 'email') {
      setemail(value)
      em = value
    }
    else {
      setpassword(value)
      pass = value
    }

    if (em.length > 0 && pass.length > 0) {
      setloginT(false)
    }
    else {
      setloginT(true)
    }

  }

  const signinFunc = () => {

    navigation.navigate('home')

    // apiCall('post', signin, {
    //   email: email, password: password
    // }).then((response) => {
    //   console.log(response)
    // }).catch((e) => {
    //   console.log(e)
    // })
  }

  const incorrect = () => {

    return (

      <View style={{ marginTop: height(1), borderRadius: 10, backgroundColor: '#ffe7e6' }}>

        <View style={{ height: height(3), width: width(60), alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}>

          <MaterialCommunityIcons
            name='alert-circle'
            size={20}
            style={{ marginTop: height(0.2) }}
          />

          <Text style={{ fontSize: totalSize(1), marginLeft: width(1) }}>

            Your e-mail or password is incorrect

          </Text>

        </View>

      </View>
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

        <View style={{ width: width(65), marginTop: height(20), alignSelf: 'center' }}>

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

          <Text style={{ fontSize: totalSize(1), marginTop: height(6), alignSelf: 'center' }}>

            Login as a student

        </Text>

          <Text style={{ fontSize: totalSize(1), marginTop: height(2) }}>

            E-mail

        </Text>

          <TextInput
            placeholder='Email'
            onChangeText={(text) => loginCheck('email', text)}
            style={{ height: height(4), marginTop: height(1), fontSize: totalSize(1), paddingHorizontal: width(2), backgroundColor: '#fff', borderRadius: 10, borderWidth: 1, borderColor: '#ddd' }}
          />

          {incorrectLine == true ?
            incorrect()
            : null}

          <Text style={{ fontSize: totalSize(1), marginTop: height(2) }}>

            Password

           </Text>

          <TextInput
            placeholder='Input'
            secureTextEntry
            onChangeText={(text) => loginCheck('password', text)}
            style={{ height: height(4), marginTop: height(1), fontSize: totalSize(1), paddingHorizontal: width(2), backgroundColor: '#fff', borderRadius: 10, borderWidth: 1, borderColor: '#ddd' }}
          />

          <TouchableOpacity
            style={{ marginTop: height(1), alignSelf: 'flex-end' }}
          >

            <Text style={{ fontSize: totalSize(1), color: '#5e81f4' }}>

              forget my password

            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => signinFunc()}
            disabled={loginT}
            style={
              loginT == false
                ?
                {
                  height: height(4), shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.34,
                  shadowRadius: 6.27,

                  elevation: 10, marginTop: height(6), backgroundColor: '#5e81f4', borderRadius: 20, justifyContent: 'center', alignItems: 'center'
                }
                :
                { height: height(4), marginTop: height(6), backgroundColor: '#a0adcf', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
          >

            <Text style={{ fontSize: totalSize(1.3), color: '#fff' }}>
              Login
            </Text>

          </TouchableOpacity>

          <View style={{ marginTop: height(2), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

            <Text style={{ fontSize: totalSize(1) }}>

              Don't you have an account?

          </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('signup')}
              style={{ marginLeft: width(1) }}>

              <Text style={{ fontSize: totalSize(1), color: '#5e81f4' }}>

                Sign up

              </Text>

            </TouchableOpacity>

          </View>

        </View>

      </ImageBackground>

    </View>

  )
}