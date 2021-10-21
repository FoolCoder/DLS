/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  FlatList,
  StatusBar, TextInput, TouchableOpacity, ImageBackground, LayoutAnimation,
  Modal
} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { height, totalSize, width } from 'react-native-dimension'

import ButtomMain from '../ButtomMain/ButtomMain'

// import * as ImagePicker from 'react-native-ImagePicker'
import Radio from '../../assets/Radio.png'
import Radio2 from '../../assets/Radio2.png'
import Folder from '../../assets/Drag.png'
import FolderOpen from '../../assets/FolderOpen.png'
import { set } from 'react-native-reanimated';



export default function BookScreen({ navigation }) {
  const [data, setdata] = useState([
    {
      id: 1,
      img: require('../../assets/book.png'),
      text: 'The Science Book Éverything You Need',
      text2: 'Éverything You Need',
      title: 'Biology',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book'
    },
    {
      id: 2,
      img: require('../../assets/boo.png'),
      text: 'Content of the',
      text2: 'science about',
      title: 'Biology',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book'
    },
    {
      id: 3,
      img: require('../../assets/t.png'),
      text: 'The Science Book',
      text2: 'Cristo',
      title: 'Biology',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book'
    },
    {
      id: 4,
      img: require('../../assets/book.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Biology',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book'
    },
  ])
  const [data1, setdata1] = useState([
    {
      id: 1,
      img: require('../../assets/boo.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Biology',
      flag: false
    },
    {
      id: 2,
      img: require('../../assets/bookcover-12.png'),
      text: 'Content of the',
      text2: 'science about',
      title: 'Biology',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 3,
      img: require('../../assets/t.png'),
      text: 'The Science Book',
      text2: 'Cristo',
      title: 'Biology',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 4,
      img: require('../../assets/bookcover-2.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Biology',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 5,
      img: require('../../assets/bookcover-3.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Biology',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 6,
      img: require('../../assets/bookcover-4.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Biology',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 7,
      img: require('../../assets/bookcover-5.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Biology',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 8,
      img: require('../../assets/bookcover-6.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Biology',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 6,
      img: require('../../assets/bookcover-7.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Biology',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 7,
      img: require('../../assets/bookcover-8.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Biology',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 8,
      img: require('../../assets/bookcover-9.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Biology',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 6,
      img: require('../../assets/bookcover-10.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Biology',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 7,
      img: require('../../assets/bookcover-11.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Biology',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 8,
      img: require('../../assets/bookcover-12.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Biology',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 6,
      img: require('../../assets/bookcover-12.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Biology',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 7,
      img: require('../../assets/bookcover-14.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Biology',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 8,
      img: require('../../assets/book.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Biology',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 6,
      img: require('../../assets/book.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Biology',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },

  ])

  const [data2, setdata2] = useState([
    {
      id: 1,
      img: require('../../assets/boo.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Biology',
      flag: false
    },
    {
      id: 2,
      img: require('../../assets/bookcover-12.png'),
      text: 'Content of the',
      text2: 'science about',
      title: 'Physic',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 3,
      img: require('../../assets/t.png'),
      text: 'The Science Book',
      text2: 'Cristo',
      title: 'Math',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 4,
      img: require('../../assets/bookcover-2.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Chemistry',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 5,
      img: require('../../assets/bookcover-3.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Urdu',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 6,
      img: require('../../assets/bookcover-4.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Calculus',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 7,
      img: require('../../assets/bookcover-5.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Cplusplus',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 8,
      img: require('../../assets/bookcover-6.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Data structure',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 6,
      img: require('../../assets/bookcover-7.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Statistics',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 7,
      img: require('../../assets/bookcover-8.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Mac',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 8,
      img: require('../../assets/bookcover-9.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Laptop',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 6,
      img: require('../../assets/bookcover-10.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Iphone',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 7,
      img: require('../../assets/bookcover-11.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Vivo',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 8,
      img: require('../../assets/bookcover-12.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Biology',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 6,
      img: require('../../assets/bookcover-12.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Biology',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 7,
      img: require('../../assets/bookcover-14.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Biology',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 8,
      img: require('../../assets/book.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Biology',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },
    {
      id: 6,
      img: require('../../assets/book.png'),
      text: 'The Science Book',
      text2: 'Éverything You Need',
      title: 'Biology',
      img1: require('../../assets/open.png'),
      text3: 'Study Book',
      img2: require('../../assets/whiteboard.png'),
      text4: 'Practice Book',
      flag: false
    },

  ])

  const [bookshelFullView, setbookshelFullView] = useState(false)
  const [folderView, setfolderView] = useState(false)

  const [bookshelfA, setbookshelfA] = useState([])

  const [deleteIndex, setdeleteIndex] = useState([])

  const [flag, setflag] = useState(false)

  const [FlatListR, setFlatListR] = useState(false)
  const [flatlist, setflatlist] = useState(false)

  const [alluser, setalluser] = useState([])
  const [searchText, setsearchText] = useState('')

  const [folder, setfolder] = useState(false)
  const [selectB, setselectB] = useState('Select')

  const [CheckBox, setCheckBox] = useState(false)
  const [EditModal, setEditModal] = useState(false)
  const [deletetext, setdeletetext] = useState("Do you want delete this file?")
  const [UFModal, setUFModal] = useState(false)
  const [CFModal, setCFModal] = useState(false)

  const [editfolder, seteditfolder] = useState({
    foldername: '',
    bookcategory: ''
  })


  useEffect(() => {
    setbookshelfA(data2)
    setalluser(data2)
  }, [])

  const renderItem = ({ item }) => (
    <View style={styles.container}>

      <Image style={styles.img} source={item.img} />
      <View style={{
        marginRight: width(1.5),
        backgroundColor: '#FFFFFF',
        width: width(16.5),
        borderTopRightRadius: 22,
        borderBottomRightRadius: 22
      }}>
        <View style={styles.aligntext}>
          <Text numberOfLines={1}  >{item.text}</Text>
          <Text  >{item.text2}</Text>
          <Text  >{item.title}</Text>
          <View style={styles.imgtext}>
            <Image
              style={{
                width: width(2),
                height: height(2)
              }}
              source={item.img1}
            />
            <Image
              style={{
                width: width(2),
                height: height(2)
              }}
              source={item.img2}
            />

          </View>

          <View style={styles.text2}>

            <Text style={{ fontSize: 10 }}>{item.text3}</Text>
            <Text style={{ fontSize: 10 }}>{item.text4}</Text>

          </View>
        </View>
      </View>
    </View>

  );
  const renderItem1 = ({ item, index }) => {

    return (

      <View style={{ marginHorizontal: width(2.5), flexGrow: 0 }}>
        <View style={{
          //width: width(92),
          marginTop: width(1.5),
        }}>

          <View style={styles.SecondContainer}>

            <TouchableOpacity
              onPress={() => {
                if (flatlist == true) {
                  let d = bookshelfA
                  let count = 0
                  let array = []
                  d.forEach((e, i, a) => {
                    if (i == index) {
                      e.flag = !e.flag
                    }
                    if (e.flag == true) {
                      array.push(i)
                      count++
                    }
                    if (i == a.length - 1) {
                      if (count > 0) {
                        setCheckBox(true)
                      }
                      else {
                        setCheckBox(false)
                      }
                      setdeleteIndex(array)
                    }
                  })
                  setFlatListR(!FlatListR)
                  setbookshelfA(d)
                }
                else {

                  if (!item.img) {
                    setfolderView(true)
                    setbookshelfA(item.books)
                    setalluser(item.books)
                  }
                  else {
                    navigation.navigate('pdf')
                  }

                }
              }
              }
            >

              <ImageBackground
                style={[styles.picture, {
                  justifyContent: 'center',
                  alignItems: 'center'
                }]}
                imageStyle={{ borderRadius: 6 }}
                source={item.img} >

                {item.img ? null :
                  <Image
                    source={FolderOpen}
                    style={{ height: 50, width: 50 }}
                  />

                }

                {flatlist == true ?

                  <Image
                    source={item.flag == true ? Radio : Radio2}
                    style={{
                      height: 30, width: 30, position: 'absolute',
                      right: width(0.5), top: height(0.5)
                    }}
                  />

                  : null}


              </ImageBackground>

            </TouchableOpacity>
          </View>

          <View style={styles.secondtext}>
            <Text style={{ justifyContent: 'center' }}>{item.text}</Text>
            <Text >{item.text2}</Text>
            <Text  >{item.title}</Text>
          </View>
        </View>
      </View>
    )
  }
  const Search = (texttosearch) => {

    setsearchText(texttosearch)
    // alert(text)
    setbookshelfA(alluser.filter(i =>
      i.title.toLowerCase().includes(texttosearch.toLowerCase())))

  }
  const deleteItem = () => {

    // LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)

    let count = 0
    deleteIndex.map((e, i, a) => {
      bookshelfA.splice(e - count, 1)
      count++
      if (i == a.length - 1) {
        setbookshelfA(bookshelfA)
        setalluser(bookshelfA)
        setdata2(bookshelfA)
        setCheckBox(false)
        setFlatListR(!FlatListR)
      }
    })
  }
  const Foldertext = (val, title) => {

    if (title == 'name') {
      editfolder.foldername = val
      seteditfolder(editfolder)
    }
    else {
      editfolder.bookcategory = val
      seteditfolder(editfolder)
    }

  }
  const addfolder = () => {

    // LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)

    let book = []

    deleteIndex.map((e, i, a) => {
      bookshelfA[e].flag = false
      book.push(bookshelfA[e])
      if (i == a.length - 1) {
        bookshelfA.unshift({
          text: editfolder.foldername,
          title: editfolder.bookcategory,
          books: book,
          flag: false
        })
        setbookshelfA(bookshelfA)
        setalluser(bookshelfA)
        setdata2(bookshelfA)

        let count = -1
        deleteIndex.map((e, i, a) => {
          bookshelfA.splice(e - count, 1)
          count++
          if (i == a.length - 1) {
            setbookshelfA(bookshelfA)
            setalluser(bookshelfA)
            setdata2(bookshelfA)
            setCheckBox(false)
            setFlatListR(!FlatListR)
          }
        })
      }
    })

    setCFModal(false)

    // id: 1,
    //   // img: require('../../assets/boo.png'),
    //   text: 'The Science Book',
    //   text2: 'Éverything You Need',
    //   title: 'Biology',
    //   flag: false

    // data2.splice(0, 0, {
    //   id: '4',
    //   img: require('../../assets/boo.png'),
    //   text: 'hgvhgv',
    //   text2: 'hgchgc',
    //   title: 'phy',
    //   flag: false
    // })

    // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)

    // data2.push({
    //   id: '4',
    //   img: require('../../assets/boo.png'),
    //   text: 'hgvhgv',
    //   text2: 'hgchgc',
    //   title: 'phy',
    //   flag: false
    // }
    // )


    // setdata2(data2)
    // // setCheckBox(false)
    // setFlatListR(!FlatListR)

    // console.log(data2);
  }
  const Filtersortselect = () => {

    return (
      <View
        style={{
          flexDirection: 'row',
          width: width(20),
          height: height(3),
          alignItems: 'center'
        }}
      >
        {folder == false ?
          <View style={{
            flexDirection: 'row', alignItems: 'center',
            width: width(14)
          }}>

            <Text style={{ fontSize: totalSize(1), }} > Filter</Text>
            <MaterialIcons name="keyboard-arrow-down" color='black' size={25} />
            <Text style={{ fontSize: totalSize(1), marginLeft: 15 }}>Sort</Text>
            <MaterialIcons name="keyboard-arrow-down" color='black' size={25} />

          </View>
          :
          <View
            style={{

              width: width(14),
              right: 9,
              height: height(3),
              flexDirection: 'row',
              justifyContent: 'flex-end'
            }}>

            {folderView == false ?

              <TouchableOpacity onPress={() => setCFModal(!CFModal)}
                disabled={!CheckBox}
                style={{
                  backgroundColor: CheckBox == false ? "#CAD1E8" : '#5E81F4',
                  width: width(4),
                  justifyContent: 'center', alignItems: 'center',
                  borderRadius: 12
                }}>
                <Feather name="folder-plus" color="#fff" size={25} />
              </TouchableOpacity>

              : null}

            <TouchableOpacity onPress={() => setEditModal(!EditModal)}
              disabled={!CheckBox}
              style={{
                backgroundColor: CheckBox == false ? "#CAD1E8" : '#5E81F4',
                width: width(4), marginLeft: width(2),
                justifyContent: 'center', alignItems: 'center',
                borderRadius: 12
              }}>
              <AntDesign name="delete" color="#fff" size={25} />
            </TouchableOpacity>
          </View>
        }
        <TouchableOpacity
          onPress={() => {
            if (flatlist == true) {
              bookshelfA.map((e) => {
                e.flag = false
              })
              setbookshelfA(bookshelfA)
              setflatlist(!flatlist)
              setfolder(!folder)
            }
            else {
              setflatlist(!flatlist)
              setfolder(!folder)
              setCheckBox(false)
            }

            if (folder == true) {
              setselectB('Select')
            }
            else {
              setselectB('Unselect')
            }

          }}
        >

          <Text
            style={{
              color: "#5E81f4",
              fontSize: totalSize(1),
              marginLeft: 15
            }}>
            {selectB}
          </Text>

        </TouchableOpacity>
      </View>
    )

  }

  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)

  return (
    <View style={styles.mainview}>
      <View style={styles.mainactivity}>
        {/* i m working here÷ */}
        <Modal
          animationType='fade'
          transparent={true}
          visible={CFModal}
        >
          <View style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center', alignItems: 'center'
          }}>
            <View style={{
              backgroundColor: '#fff', height: height(25),
              width: width(45), justifyContent: 'center', alignItems: 'center',
              borderRadius: 18
            }}>
              <Text
                style={{ width: width(40) }}>Enter Folder name</Text>
              <TextInput
                placeholder="  Biology Book"
                placeholderTextColor="#A0ADCF"
                onChangeText={(val) => Foldertext(val, 'name')}
                style={{
                  borderWidth: 1,
                  borderColor: "#A0ADCF50",
                  width: width(40),
                  height: height(2.5), borderRadius: 8
                }}
              />
              <Text style={{ width: width(40), marginTop: height(2) }}>Category</Text>
              <TextInput
                placeholder="  Book Category"
                placeholderTextColor="#A0ADCF"
                onChangeText={(val) => Foldertext(val, 'category')}
                style={{
                  borderWidth: 1,
                  borderColor: "#A0ADCF50",
                  width: width(40),
                  height: height(2.5), borderRadius: 8
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: width(40), marginTop: height(2),
                }}
              >
                <TouchableOpacity
                  onPress={() => addfolder()}
                  style={{
                    backgroundColor: '#5E81F4', width: width(17),
                    height: height(3),
                    justifyContent: 'center', alignItems: 'center',
                    borderRadius: 15
                  }}
                >
                  <Text style={{
                    fontSize: totalSize(1.2),
                    color: '#fff'
                  }}>
                    Save
                  </Text>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => setCFModal(!CFModal)}
                  style={{
                    width: width(17), height: height(3),
                    justifyContent: 'center', alignItems: 'center',
                  }}
                >
                  <Text style={{
                    fontSize: totalSize(1.2),
                    color: '#5E81F4'
                  }} >Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType='fade'
          transparent={true}
          visible={EditModal}
        >
          <View style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center', alignItems: 'center'
          }}>
            <View style={{
              backgroundColor: '#fff', height: height(18),
              width: width(45), justifyContent: 'center', alignItems: 'center',
              borderRadius: 18
            }}>
              <Text style={{ textAlign: 'center', fontSize: totalSize(1.5) }}>
                <Text> {deletetext} </Text>
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: width(40), marginTop: height(2),
                }}
              >
                <TouchableOpacity onPress={() => {
                  deleteItem()
                  setEditModal(false)
                }}
                  style={{
                    backgroundColor: '#5E81F4', width: width(17),
                    height: height(3),
                    justifyContent: 'center', alignItems: 'center',
                    borderRadius: 20
                  }}
                >
                  <Text style={{
                    fontSize: totalSize(1.2),
                    color: '#fff'
                  }}>Yes</Text>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => setEditModal(false)}
                  style={{
                    width: width(17), height: height(3),
                    justifyContent: 'center', alignItems: 'center',
                  }}
                >
                  <Text style={{
                    fontSize: totalSize(1.2),
                    color: '#5E81F4'
                  }} >Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType='fade'
          transparent={true}
          visible={UFModal}
        >
          <View style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center', alignItems: 'center',

          }}>
            <View style={
              {
                backgroundColor: '#fff', height: height(25), width: width(33),
                justifyContent: 'center', alignItems: 'center', borderRadius: 15
              }
            }>

              <Image
                source={Folder}
                style={{
                  height: height(10), resizeMode: 'contain',
                  width: width(33)
                }}
              />
              <TouchableOpacity style={{
                height: height(4),
                width: width(16), marginTop: height(2),
                justifyContent: 'center', alignItems: 'center',
                backgroundColor: '#5e81f4', borderRadius: 20
              }}>
                <Text style={{
                  fontSize: totalSize(1),
                  fontFamily: 'Poppins-Bold', color: '#fff'
                }}>Upload</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setUFModal(!UFModal)}
                style={{
                  height: height(2),
                  width: width(16), marginTop: height(1.5),
                  justifyContent: 'center', alignItems: 'center',
                }}
              >
                <Text style={{
                  fontSize: totalSize(1),
                  fontFamily: 'Poppins-Bold', color: '#A0ADCF'
                }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>

        </Modal>

        {bookshelFullView == false ?

          <View >

            <Text style={{
              fontSize: totalSize(1.5),
              marginLeft: width(6.5),
            }}>Books</Text>

            <Text style={{
              fontSize: totalSize(1.2),
              marginLeft: width(6.5),
              marginTop: height(4)
            }}>Lesson books</Text>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => { return index.toString() }}
              // onEndReachedThreshold={0.01}
              // onEndReached={(e) => {
              //   console.log(e)
              // }}
              horizontal
              showsHorizontalScrollIndicator={false}
            />

          </View>

          :
          <View style={{ marginTop: height(3), width: width(95), alignSelf: 'center' }}>

            <TouchableOpacity
              onPress={() => setbookshelFullView(false)}
              style={{ width: width(10), flexDirection: 'row', alignItems: 'center' }}
            >

              <MaterialIcons
                name='arrow-back-ios'
                size={25}
                color='#5e81f4'
              />

              <Text style={{ fontSize: totalSize(1.3), marginLeft: width(1), color: '#5e81f4', fontWeight: 'bold' }}>

                Back

            </Text>

            </TouchableOpacity>

          </View>
        }
      </View >


      {/* i am working here */}
      < View style={{
        flexDirection: 'row',
        marginTop: width(3),
        marginLeft: width(3),
        height: height(3),
        alignItems: 'center',


      }}>

        <TouchableOpacity
          onPress={() => setbookshelFullView(true)}
        >

          <Text
            style={{
              marginLeft: width(3),
              fontSize: totalSize(1.5)
            }}>
            Bookshelf
          </Text>

        </TouchableOpacity>

        <TouchableOpacity>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => setUFModal(!UFModal)}
          style={{
            backgroundColor: '#5E81F4',
            borderRadius: 12,
            height: 35,
            width: 35,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: width(1.5)
          }} >
          <Image style={{
            width: 20,
            height: 20,

          }}
            source={require('../../assets/FilePlus2.png')} />

        </TouchableOpacity>
        <TouchableOpacity onPress={() => setflag(!flag)}
          style={{
            backgroundColor: '#5E81F4',
            marginLeft: width(1.5),
            borderRadius: 12,
            height: 35,
            width: 35,
            //marginLeft:width(2),
            justifyContent: 'center',
            alignItems: 'center',
            //borderWidth:1,

          }}>
          <Image style={{
            width: 25,
            height: 25,

          }}
            source={require('../../assets/Search2.png')} />
        </TouchableOpacity>

        {
          flag ? <View style={{
            flexDirection: 'row',
            // borderWidth: 1,
            marginHorizontal: width(1.5),
            height: height(3),
            //borderColor:'#FFFFFF'

            width: width(45),
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#FFFFFF'
          }}>


            <TextInput style={{
              width: width(40), fontSize: totalSize(1.2)
            }} placeholder="  Biology"
              value={searchText}
              onChangeText={(val) => Search(val)}
            />

            <TouchableOpacity
              onPress={() => {
                setsearchText('')
                setbookshelfA(alluser)
              }}
            >

              <Image style={{
                width: 25,
                height: 25,
                marginRight: width(1)
              }}
                source={require('../../assets/close.png')} />

            </TouchableOpacity>
          </View> :

            <View
              style={{

                // borderWidth: 1,
                marginRight: width(3),
                height: height(3),
                //borderColor:'#FFFFFF'

                width: width(45),

                alignItems: 'center',
                // backgroundColor: '#FFFFFF'
              }}
            />
        }
        <Filtersortselect />
        {/* {
          folder ?
            <Adddelete /> :
            null
        } */}

      </View >

      {folderView == true ?

        <View style={{ marginVertical: height(1.5), width: width(90), alignSelf: 'center' }}>

          <TouchableOpacity
            onPress={() => {
              setbookshelfA(data2)
              setalluser(data2)
              setfolderView(false)
            }}
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

        : null}

      <FlatList
        numColumns={5}
        data={bookshelfA}
        extraData={FlatListR}
        renderItem={renderItem1}
        ListFooterComponent={<View style={{ height: height(10) }} />}
        keyExtractor={(item, index) => { return index.toString() }}
        showsHorizontalScrollIndicator={false}
      />

      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>

        <ButtomMain
          home={() => navigation.navigate('home')}
          book={() => navigation.navigate('bookScreen')}
          notebook={() => navigation.navigate('notebook')}
          assigmentscreen={() => navigation.navigate('assigmentscreen')}
        />

      </View>

    </View >

  );
};

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: "#F5F7FB",
  },
  mainactivity: {
    marginTop: 35
  },
  container: {
    marginTop: height(1),
    width: width(30),
    marginLeft: width(4),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontSize: totalSize(1.5)
  },
  img: {
    width: width(13),
    height: height(13),
    borderTopLeftRadius: 22,
    borderBottomLeftRadius: 22
  },
  imgtext: {
    marginTop: height(2),
    width: width(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: width(1.3)
  },
  text2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width(14),

  },
  aligntext: {
    marginTop: height(2),
    marginLeft: width(1.3),
    fontFamily: "Poppins-Bold"


  },
  SecondContainer: {
    width: width(15),
    height: height(18.6),
    borderRadius: 8,
    borderColor: '#EBECF2',
    //borderColor: '#000',
    borderWidth: 6,
    flexGrow: 0
  },
  secondtext: {
    width: width(15),
    alignItems: 'center'
    //alignItems: 'center',

  },
  picture: {
    width: '100%',
    height: '100%',
    //borderRadius: 32,
  },
  folder: {
    width: 10,
    height: 10
  }
});
