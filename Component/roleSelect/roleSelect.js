import React, { useState } from 'react'
import { View, Text, Image, ImageBackground, SafeAreaView, TouchableOpacity, TextInput, FlatList, LayoutAnimation, StyleSheet } from 'react-native'
import { height, width, totalSize } from 'react-native-dimension'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import ModalDropdown from 'react-native-modal-dropdown';
import { styles } from '../styles/styles'

import shapes from '../../assets/shapes.png'
import logo from '../../assets/logo.png'
import teacher from '../../assets/teacher.png'
import student from '../../assets/student.png'
import parent from '../../assets/parent.png'
import teacherW from '../../assets/teacherW.png'
import studentW from '../../assets/studentW.png'
import parentW from '../../assets/parentW.png'


import all from '../../assets/all.png'
import visArts from '../../assets/visArts.png'
import common from '../../assets/common.png'
import maths from '../../assets/maths.png'
import english from '../../assets/english.png'
import downarrow from '../../assets/down-arrow.png'


export default function Roleselect({ navigation }) {
  const [selection, setselection] = useState(0)
  const [nextB, setnextB] = useState(true)
  const [graphD, setgraphD] = useState('All')

  const nextF = () => {
    let role = ''
    if (selection == 1) {
      role = 'teacher'
    }
    else if (selection == 2) {
      role = 'student'
    }
    else if (selection == 2) {
      role = 'parent'
    }
    navigation.navigate('login', {
      data: role
    })
  }

  return (

    <View style={styles.mainView}>

      <ImageBackground
        source={shapes}
        style={styles.mainActivityView}>

        {/* <ModalDropdown
          dropdownStyle={{ height: height(15), width: width(14), borderRadius: 10 }}
          onSelect={(index, value) => setgraphD(value.name)}
          renderSeparator={() => <View />}
          renderRow={(item, index) => <View style={{ marginTop: height(1), width: width(14) }}>
            <View style={{ width: width(11), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

              <Image style={{ height: 20, width: 20 }} source={item.pic} />

              <View style={{ width: width(8) }}>

                <Text style={
                  graphD == item.name ?
                    { fontSize: totalSize(0.9), fontWeight: 'bold' }
                    :
                    { fontSize: totalSize(0.9) }}>
                  {item.name}
                </Text>

              </View>

            </View>

          </View>

          }
          options={[{ pic: all, name: 'All' }, { pic: common, name: 'Physics' }, { pic: maths, name: 'Maths' }, { pic: common, name: 'Finnish' },
          { pic: english, name: 'English' }, { pic: visArts, name: 'Visual arts' }, { pic: common, name: 'Biology' }]}
        >

          <View
            style={{ height: height(2.5), width: width(14), borderRadius: 50, borderWidth: 1, borderColor: '#5E81F4', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
          >

            <Text style={{ fontSize: totalSize(1.1), width: width(9) }}>

              {graphD}

            </Text>

            <Image
              source={downarrow}
              style={{ height: 10, width: 15 }} />

          </View>

        </ModalDropdown> */}

        <View style={{ width: width(75), marginTop: height(25), alignSelf: 'center' }}>

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

            Please select your role

         </Text>

          <View style={{ marginTop: height(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

            <TouchableOpacity
              onPress={() => { setselection(1), setnextB(false) }}
              style={selection == 1 ? stylesP.selected : stylesP.nonSelected}
            >

              <Image
                source={selection == 1 ? teacherW : teacher}
                style={{ height: 75, width: 75 }}
              />

              <Text style={selection == 1 ? [stylesP.roleText, { color: '#fff' }] : stylesP.roleText}>

                Teacher

              </Text>

            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => { setselection(2), setnextB(false) }}
              style={selection == 2 ? stylesP.selected : stylesP.nonSelected}
            >

              <Image
                source={selection == 2 ? studentW : student}
                style={{ height: 75, width: 75 }}
              />

              <Text style={selection == 2 ? [stylesP.roleText, { color: '#fff' }] : stylesP.roleText}>

                Student

              </Text>

            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => { setselection(3), setnextB(false) }}
              style={selection == 3 ? stylesP.selected : stylesP.nonSelected}
            >

              <Image
                source={selection == 3 ? parentW : parent}
                style={{ height: 75, width: 85 }}
              />

              <Text style={selection == 3 ? [stylesP.roleText, { color: '#fff' }] : stylesP.roleText}>

                Parent

              </Text>

            </TouchableOpacity>

          </View>

          <TouchableOpacity
            onPress={() => nextF()}
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

                  elevation: 10, marginTop: height(6), backgroundColor: '#5e81f4', borderRadius: 20, justifyContent: 'center', alignItems: 'center'
                }
                :
                { height: height(4), marginTop: height(6), backgroundColor: '#a0adcf', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
          >

            <Text style={{ fontSize: totalSize(1.3), color: '#fff' }}>
              Next
            </Text>

          </TouchableOpacity>

        </View>

      </ImageBackground>

    </View>

  )
}

const stylesP = StyleSheet.create({
  roleText: {
    fontSize: totalSize(1.5),
    fontFamily: 'Poppins-SemiBold',
    marginTop: height(2)
  },
  nonSelected: {
    height: height(20),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    width: width(23),
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  selected: {
    height: height(20),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    width: width(23),
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5e81f4'
  }
})