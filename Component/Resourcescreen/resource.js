import React, { useState, Fragment } from 'react';
import {
  View, Text, Image, StyleSheet, TouchableOpacity, TextInput,
  FlatList,
  ScrollView, LayoutAnimation
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { totalSize, width, height } from 'react-native-dimension';
import { styles } from '../styles/styles';
import r from './figmathings/profile.png';
import MG from './figmathings/MagnifyingGlass.png';
import rdoc from './figmathings/Rectangle8284.png';
import vdoc from './figmathings/Rectangle884.png';
import idoc from './figmathings/Rectangle2884.png';
import sdoc from './figmathings/Rectangle8842.png';
import bookcover from './figmathings/bookcover.png';
import bookcover1 from './figmathings/bookcover-1.png';
import bookcover2 from './figmathings/bookcover-2.png';
import bookcover3 from './figmathings/bookcover-3.png';
import lessonicons from './figmathings/lessonicons.png';
import lessonicons1 from './figmathings/lessonicons-1.png';
import lessonicons2 from './figmathings/lessonicons-2.png';
import lessonicons3 from './figmathings/lessonicons-3.png';
import lessonicons4 from './figmathings/lessonicons-4.png';
import lessonicons5 from './figmathings/lessonicons-5.png';
import lessonicons6 from './figmathings/lessonicons-6.png';
import lessonicons7 from './figmathings/lessonicons-7.png';



export default function ResourceScreen() {
  const [tcolor, settcolor] = useState(0)
  const [subjectflag, setsubjectflag] = useState(false)
  const [flag, setflag] = useState(false)
  const [NumCol, setNumCol] = useState(0)


  // this data to render in flatlist
  const [data1, setdata1] = useState([
    {
      type: 'Documents',
      NOD: '150',
      update_date: '6 Feburary'
    },
    {
      type: 'Image',
      NOD: '150',
      update_date: '6 Feburary'
    },
    {
      type: 'Video',
      NOD: '150',
      update_date: '6 Feburary'
    },
    {
      type: 'Sounds',
      NOD: '150',
      update_date: '6 Feburary'
    },
  ])
  const [data2, setdata2] = useState([
    {
      bookname: 'Biology',
      class: 'class 9',
      img: bookcover
    },
    {
      bookname: 'Biology',
      class: 'class 9',
      img: bookcover1
    },
    {
      bookname: 'Biology',
      class: 'class 9',
      img: bookcover2
    },
    {
      bookname: 'Biology',
      class: 'class 9',
      img: bookcover3
    },
    {
      bookname: 'Biology',
      class: 'class 9',
      img: bookcover
    },
    {
      bookname: 'Biology',
      class: 'class 9',
      img: bookcover1
    },
    {
      bookname: 'Biology',
      class: 'class 9',
      img: bookcover2
    },
    {
      bookname: 'Biology',
      class: 'class 9',
      img: bookcover3
    },
  ])
  const [data3, setdata3] = useState([
    {
      type: 'English',
      books:
        [
          {
            bookname: 'Book name1',
            class: 'Class1',
            img: bookcover
          },
          {
            bookname: 'Book name2',
            class: 'Class2',
            img: bookcover1
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover2
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover3
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover1
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover1
          }, {
            bookname: 'Book name1',
            class: 'Class1',
            img: bookcover
          },
          {
            bookname: 'Book name2',
            class: 'Class2',
            img: bookcover1
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover2
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover3
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover1
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover1
          }, {
            bookname: 'Book name1',
            class: 'Class1',
            img: bookcover
          },
          {
            bookname: 'Book name2',
            class: 'Class2',
            img: bookcover1
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover2
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover3
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover1
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover1
          },
        ]
    }, {
      type: 'Finnish',
      books:
        [
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover3
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover1
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover2
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover3
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover1
          },
        ]
    },
    {
      type: 'Math',
      books:
        [
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover2
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover1
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover2
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover3
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover2
          },
        ]
    },
    {
      type: 'Physics',
      books:
        [
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover2
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover1
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover3
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover1
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover
          },
        ]
    },
    {
      type: 'Chemistry',
      books:
        [
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover1
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover3
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover2
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover2
          },
        ]
    }, {
      type: 'Biology',
      books:
        [
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover3
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover1
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover2
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover3
          },
        ]
    },
    {
      type: 'Arts',
      books:
        [
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover3
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover2
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover2
          },
          {
            bookname: 'Book name',
            class: 'Class',
            img: bookcover2
          },
        ]
    },




  ])
  const [data3Copy, setdata3Copy] = useState(data3)
  const [data4, setdata4] = useState({
    type: '',
    books: []
  })
  const [data5, setdata5] = useState([
    {
      title: 'English',
      text: 'This groups of resources consist of the english.',
      img: lessonicons
    },
    {
      title: 'Finnish',
      text: 'This groups of resources consist of the english.',
      img: lessonicons1
    },
    {
      title: 'English',
      text: 'This groups of resources consist of the english.',
      img: lessonicons
    },
    {
      title: 'Finnish',
      text: 'This groups of resources consist of the english.',
      img: lessonicons1
    },
    {
      title: 'Math',
      text: 'This groups of resources consist of the english.',
      img: lessonicons2
    },
    {
      title: 'Art',
      text: 'This groups of resources consist of the english.',
      img: lessonicons3
    },
    {
      title: 'Music',
      text: 'This groups of resources consist of the english.',
      img: lessonicons4
    },
    {
      title: 'Chemistry',
      text: 'This groups of resources consist of the english.',
      img: lessonicons5
    },
    {
      title: 'Music',
      text: 'This groups of resources consist of the english.',
      img: lessonicons4
    },
    {
      title: 'Chemistry',
      text: 'This groups of resources consist of the english.',
      img: lessonicons5
    },
    {
      title: 'Physics',
      text: 'This groups of resources consist of the english.',
      img: lessonicons6
    },
    {
      title: 'Biology',
      text: 'This groups of resources consist of the english.',
      img: lessonicons7
    },
  ])
  // end of data for FlatList here

  const selectbgcolor = (item) => {
    if (item.title == 'English' || item.title == 'Chemistry') {
      return '#EADAC1'
    }
    if (item.title == 'Finnish' || item.title == 'Music') {
      return '#B9DEE5'
    }
    if (item.title == 'Math' || item.title == 'Biology') {
      return '#CAD1E8'
    }
    if (item.title == 'Art' || item.title == 'Physics') {
      return '#FFE7E6'
    }
  }
  // render function for FlatList start from here
  const renderdata1 = ({ item }) => {
    return (
      <View style={
        mystyle.renderdata1
      }>

        <View style={{
          marginTop: height(2),

          flexDirection: 'row'
        }}>
          <Image style={{
            width: 15,
            height: 35,

          }} source={Imageselect(item)} />


          <View style={{
            marginLeft: width(2),
          }}>
            <Text style={{
              fontFamily: 'Poppins-Bold',
              color: '#4A4A68'
            }}>
              {item.type}
            </Text>

            <Text style={{
              fontFamily: 'Poppins-Medium',
              color: '#A0ADCF'
            }}>
              {item.NOD} {item.type}
            </Text>
          </View>
        </View>

        <View style={{
          marginTop: height(2),
          marginLeft: width(3.6)
        }}>
          <Text style={{
            fontFamily: 'Poppins-SemiBold',
            color: '#4A4A68'
          }}>
            Last Update
        </Text>
          <Text style={{
            fontFamily: 'Poppins-Medium',
            color: '#A0ADCF'
          }}>
            {item.update_date}
          </Text>


        </View>
      </View>

    )
  }
  const Imageselect = (item) => {
    if (item.type == 'Documents') {
      return rdoc
    }
    else if (item.type == 'Image') {
      return idoc
    }
    else if (item.type == 'Video') {
      return vdoc
    }
    else if (item.type == 'Sounds') {
      return sdoc
    }
  }

  const renderdata2 = ({ item }) => {
    return (
      <View style={{

      }}>
        <View style={{
          marginLeft: width(3.5),
          marginTop: height(2),


        }}>
          <View style={mystyle.renderdata2}>
            <Image
              style={{
                width: width(13),
                height: height(16),
                borderRadius: 12
              }}

              source={item.img} />
          </View>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: height(0.5)
          }}>
            <Text style={{
              color: '#404056',
              fontFamily: 'Poppins-Medium',
              fontSize: totalSize(1),

            }}>
              {item.bookname}
            </Text>
            <Text style={{
              color: '#B5B5C4',
              fontFamily: 'Poppins-Medium',
              fontSize: totalSize(0.7)
            }}>
              {item.class}
            </Text>
          </View>
        </View>
      </View>
    )
  }


  const renderdata3 = ({ item }) => {
    return (
      <View style={{
        marginTop: height(1)
      }}>
        <TouchableOpacity
          onPress={() => {
            setdata3Copy([item])
            setNumCol(5)
            setsubjectflag(true)
          }}

          style={{

            width: width(18),
            marginLeft: width(4)
          }}
        >
          <Text style={{

            color: '#4A4A68',
            fontSize: totalSize(2),
            fontFamily: 'Poppins-SemiBold',

          }}>
            {item.type}
          </Text>
        </TouchableOpacity>

        {/* <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >

          {
            item.books.map((e, i, a) => { */}

        <FlatList
          data={item.books}
          key={subjectflag == true ? '_' : '#'}
          keyExtractor={(item, index) => {
            if (subjectflag == true) {
              return '_' + index
            }
            else {
              return '#' + index
            }
          }}
          horizontal={subjectflag == true ? false : true}
          numColumns={NumCol}
          renderItem={({ item, index }) =>

            <View style={{
              marginLeft: width(3.5),
              marginTop: height(2),

            }}>
              <View style={mystyle.renderdata2}>
                <Image
                  style={{
                    width: width(13),
                    height: height(16),
                    borderRadius: 12
                  }}
                  source={item.img}
                />

              </View>
              <View style={{
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text style={{
                  color: '#404056',
                  fontFamily: 'Poppins-Medium',
                  fontSize: totalSize(1),

                }}>
                  {item.bookname}
                </Text>
                <Text style={{
                  color: '#B5B5C4',
                  fontFamily: 'Poppins-Medium',
                  fontSize: totalSize(0.7)
                }}>
                  {item.class}
                </Text>
              </View>
            </View>

          }

        />
        {/* }) */}
        {/* } */}

        {/* </ScrollView> */}

      </View>
    )
  }
  const renderdata5 = ({ item }) => {
    return (
      <View style={{
        flex: 1,
        marginTop: width(2),

        width: width(30),
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>


        <View style={{
          // borderWidth: 1,


          flexDirection: 'row'
        }}>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: selectbgcolor(item),
            width: width(18),
            height: height(18),
            borderTopLeftRadius: 14,
            borderBottomLeftRadius: 14
          }}>
            <Image
              style={{
                width: 80,
                height: 80
              }}
              source={item.img} />
          </View>

          <View style={{
            backgroundColor: '#FFFFFF',
            borderTopEndRadius: 12,
            borderBottomEndRadius: 12,
            width: width(26),
            height: height(18)
          }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                marginTop: height(1),
                borderWidth: 2,
                width: width(10),
                height: height(2),
                borderColor: '#5E81F4',
                alignSelf: 'flex-end',
                marginRight: width(2)

              }}>
              <Text style={{
                fontFamily: 'poppins-SemiBold',
                color: '#5E81F4',
                fontSize: totalSize(0.8)
              }}>
                Category
              </Text>
            </TouchableOpacity>


            <View
              style={{
                marginTop: height(3),
                marginLeft: width(1.5),
                alignItems: 'flex-start',

                width: width(21)
              }}>
              <Text style={{
                fontFamily: 'Poppins-SemiBold',
                color: '#4A4A68',
                fontSize: totalSize(1.2)
              }}>
                {item.title}
              </Text>
              <Text style={{
                color: '#A0ADCF',
                fontFamily: 'Poppins-Medium',
                fontSize: totalSize(0.8),
                marginTop: 4
              }}
                numberOfLines={4}

              >
                {item.text}
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  // end of render function here

  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)

  // main return of View is start
  return (
    <View style={styles.mainView}>
      <View style={styles.mainActivityView}>

        {subjectflag == false ?

          <Fragment>

            <View style={mystyle.header}>
              <Text style={{
                color: '#4A4A68',
                fontSize: totalSize(3),
                fontFamily: 'Poppins-SemiBold',
              }}>
                Resources
      </Text>
              <Image style={mystyle.img} source={r}
              />
            </View>

            <View style={mystyle.Sheader}>
              <TouchableOpacity onPress={() => {
                settcolor(0)
              }} >
                <Text

                  style={tcolor == 0 ?
                    [mystyle.htext, { color: '#4A4A68' }]

                    :
                    mystyle.htext

                  }
                >
                  All
            </Text>
              </TouchableOpacity>


              <TouchableOpacity onPress={() => {
                settcolor(1)
              }}>
                <Text
                  style={tcolor == 1 ?
                    [mystyle.htext, { color: '#4A4A68' }]

                    :
                    mystyle.htext

                  }>
                  By Lesseon
               </Text>
              </TouchableOpacity>
            </View>

          </Fragment>

          :
          <View style={{ marginTop: height(3), width: width(95), alignSelf: 'center' }}>

            <TouchableOpacity
              onPress={() => {
                setdata3Copy(data3)
                setNumCol(0)
                setsubjectflag(false)
              }}
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


        {/* {
          tcolor === 0 ? */}

        <View style={{ flex: 1, width: width(200), flexDirection: 'row' }}>


          <View style={{ width: tcolor === 0 ? width(100) : width(0) }}>

            {subjectflag == false ?

              <Fragment>

                <View style={{
                  flexDirection: 'row',
                  width: width(90),
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: height(1),
                }}>

                  <View style={{
                    flexDirection: 'row',
                    width: width(55)
                  }}>
                    <TouchableOpacity onPress={() => setflag(!flag)}
                      style={{


                      }}>
                      <Image style={{
                        width: 30,
                        height: 30,
                        marginTop: height(0.3),

                      }}
                        source={MG} />
                    </TouchableOpacity>
                    {
                      flag ? <View style={{
                        flexDirection: 'row',
                        // borderWidth: 1,
                        marginHorizontal: width(1.5),
                        height: height(3),

                        width: width(52),
                        // justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: '#FFFFFF'
                      }}>


                        <TextInput style={{
                          width: width(49),
                          fontSize: totalSize(1.2)
                        }} placeholder="  Biology"

                        />

                        <TouchableOpacity

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
                            // marginRight: width(3),
                            height: height(3),
                            width: width(49),

                          }}
                        />
                    }
                  </View>

                  {/* this sort section */}

                  <View style={{
                    backgroundColor: '#FFFFFF',
                    width: width(15),
                    height: height(3),
                    borderWidth: 2,
                    borderColor: '#EBECF2',
                    borderRadius: 8,
                    // alignSelf: 'flex-end'
                  }} />


                  <View>

                  </View>
                </View>

                <FlatList style={{

                  flexGrow: 0
                }}
                  data={data1}
                  renderItem={renderdata1}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                  ListFooterComponent={() => <View style={{
                    width: width(2)
                  }} />}
                />

                <View style={{
                  flexDirection: 'row',
                  width: width(25),
                  justifyContent: 'space-between',
                  marginTop: height(2),
                  marginLeft: width(3.5),
                  alignItems: 'center'
                }}>
                  <Text style={{
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: totalSize(1.8),
                    color: '#4A4A68'
                  }}>
                    Added by me
              </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#5E81F4',
                      width: 28,
                      height: 28,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 8
                    }}>
                    <AntDesign name="plus" color="#fff" size={22} />
                  </TouchableOpacity>

                </View>

                <FlatList style={{
                  flexGrow: 0
                }}
                  data={data2}
                  horizontal
                  renderItem={renderdata2}
                  keyExtractor={(item, index) => index.toString()}
                  showsHorizontalScrollIndicator={false}
                />

              </Fragment>

              : null}

            <View style={{ flex: 1 }}>

              <FlatList
                style={{ marginTop: height(2) }}
                data={data3Copy}
                renderItem={renderdata3}
                keyExtractor={(item, index) => index.toString()}

              />

            </View>

          </View>


          {/* : */}

          {/* this is by lesson flatlist */}

          <View style={{ flex: 1, backgroundColor: '#F5F7FB' }}>

            <FlatList style={{
              marginTop: height(5),
              width: tcolor === 0 ? 0 : width(92),
              alignSelf: 'center'
            }}
              showsVerticalScrollIndicator={false}
              data={data5}
              renderItem={renderdata5}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              ListFooterComponent={() => <View style={{
                height: height(3)
              }}

              />

              }
            />

          </View>

        </View>

        {/* } */}

      </View>

    </View>
  )
}

const mystyle = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: width(90),
    justifyContent: 'space-between',
    marginTop: height(4),
    alignSelf: 'center',


  },
  img: {
    width: 50,
    height: 50,
    marginTop: height(2)
  },
  Sheader: {
    flexDirection: 'row',
    width: width(15),
    justifyContent: 'space-between',
    marginLeft: width(5.5)
  },
  htext: {
    color: '#A0ADCF',
    fontFamily: 'Poppins-SemiBold',
    fontSize: totalSize(1.1)
  },
  renderdata1: {
    backgroundColor: '#FFFFFF',
    width: width(23),
    height: height(11),
    borderRadius: 25,
    marginLeft: width(2),
    marginTop: height(2),



  },
  renderdata2: {

    height: height(17.5),
    width: width(15.5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    borderRadius: 12
  }
})