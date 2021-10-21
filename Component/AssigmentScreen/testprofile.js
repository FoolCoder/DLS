import React from 'react'
import {
    View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet
} from 'react-native'
import { height, totalSize, width } from 'react-native-dimension'
import xw from './ASSIGNMENT/XW.png'
import Ellipse from './ASSIGNMENT/Ellipse.png'
import ai1 from './ASSIGNMENT/assignmenticons-1.png'
import ai2 from './ASSIGNMENT/assignmenticons-2.png'
import ai3 from './ASSIGNMENT/assignmenticons.png'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Testprofile({navigation}) {
    return (
        <View>
          
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

            <ImageBackground style={styles.imagebg}
                source={xw}
            >
                <Text style={{
                    fontSize: totalSize(1.8)
                }}>
                    Biology
         </Text>
                <Image
                    style={{
                        width: 44,
                        height: 44,
                        marginTop: height(4),
                        marginBottom: height(1)
                    }}
                    source={Ellipse} />

                <Text style={{
                    fontSize: totalSize(1.2),
                  width:width(15),
                  textAlign:'center',
                  backgroundColor:'#fff'

                }}> Mr.Brown</Text>

                <View style={styles.Row}>

                    <View style={styles.box}>

                        <Image

                            style={styles.image}
                            source={ai3} />

                        <Text

                            style={styles.txt}>15 Questions</Text>

                    </View>

                    <View>

                        <Image
                            style={styles.image}
                            source={ai1} />
                        <Text style={styles.txt}>
                            Assihned on
                            
         </Text>

                    </View>

                    <View>

                        <Image
                            style={styles.image}
                            source={ai2} />

                        <Text style={styles.txt}>
                            Due Date
                            
         </Text>

                    </View>

                </View>
                <TouchableOpacity
                onPress={()=>navigation.navigate('test')}
                style={{
                    backgroundColor: '#5e81f4',
                    width: width(12),
                    height: height(3),
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 12,
                    //marginLeft:width(3)

                }}>
                    <Text style={{
                        color: '#fff'
                    }}>
                        Start test
                </Text>
                </TouchableOpacity>

            </ImageBackground>
        </View>

    )
}
const styles = StyleSheet.create(
    {
        imagebg: {
            width: width(100),
            height: height(100),
            justifyContent: 'center',
            alignItems: 'center',
           // borderWidth:1

        },
        Row: {
            flexDirection: 'row',
            //borderWidth:1,
            width: width(40),
            justifyContent: 'space-between',
            height: height(12),
            alignItems: 'center'
        },
        image: {
            width: 50,
            height: 50,
            alignSelf: 'center',

        },

        txt: {
            fontSize: totalSize(0.8),
            //borderWidth:1,
            width: width(9),
            textAlign: 'center'
        }
    }
)