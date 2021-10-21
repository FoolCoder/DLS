import React, { useState } from 'react'
import { View, Text, Image, ImageBackground, SafeAreaView, TouchableOpacity, TextInput, Modal, KeyboardAvoidingView, FlatList, LayoutAnimation, Alert, StyleSheet } from 'react-native'
import { height, width, totalSize } from 'react-native-dimension'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { styles } from '../styles/styles'

import Loader from '../Loader/Loader'

import { apiCall } from '../Api/Api'
import { sendVerficationCode } from '../Links/Links'

import shapes from '../../assets/shapes.png'
import logo from '../../assets/logo.png'

let na = ''
let em = ''
let reqCo = ''
let pass = ''
let cpass = ''

const CELL_COUNT = 4;

export default function Signup({ navigation }) {

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [reqCode, setreqCode] = useState('')
  const [password, setpassword] = useState('')
  const [cpassword, setcpassword] = useState('')

  const [emailV, setemailV] = useState(false)
  const [codeV, setcodeV] = useState(false)
  const [passV, setpassV] = useState(false)
  const [cpassV, setcpassV] = useState(false)

  const [loaderM, setloaderM] = useState(false)
  const [visible, setvisible] = useState(false)
  const [verification, setverification] = useState(false)

  const [vCode, setvCode] = useState(null)

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });


  const stateSet = (type, value) => {

    if (type == 'name') {
      setname(value)
    }
    else if (type == 'email') {
      setemail(value)
    }
    else if (type == 'reqC') {
      setreqCode(value)
    }
    else if (type == 'pass') {
      setpassword(value)
    }
    else {
      setcpassword(value)
    }

  }

  const validation = (val) => {

    return (

      <View style={{ marginTop: height(1), borderRadius: 10, backgroundColor: '#ffe7e6' }}>

        <View style={{ height: height(3), width: width(60), alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}>

          <MaterialCommunityIcons
            name='alert-circle'
            size={20}
            style={{ marginTop: height(0.2) }}
          />

          <Text style={{ fontSize: totalSize(1), marginLeft: width(1) }}>

            {val}

          </Text>

        </View>

      </View>
    )

  }

  const signupFunc = () => {
    setemailV(false), setcodeV(false), setpassV(false), setcpassV(false)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (name !== '' && email !== '' && reqCode !== '' && password !== '' && cpassword !== '') {
      if (re.test(email) === true) {

        if (reqCode == '123') {

          if (password.length >= 8) {

            if (password == cpassword) {

              setloaderM(true)

              apiCall('post', sendVerficationCode, {
                name: name,
                email: email,
                password: password
              }).then((response) => {
                console.log(response)
                if (response.status == 'success') {
                  setloaderM(false)
                  setvisible(true)
                  setvCode(response.result.token)
                }
                else {
                  console.log(response)
                  Alert.alert('Sign up', 'Something went wrong')
                }
              }).catch((e) => {
                setloaderM(false)
                console.log(e)
              })

            }
            else {
              setcpassV(true)
            }

          }
          else {
            setpassV(true)
          }

        }
        else {
          setcodeV(true)
        }

      }
      else {
        setemailV(true)
      }

    }
    else {
      Alert.alert(
        'Sign up',
        'Please fill all fields'
      )
    }
  }

  const verifyFunc = () => {

    if (value.length == 4) {
      if (value == vCode) {
        Alert.alert(
          'Sign up',
          'Account has been verified',
          [
            {
              text: 'Ok', onPress: () => {
                setValue('')
                setverification(false)
                navigation.navigate('avatar', {
                  data: { name: name, email: email, password: password }
                })
              }
            }
          ]
        )
      }
      else {
        Alert.alert(
          'Sign up',
          'Wrong verification code'
        )
      }
    }
    else {
      Alert.alert(
        'Sign up',
        'Invalid verification code'
      )
    }

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

        <KeyboardAvoidingView
          behavior='position'
        >

          <View style={{ width: width(65), marginTop: height(14), alignSelf: 'center' }}>

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

              Name

        </Text>

            <TextInput
              placeholder='Please enter your name'
              onChangeText={(text) => stateSet('name', text)}
              style={{ height: height(4), marginTop: height(1), fontSize: totalSize(1), paddingHorizontal: width(2), backgroundColor: '#fff', borderRadius: 10, borderWidth: 1, borderColor: '#ddd' }}
            />

            <Text style={{ fontSize: totalSize(1), marginTop: height(2) }}>

              E-mail

           </Text>

            <TextInput
              placeholder='Email'
              onChangeText={(text) => stateSet('email', text)}
              style={{ height: height(4), marginTop: height(1), fontSize: totalSize(1), paddingHorizontal: width(2), backgroundColor: '#fff', borderRadius: 10, borderWidth: 1, borderColor: '#ddd' }}
            />

            {emailV == true ?
              validation('Please enter a valid email')
              : null}

            <Text style={{ fontSize: totalSize(1), marginTop: height(2) }}>

              Request code

          </Text>

            <TextInput
              placeholder='Numbers'
              onChangeText={(text) => stateSet('reqC', text)}
              style={{ height: height(4), marginTop: height(1), fontSize: totalSize(1), paddingHorizontal: width(2), backgroundColor: '#fff', borderRadius: 10, borderWidth: 1, borderColor: '#ddd' }}
            />

            {codeV == true ?
              validation('Please enter a valid request code')
              : null}

            <Text style={{ fontSize: totalSize(1), marginTop: height(2) }}>

              Password

           </Text>

            <TextInput
              placeholder='input'
              secureTextEntry
              onChangeText={(text) => stateSet('pass', text)}
              style={{ height: height(4), marginTop: height(1), fontSize: totalSize(1), paddingHorizontal: width(2), backgroundColor: '#fff', borderRadius: 10, borderWidth: 1, borderColor: '#ddd' }}
            />

            {passV == true ?
              validation('please enter a password with at least 8 characters')
              : null}

            <Text style={{ fontSize: totalSize(1), marginTop: height(2) }}>

              Confirm password

           </Text>

            <TextInput
              placeholder='Input'
              secureTextEntry
              onChangeText={(text) => stateSet('cpass', text)}
              style={{ height: height(4), marginTop: height(1), fontSize: totalSize(1), paddingHorizontal: width(2), backgroundColor: '#fff', borderRadius: 10, borderWidth: 1, borderColor: '#ddd' }}
            />

            {cpassV == true ?
              validation('Confirm password not matched')
              : null}

            <TouchableOpacity
              onPress={() => signupFunc()}
              style={{
                height: height(4), shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 10, marginTop: height(6), backgroundColor: '#5e81f4', borderRadius: 20, justifyContent: 'center', alignItems: 'center'
              }}
            >

              <Text style={{ fontSize: totalSize(1.3), color: '#fff' }}>
                Sign up
            </Text>

            </TouchableOpacity>

            <View style={{ marginTop: height(1), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

              <Text style={{ fontSize: totalSize(1) }}>

                Do you have an account?

          </Text>

              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginLeft: width(0.5) }}>

                <Text style={{ fontSize: totalSize(1), color: '#5e81f4' }}>

                  Login

              </Text>

              </TouchableOpacity>

            </View>

          </View>

        </KeyboardAvoidingView>

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

        <Modal
          animationType='fade'
          transparent={true}
          visible={visible}
        >
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }}>

            <View style={{ height: height(15), width: width(35), justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: 20 }}>

              <Text style={{ fontSize: totalSize(1), width: width(17.5) }}>

                Your account created Please verify your mail

              </Text>

              <TouchableOpacity
                onPress={() => { setvisible(false), setverification(true) }}
                style={{ height: height(4), width: width(16), marginTop: height(2), justifyContent: 'center', alignItems: 'center', backgroundColor: '#5e81f4', borderRadius: 20 }}
              >

                <Text style={{ fontSize: totalSize(1.3), color: '#fff' }}>
                  ok
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        </Modal>

        <Modal
          animationType='fade'
          transparent={true}
          visible={verification}
        >
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }}>

            <View style={{ height: height(30), width: width(50), justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: 20 }}>

              <Text style={{ fontSize: totalSize(1), width: width(26), textAlign: 'center' }}>

                Please enter the verification code we send to your email address

              </Text>

              <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styleV.codeFieldRoot}
                keyboardType="number-pad"
                textContentType='telephoneNumber'
                renderCell={({ index, symbol, isFocused }) => (
                  <Text
                    key={index}
                    style={[styleV.cell, isFocused && styleV.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />

              <TouchableOpacity
                onPress={() => verifyFunc()}
                style={{ height: height(4), width: width(16), marginTop: height(2), justifyContent: 'center', alignItems: 'center', backgroundColor: '#5e81f4', borderRadius: 20 }}
              >

                <Text style={{ fontSize: totalSize(1.3), color: '#fff' }}>
                  Verify
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        </Modal>

      </ImageBackground>

    </View>

  )
}

const styleV = StyleSheet.create({
  root: { flex: 1, padding: 20 },
  codeFieldRoot: { marginTop: height(4) },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 48,
    marginHorizontal: width(1),
    fontSize: totalSize(1.5),
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#5e81f4',
  },
});