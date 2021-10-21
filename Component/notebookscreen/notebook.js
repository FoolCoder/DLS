import React, { useState } from 'react'
import {
  View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, FlatList, Modal, TextInput, TouchableHighlight, LayoutAnimation
} from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown';
import { height, totalSize, width } from 'react-native-dimension'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import ButtomMain from '../ButtomMain/ButtomMain'

// these r images imports
import BookOpen from '../notebookscreen/assets/Group8.png'
import Group9 from '../notebookscreen/assets/Frame238.png'
import Group10 from '../notebookscreen/assets/Group10.png'
import Frame147 from '../notebookscreen/assets/Frame147.png'
import Ellipse100 from '../notebookscreen/assets/Ellipse100.png'
import cube from '../notebookscreen/assets/Cube.png'
import circles from '../notebookscreen/assets/CirclesThree.png'
import Band from '../notebookscreen/assets/Bandaids.png'
import Tablet from '../notebookscreen/assets/DeviceTabletSpeaker.png'
import Folder from '../notebookscreen/assets/FolderOpen.png';
import pic from '../../assets/pic.png'


let edit = {}

export default function Notebook({ navigation }) {
  const [modal, setmodal] = useState(false)
  const [deletemodal, setdeletemodal] = useState(false)
  const [UFModal, setUFModal] = useState(false)
  const [editdatamodal, seteditdatamodal] = useState(false)
  const [graphD, setgraphD] = useState('Select')
  const [indexedit, seteditindex] = useState(0)
  const [books, setbooks] = useState([
    {
      id: '1',
      Btitle: 'Biology',
      Btype: 'Notebook'
    },
    {
      id: '2',
      Btitle: 'Biology',
      Btype: 'Notebook'
    },
    {
      id: '3',
      Btitle: 'Biology',
      Btype: 'Notebook'
    },
    {
      id: '4',
      Btitle: 'Biology',
      Btype: 'Notebook'
    },
    {
      id: '5',
      Btitle: 'Biology',
      Btype: 'Notebook'
    },
    {
      id: '6',
      Btitle: 'Biology',
      Btype: 'Notebook'
    },
    {
      id: '7',
      Btitle: 'Biology',
      Btype: 'Notebook'
    },
    {
      id: '8',
      Btitle: 'Biology',
      Btype: 'Notebook'
    },
    {
      id: '9',
      Btitle: 'Biology',
      Btype: 'Notebook'
    },
    {
      id: '10',
      Btitle: 'Biology',
      Btype: 'Notebook'
    },
    {
      id: '11',
      Btitle: 'Biology',
      Btype: 'Notebook'
    },
    {
      id: '12',
      Btitle: 'Biology',
      Btype: 'Notebook'
    },
    {
      id: '13',
      Btitle: 'Biology',
      Btype: 'Notebook'
    },
    {
      id: '14',
      Btitle: 'Biology',
      Btype: 'Notebook'
    },

  ])
  const [deleteB, setdeletB] = useState([])
  const [text, settext] = useState(false)
  const [event, setevent] = useState('')
  const [editdata, seteditdata] = useState([
    {
      title: '',
      event: '',

    }
  ])
  const [addbook, setaddbook] = useState([])
  const notebook = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('pdfNB')}
      style={{
        marginHorizontal: width(2),
        alignItems: 'center',
        // borderWidth:1
        //height:height(10)
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
      }}>
      <View style={{
        width: width(15),
        height: height(14),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#EBECF2'
      }}>
        <Image style={{
          width: 60,
          height: 50,

        }}
          source={BookOpen} />
      </View>
      <Text style={{
        fontSize: totalSize(0.9),
        fontFamily: 'Poppins-Medium',
        marginTop: 5
      }}>
        {item.Btitle}
      </Text>
      <Text style={{
        fontSize: 10,
        color: '#B5B5C4'
      }}>
        {item.Btype}
      </Text>

    </TouchableOpacity>
  )

  const addfolder = () => {
    setaddbook([...addbook, { title: graphD, event: event, flag: false }])
    setgraphD('Select')
    setmodal(false)


  }
  const deletebook = () => {

    let count = 0
    deleteB.map((e, i, a) => {
      addbook.splice(e - count, 1)
      count++
      if (i == a.length - 1) {
        setaddbook([...addbook])
        settext(false)
      }

    })
  }



  const Addbook = ({ item, index }) => (
    <View

      style={{
        marginHorizontal: width(2),
        width: width(16),
        marginTop: height(1),
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,


      }}>
      <TouchableOpacity
        onLongPress={() => {
          if (text != true) {
            settext(true)
            let ind = []
            // let array = addbook
            // array[index].flag = !array[index].flag
            addbook[index].flag = !addbook[index].flag

            seteditdata({ title: item.title, event: item.event })
            setgraphD(item.title)
            seteditindex(index)
            addbook.map((e, i, a) => {
              if (e.flag == true) {
                ind.push(i)
              }
              if (i == a.length - 1) {
                setdeletB(ind)
                // console.log(ind)
                setaddbook(addbook)
              }
            })
          }
        }}
        onPress={() => {
          if (text == true) {
            let ind = []
            // let array = addbook
            // array[index].flag = !array[index].flag
            addbook[index].flag = !addbook[index].flag

            if (deleteB.length < 1) {
              if (addbook[index].flag) {
                seteditdata(item)
                seteditindex(index)
              }
            }
            addbook.map((e, i, a) => {
              if (e.flag == true) {
                ind.push(i)
              }
              if (i == a.length - 1) {
                setdeletB(ind)
                // console.log(ind)
                setaddbook(addbook)

                if (ind.length == 1) {
                  seteditdata(addbook[ind[0]])
                  seteditindex(ind[0])
                }

              }
            })
          }
          else {
            navigation.navigate('pdfNB')
          }
        }}
        style={{
          width: width(15),
          height: height(14),

          borderRadius: 10,
          backgroundColor: '#EBECF2',

        }}>

        {
          text == true ?
            <Image
              style={{
                width: 25,
                height: 25,
                alignSelf: 'flex-end',
                marginTop: width(1.5),
                marginRight: width(1.5)


              }}
              source={item.flag == true ? Frame147 : Ellipse100} />
            :
            null
        }

        <Image style={
          text == true ?
            {
              width: 60,
              height: 50,
              alignSelf: 'center',
              marginTop: width(3),
            }
            :
            {
              width: 60,
              height: 50,
              alignSelf: 'center',
              marginTop: width(7),


            }}
          source={BookOpen} />

      </TouchableOpacity>
      <View style={{
        alignItems: 'center'
      }}>
        <Text style={{
          fontSize: totalSize(0.9),
          fontFamily: 'Poppins-Medium',
          marginTop: 5
        }}>
          {item.title}
        </Text>
        <Text style={{
          fontSize: 10,
          color: '#B5B5C4'
        }}>
          {item.event}
        </Text>
      </View>
    </View>
  )
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)

  // this is main return function
  return (

    <View style={{
      flex: 1
    }}>

      <View style={{

        marginTop: 55,

      }}>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Text style={{
            fontSize: totalSize(2),
            fontFamily: 'Poppins-SemiBold',
            marginLeft: width(1.5)
          }}>
            Notebooks
</Text >
          <Image style={{
            marginRight: width(5),
            width: 50,
            height: 50,
            borderRadius: 25,

          }} source={pic} />
        </View>


        <Text style={{
          fontSize: totalSize(1.8),
          marginVertical: height(2),
          marginTop: height(6),
          fontFamily: 'Poppins-SemiBold',
          marginLeft: width(1.5)
        }}>
          Lesson Notebooks
</Text>

        <FlatList

          data={books}
          renderItem={notebook}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View style={{

          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: height(2)
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: width(32),
            alignItems: 'center',

            marginLeft: width(1.5),


          }}>

            <Text style={{
              fontSize: totalSize(1.8),
              fontFamily: 'Poppins-SemiBold'
              //borderWidth:1
            }}>
              Other Notebooks
            </Text>

            <TouchableOpacity
              disabled={deleteB.length >= 1 ? true : false}
              onPress={() => setmodal(true)}
              style={
                deleteB.length >= 1 ?
                  {

                    backgroundColor: '#EBECF2',
                    borderRadius: 9,
                    width: 35,
                    height: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }
                  :
                  {
                    backgroundColor: '#5E81F4',
                    borderRadius: 9,
                    width: 35,
                    height: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }

              }>
              {
                deleteB.length >= 1 ?
                  <AntDesign name="plus" size={25} color='#000' />
                  :
                  <AntDesign name="plus" size={25} color='#FFFFFF' />
              }

            </TouchableOpacity>
          </View>
          {
            text == true ?
              <View
                style={
                  deleteB.length <= 1 ?
                    {
                      marginRight: width(4),
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: width(21),


                      alignItems: 'center'
                    }
                    :
                    {
                      marginRight: width(4),
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: width(14),


                      alignItems: 'center'
                    }
                }
              >
                {deleteB.length <= 1 ?


                  <TouchableOpacity
                    disabled={deleteB.length == 0 ? true : false}
                    onPress={() => {
                      seteditdatamodal(true)


                    }}>
                    <Text style={
                      deleteB.length == 0 ?
                        {
                          fontFamily: 'Poppins-Bold',
                          color: '#CAD1E8',
                          fontSize: totalSize(1.2),

                          width: width(7),
                          alignItems: 'center'
                        }
                        :
                        {
                          fontFamily: 'Poppins-Bold',
                          color: '#5E81F4',
                          fontSize: totalSize(1.2),

                          width: width(7),
                          alignItems: 'center'
                        }

                    }>
                      Edit
                </Text >


                  </TouchableOpacity>


                  :
                  null

                }
                <TouchableOpacity

                  disabled={deleteB.length == 0 ? true : false}
                  onPress={() => {
                    setdeletemodal(true)

                  }}>
                  <Text style={
                    deleteB.length == 0 ?
                      {
                        fontFamily: 'Poppins-Bold',
                        color: '#CAD1E8',
                        fontSize: totalSize(1.2),

                        width: width(7),
                        alignItems: 'center'
                      }
                      :
                      {
                        fontFamily: 'Poppins-Bold',
                        color: '#5E81F4',
                        fontSize: totalSize(1.2),

                        width: width(7),
                        alignItems: 'center'
                      }}>
                    Delete
                 </Text  >
                </TouchableOpacity >

                <TouchableOpacity
                  style={{

                    width: width(7),
                    alignItems: 'center'
                  }}
                  onPress={() => {
                    settext(false)
                    addbook.map((e, i, a) => {
                      e.flag = false
                      if (i == a.length - 1) {
                        setaddbook(addbook)
                        setdeletB(0)

                      }
                    })
                  }}>
                  <Text style={{
                    fontFamily: 'Poppins-Bold',
                    color: '#5E81F4',
                    fontSize: totalSize(1.3)
                  }}>
                    x
                   </Text>
                </TouchableOpacity>
              </View>

              :
              null
          }

        </View>

      </View>
      <FlatList
        numColumns={5}
        data={addbook}
        renderItem={Addbook}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponentStyle={() => <View style={{
          marginBottom: height(4)
        }} />}

      />

      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>

        <ButtomMain
          home={() => navigation.navigate('home')}
          book={() => navigation.navigate('bookScreen')}
          notebook={() => navigation.navigate('notebook')}
          assigmentscreen={() => navigation.navigate('assigmentscreen')}
        />

      </View>

      <Modal
        animationType='none'
        visible={editdatamodal}
        transparent={true}

      >

        <View
          // onStartShouldSetResponder={(e) => setmodal(false)}
          // onMoveShouldSetResponder={(e) => setmodal(false)}
          // onResponderGrant={(e) => setmodal(false)}
          // onResponderMove={(e) => setmodal(false)}
          // onResponderRelease={(e) => setmodal(false)}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
            backgroundColor: 'rgba(0,0,0,0.5)'
          }}>
          <TouchableWithoutFeedback
          >

            <View
              style={{
                width: width(60),
                backgroundColor: '#FFFFFF',
                borderRadius: 20,
                height: height(55),
                alignItems: "center",

              }}
            >

              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: width(50),
                marginTop: height(4),

              }}>
                <Text style={{
                  fontSize: totalSize(1.4),
                  fontFamily: 'Poppins-Semibold'
                }}>
                  Add new book
    </Text>
                <TouchableOpacity
                  onPress={() => seteditdatamodal(false)}>
                  <Text style={{
                    fontSize: totalSize(1.4),
                    color: '#A0ADCF',
                    fontWeight: 'bold'
                  }}
                  >
                    x
    </Text>
                </TouchableOpacity>
              </View>

              <View style={{
                marginTop: height(2),
                width: width(50),
                alignSelf: 'center'
              }}>
                <Text style={{
                  fontSize: totalSize(0.9), marginBottom: 5,
                  fontFamily: 'Poppins-Medium'
                }}>
                  Choose subject
        </Text>
                {/* this dropdown modal */}
                <ModalDropdown

                  dropdownStyle={{ height: height(15), width: width(27), borderRadius: 10 }}
                  onSelect={(index, value) => {
                    edit.title = value.name
                    setgraphD(value.name)
                  }
                  }
                  renderSeparator={() => <View />}
                  renderRow={(item, index) => <View style={{ marginTop: height(1), width: width(14) }}>
                    <View style={{
                      width: width(11), alignSelf: 'center',
                      flexDirection: 'row', justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                      defaultValue={editdata.title}

                    >

                      <Image


                        style={{ height: 25, width: 25, }} source={item.pic} />

                      <View style={{ width: width(8) }}>

                        <Text style={
                          graphD == item.name ?
                            { fontSize: totalSize(1.1), fontWeight: 'bold', }
                            :
                            { fontSize: totalSize(1), }}>
                          {item.name}

                        </Text>

                      </View>

                    </View>

                  </View>

                  }
                  options={[{ pic: cube, name: 'Physics' }, { pic: circles, name: 'Maths' }, { pic: cube, name: 'Finnish' },
                  { pic: Tablet, name: 'English' }, { pic: Band, name: 'Visual arts' }, { pic: cube, name: 'Biology' }]}
                >

                  <View
                    style={{
                      height: height(4), width: width(28), borderRadius: 18,
                      borderWidth: 1, borderColor: '#A0ADCF',

                    }}
                  >
                    <View style={{
                      flexDirection: 'row', justifyContent: 'space-between',
                      alignItems: 'center', height: height(4),
                      width: width(25), alignSelf: 'center'
                    }}>
                      <Text style={
                        graphD == 'Subject' ?
                          {
                            fontSize: totalSize(1.2),
                            width: width(9), color: '#A0ADCF',
                          }
                          :
                          {
                            fontSize: totalSize(1.1),
                            width: width(9),
                          }
                      }>

                        {graphD}

                      </Text>

                      <MaterialIcons style={{

                      }}
                        name="keyboard-arrow-down" size={35} color="#5E81F4"
                      />
                    </View>

                  </View>

                </ModalDropdown>
              </View>
              <View style={{
                marginTop: height(2),
                width: width(50),
                justifyContent: 'center'
              }}>
                <Text style={{
                  fontSize: totalSize(0.9),
                  fontFamily: 'Poppins-Medium'
                }}>
                  Event name
                </Text>
                <TextInput placeholder="Give a name of your event"
                  placeholderTextColor="#CAD1E8"

                  defaultValue={editdata.event}
                  onChangeText={(val) => {
                    edit.event = val
                  }}


                  style={

                    {
                      borderWidth: 1,
                      height: height(3),
                      borderRadius: 8,
                      width: width(26),
                      marginTop: 5,
                      borderColor: '#E5E5E5',
                      fontSize: totalSize(0.9),
                      paddingHorizontal: width(1),

                    }
                  }
                />
              </View>
              <View style={{
                marginTop: height(2),
                width: width(50),
                alignSelf: 'center'
              }}>
                <Text style={{
                  fontSize: totalSize(0.9),
                  fontFamily: 'Poppins-Medium'
                }}>
                  Description
        </Text>
                <TextInput
                  placeholder="Please enter your description."
                  placeholderTextColor="#CAD1E8"
                  multiline
                  style={{
                    borderWidth: 1,
                    height: height(15),
                    borderRadius: 12,
                    width: width(45),
                    marginTop: 5,
                    borderColor: '#E5E5E5',

                    paddingHorizontal: width(1)
                  }} />
              </View>

              <View style={{
                flexDirection: 'row',
                alignSelf: 'flex-start',

                alignItems: 'center',
                justifyContent: 'space-between',
                width: width(28),
                marginLeft: width(5.2),
              }}>
                <TouchableOpacity



                  style={{
                    flexDirection: 'row',
                    borderWidth: 1,
                    alignSelf: 'flex-start',
                    width: width(20),

                    borderRadius: 15,
                    marginTop: height(2),
                    height: height(4),
                    alignItems: 'center',
                    borderColor: '#EBECF2'
                  }}>
                  <Image
                    style={{
                      marginLeft: width(2),
                      width: 24,
                      height: 27
                    }}
                    source={Group10} />
                  <Text style={{
                    marginLeft: height(1),
                    color: '#5E81F4',
                    fontSize: totalSize(1),
                    fontFamily: 'Poppins-Medium'
                  }}>
                    Add logo
              </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image style={{
                    marginTop: height(1.5),
                    width: 50,
                    height: 50
                  }} source={Group9} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => {
                  addbook[indexedit] = edit
                  setaddbook(addbook)
                  seteditdatamodal(false)
                  addbook.map((e, i, a) => {
                    e.flag = false
                    if (i == a.length - 1) {
                      setaddbook(addbook)
                    }
                  })
                }}

                style={{

                  backgroundColor: '#5E81F4',
                  borderRadius: 15,
                  width: width(15),
                  height: height(3),
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: height(2),
                  alignSelf: 'flex-start',
                  marginLeft: width(5.2)

                }}>
                <Text style={{
                  color: '#FFFFFF',
                  fontFamily: 'Poppins-Bold'
                }}>
                  Confrim
              </Text>
              </TouchableOpacity>

            </View>
          </TouchableWithoutFeedback>
        </View>

      </Modal>

      <Modal
        animationType='none'
        visible={modal}
        transparent={true}

      >

        <View
          // onStartShouldSetResponder={(e) => setmodal(false)}
          // onMoveShouldSetResponder={(e) => setmodal(false)}
          // onResponderGrant={(e) => setmodal(false)}
          // onResponderMove={(e) => setmodal(false)}
          // onResponderRelease={(e) => setmodal(false)}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
            backgroundColor: 'rgba(0,0,0,0.5)'
          }}>
          <TouchableWithoutFeedback
          >

            <View
              style={{
                width: width(60),
                backgroundColor: '#FFFFFF',
                borderRadius: 20,
                height: height(55),
                alignItems: "center",

              }}
            >

              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: width(50),
                marginTop: height(4),

              }}>
                <Text style={{
                  fontSize: totalSize(1.4),
                  fontFamily: 'Poppins-Semibold'
                }}>
                  Add new book
    </Text>
                <TouchableOpacity
                  onPress={() => {
                    setmodal(false)
                    addbook.map((e, i, a) => {
                      e.flag = false
                      if (i == a.length - 1) {
                        setaddbook(addbook)
                      }
                    })
                  }}>
                  <Text style={{
                    fontSize: totalSize(1.4),
                    color: '#A0ADCF',
                    fontWeight: 'bold'
                  }}
                  >
                    x
    </Text>
                </TouchableOpacity>
              </View>

              <View style={{
                marginTop: height(2),
                width: width(50),
                alignSelf: 'center'
              }}>
                <Text style={{
                  fontSize: totalSize(0.9), marginBottom: 5,
                  fontFamily: 'Poppins-Medium'
                }}>
                  Choose subject
        </Text>
                {/* this dropdown modal */}
                <ModalDropdown

                  dropdownStyle={{ height: height(15), width: width(27), borderRadius: 10 }}
                  onSelect={(index, value) => setgraphD(value.name)}
                  renderSeparator={() => <View />}
                  renderRow={(item, index) => <View style={{ marginTop: height(1), width: width(14) }}>
                    <View style={{
                      width: width(11), alignSelf: 'center',
                      flexDirection: 'row', justifyContent: 'space-between',
                      alignItems: 'center',
                    }}


                    >

                      <Image


                        style={{ height: 25, width: 25, }} source={item.pic} />

                      <View style={{ width: width(8) }}>

                        <Text style={
                          graphD == item.name ?
                            { fontSize: totalSize(1.1), fontWeight: 'bold', }
                            :
                            { fontSize: totalSize(1), }}>
                          {item.name}
                        </Text>

                      </View>

                    </View>

                  </View>

                  }
                  options={[{ pic: cube, name: 'Physics' }, { pic: circles, name: 'Maths' }, { pic: cube, name: 'Finnish' },
                  { pic: Tablet, name: 'English' }, { pic: Band, name: 'Visual arts' }, { pic: cube, name: 'Biology' }]}
                >

                  <View
                    style={{
                      height: height(4), width: width(28), borderRadius: 18,
                      borderWidth: 1, borderColor: '#A0ADCF',

                    }}
                  >
                    <View style={{
                      flexDirection: 'row', justifyContent: 'space-between',
                      alignItems: 'center', height: height(4),
                      width: width(25), alignSelf: 'center'
                    }}>
                      <Text style={
                        graphD == 'Subject' ?
                          {
                            fontSize: totalSize(1.2),
                            width: width(9), color: '#A0ADCF',
                          }
                          :
                          {
                            fontSize: totalSize(1.1),
                            width: width(9),
                          }
                      }>

                        {graphD}

                      </Text>

                      <MaterialIcons style={{

                      }}
                        name="keyboard-arrow-down" size={35} color="#5E81F4"
                      />
                    </View>

                  </View>

                </ModalDropdown>
              </View>
              <View style={{
                marginTop: height(2),
                width: width(50),
                justifyContent: 'center'
              }}>
                <Text style={{
                  fontSize: totalSize(0.9),
                  fontFamily: 'Poppins-Medium'
                }}>
                  Event name
        </Text>
                <TextInput placeholder="Give a name of your event"
                  placeholderTextColor="#CAD1E8"
                  onChangeText={(val) => setevent(val)}
                  style={

                    {
                      borderWidth: 1,
                      height: height(3),
                      borderRadius: 8,
                      width: width(26),
                      marginTop: 5,
                      borderColor: '#E5E5E5',
                      fontSize: totalSize(0.9),
                      paddingHorizontal: width(1),

                    }
                  }
                />
              </View>
              <View style={{
                marginTop: height(2),
                width: width(50),
                alignSelf: 'center'
              }}>
                <Text style={{
                  fontSize: totalSize(0.9),
                  fontFamily: 'Poppins-Medium'
                }}>
                  Description
        </Text>
                <TextInput
                  placeholder="Please enter your description."
                  placeholderTextColor="#CAD1E8"
                  multiline
                  style={{
                    borderWidth: 1,
                    height: height(15),
                    borderRadius: 12,
                    width: width(45),
                    marginTop: 5,
                    borderColor: '#E5E5E5',

                    paddingHorizontal: width(1)
                  }} />
              </View>

              <View style={{
                flexDirection: 'row',
                alignSelf: 'flex-start',

                alignItems: 'center',
                justifyContent: 'space-between',
                width: width(28),
                marginLeft: width(5.2),
              }}>
                <TouchableOpacity



                  style={{
                    flexDirection: 'row',
                    borderWidth: 1,
                    alignSelf: 'flex-start',
                    width: width(20),

                    borderRadius: 15,
                    marginTop: height(2),
                    height: height(4),
                    alignItems: 'center',
                    borderColor: '#EBECF2'
                  }}>
                  <Image
                    style={{
                      marginLeft: width(2),
                      width: 24,
                      height: 27
                    }}
                    source={Group10} />
                  <Text style={{
                    marginLeft: height(1),
                    color: '#5E81F4',
                    fontSize: totalSize(1),
                    fontFamily: 'Poppins-Medium'
                  }}>
                    Add logo
              </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image style={{
                    marginTop: height(1.5),
                    width: 50,
                    height: 50
                  }} source={Group9} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => addfolder()}
                style={{

                  backgroundColor: '#5E81F4',
                  borderRadius: 15,
                  width: width(15),
                  height: height(3),
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: height(2),
                  alignSelf: 'flex-start',
                  marginLeft: width(5.2)

                }}>
                <Text style={{
                  color: '#FFFFFF',
                  fontFamily: 'Poppins-Bold'
                }}>
                  Create
              </Text>
              </TouchableOpacity>

            </View>
          </TouchableWithoutFeedback>
        </View>

      </Modal>

      <Modal
        animationType='fade'
        transparent={true}
        visible={deletemodal}
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
              <Text style={{
                fontFamily: 'Poppins-Medium',
                fontSize: totalSize(1.3)
              }}> Do you want to delete this files </Text>
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: width(40), marginTop: height(2),
              }}
            >
              <TouchableOpacity onPress={() => {
                deletebook()
                setdeletemodal(false)
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
                  color: '#fff',
                  fontFamily: 'Poppins-Bold'
                }}>Yes</Text>
              </TouchableOpacity >
              <TouchableOpacity onPress={() => setdeletemodal(false)}
                style={{
                  width: width(17), height: height(3),
                  justifyContent: 'center', alignItems: 'center',
                }}
              >
                <Text style={{
                  fontSize: totalSize(1.2),
                  color: '#5E81F4',
                  fontFamily: 'Poppins-Bold'
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
            <TouchableOpacity onPress={() => setUFModal(false)}
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
    </View>

  )
}