import React from 'react'
import { View, Text, Image, SafeAreaView, TouchableOpacity,FlatList,LayoutAnimation ,StyleSheet,Alert,Modal,TextInput} from 'react-native'
import { height, width, totalSize } from 'react-native-dimension'

import navbar1 from '../../assets/navbar1.png'
import navbar2 from '../../assets/navbar2.png'
import navbar3 from '../../assets/navbar3.png'
import navbar4 from '../../assets/navbar4.png'
import navbar7 from '../../assets/navbar7.png'
import navbar9 from '../../assets/navbar9.png'

export default function ButtomMain (props){

return(
<View style={{ height: height(6), width: width(95), backgroundColor: '#5E81F4', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>

<View style={{ height: height(3.5), width: width(85), marginTop: height(1), alignSelf: 'center' ,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

  <TouchableOpacity
  onPress={props.home}
  style={{alignItems:'center'}}
  >
    
    <Image
    source={navbar1}
    style={{height:35,width:35}}
    />

    <Text style={{fontSize:totalSize(0.8),color:'#fff'}}>

      Home
      
    </Text>

  </TouchableOpacity>

  <TouchableOpacity
  onPress={props.book}
  style={{alignItems:'center'}}
  >
    
    <Image
    source={navbar4}
    style={{height:35,width:35}}
    />

    <Text style={{fontSize:totalSize(0.8),color:'#fff'}}>

      Books
      
    </Text>

  </TouchableOpacity>

  <TouchableOpacity
  style={{alignItems:'center'}}
  >
    
    <Image
    source={navbar2}
    style={{height:35,width:35}}
    />

    <Text style={{fontSize:totalSize(0.8),color:'#fff'}}>

      Resources
      
    </Text>

  </TouchableOpacity>

  <TouchableOpacity
  onPress={props.assigmentscreen}
  style={{alignItems:'center'}}
  >
    
    <Image
    source={navbar7}
    style={{height:35,width:35}}
    />

    <Text style={{fontSize:totalSize(0.8),color:'#fff'}}>

      Assignment
      
    </Text>

  </TouchableOpacity>

  <TouchableOpacity
  onPress={props.notebook}
  style={{alignItems:'center'}}
  >
    
    <Image
    source={navbar3}
    style={{height:35,width:35}}
    />

    <Text style={{fontSize:totalSize(0.8),color:'#fff'}}>

      Notebooks
      
    </Text>

  </TouchableOpacity>

  <TouchableOpacity
  style={{alignItems:'center'}}
  >
    
    <Image
    source={navbar9}
    style={{height:35,width:35}}
    />

    <Text style={{fontSize:totalSize(0.8),color:'#fff'}}>

      Chat
      
    </Text>

  </TouchableOpacity>

</View>

</View>

)
}