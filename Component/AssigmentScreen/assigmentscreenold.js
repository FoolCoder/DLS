import React, { useState } from 'react'
import { View, Text, StyleSheet,FlatList,Image } from 'react-native'
import { height, totalSize, width } from 'react-native-dimension'
import { TouchableOpacity } from 'react-native-gesture-handler'
import profile from '../../ASSIGNMENT/profile.png';
import ai from '../../ASSIGNMENT/assignmenticons.png';
import ai1 from '../../ASSIGNMENT/assignmenticons-1.png';
import ai2 from '../../ASSIGNMENT/assignmenticons-2.png';
import DS from '../../ASSIGNMENT/DS.png'


export default function AssigmentScreen() {
  const [R, setR] = useState(1)
  const [data, setdata]=useState([
    {
      id:'1',
      img:require('../../ASSIGNMENT/lessonicons.png'),
      pages:'75-100',
      Assigneddate:'12.02.2021',
      dueDate:'15.02.2021',
      subjecttitle:'English',
      Teachername:'Mrs.Brown',
    
      button:'start'
    },
    {
      id:'1',
      pages:'75-100',
      Assigneddate:'12.02.2021',
      dueDate:'15.02.2021',
      subjecttitle:'Chemistry',
      Teachername:'Mrs. Jessica',
      img:require('../../ASSIGNMENT/lessonicons-1.png'),
      button:'start'
    },
    {
      id:'1',
      pages:'75-100',
      Assigneddate:'12.02.2021',
      dueDate:'15.02.2021',
      subjecttitle:'Math',
      Teachername:'Mrs.Jessics',
      img:require('../../ASSIGNMENT/lessonicons-2.png'),
      button:'start'
    },
    {
      id:'1',
      pages:'75-100',
      Assigneddate:'12.02.2021',
      dueDate:'15.02.2021',
      subjecttitle:'Physic',
      Teachername:'Mrs.Adda',
      img:require('../../ASSIGNMENT/lessonicons-3.png'),
      button:'start'
    },
  ])
  const [data1, setdata1]=useState([
    // this is overdue list data
    {
      id:'1',
      img:require('../../ASSIGNMENT/lessonicons.png'),
      pages:'75-100',
      Assigneddate:'12.02.2021',
      dueDate:'15.02.2021',
      subjecttitle:'English',
      Teachername:'Mrs.Brown',
    marks:'16/20',
      button:'view'
    },
    {
      id:'1',
      pages:'75-100',
      Assigneddate:'12.02.2021',
      dueDate:'15.02.2021',
      subjecttitle:'Chemistry',
      Teachername:'Mrs. Jessica',
      img:require('../../ASSIGNMENT/lessonicons-1.png'),
      marks:'40/50',
      button:'view'
    },
    {
      id:'1',
      pages:'75-100',
      Assigneddate:'12.02.2021',
      dueDate:'15.02.2021',
      subjecttitle:'Math',
      Teachername:'Mrs.Jessics',
      img:require('../../ASSIGNMENT/lessonicons-2.png'),
      marks:'65/75',
      button:'view'
    },
    {
      id:'1',
      pages:'75-100',
      Assigneddate:'12.02.2021',
      dueDate:'15.02.2021',
      subjecttitle:'Physic',
      Teachername:'Mrs.Adda',
      img:require('../../ASSIGNMENT/lessonicons-3.png'), marks:'17/25',
      button:'view',
      marks:'45/50'
    },
  ])
  const [data2, setdata2]=useState([
    // this is overdue list data
    {
      id:'1',
      img:require('../../ASSIGNMENT/lessonicons.png'),
      pages:'75-100',
      Assigneddate:'12.02.2021',
      dueDate:'15.02.2021',
      subjecttitle:'English',
      Teachername:'Mrs.Brown',
    
      button:'start'
    },
    {
      id:'1',
      pages:'75-100',
      Assigneddate:'12.02.2021',
      dueDate:'15.02.2021',
      subjecttitle:'Chemistry',
      Teachername:'Mrs. Jessica',
      img:require('../../ASSIGNMENT/lessonicons-1.png'),
      button:'check'
    },
    {
      id:'1',
      pages:'75-100',
      Assigneddate:'12.02.2021',
      dueDate:'15.02.2021',
      subjecttitle:'Math',
      Teachername:'Mrs.Jessics',
      img:require('../../ASSIGNMENT/lessonicons-2.png'),
      button:'check'
    },
    {
      id:'1',
      pages:'75-100',
      Assigneddate:'12.02.2021',
      dueDate:'15.02.2021',
      subjecttitle:'Physic',
      Teachername:'Mrs.Adda',
      img:require('../../ASSIGNMENT/lessonicons-3.png'),
      button:'check'
    },
  ])
  const [data3, setdata3]=useState([
    // this is archive list data
    {
      id:'1',
      img:require('../../ASSIGNMENT/lessonicons.png'),
      pages:'75-100',
      Assigneddate:'12.02.2021',
      dueDate:'15.02.2021',
      subjecttitle:'English',
      Teachername:'Mrs.Brown',
    
      button:'check'
    },
    {
      id:'1',
      pages:'75-100',
      Assigneddate:'12.02.2021',
      dueDate:'15.02.2021',
      subjecttitle:'Chemistry',
      Teachername:'Mrs. Jessica',
      img:require('../../ASSIGNMENT/lessonicons-1.png'),
      button:'check'
    },
    {
      id:'1',
      pages:'75-100',
      Assigneddate:'12.02.2021',
      dueDate:'15.02.2021',
      subjecttitle:'Math',
      Teachername:'Mrs.Jessics',
      img:require('../../ASSIGNMENT/lessonicons-2.png'),
      button:'check'
    },
    {
      id:'1',
      pages:'75-100',
      Assigneddate:'12.02.2021',
      dueDate:'15.02.2021',
      subjecttitle:'Physic',
      Teachername:'Mrs.Adda',
      img:require('../../ASSIGNMENT/lessonicons-3.png'),
      button:'check'
    },
  ])

  // this is render function of Assigned list
  const assigned=({item})=>(

<View style={styles.mainlist}>

  <View style={styles.listview}>

  <View style={{
  
  width:width(27),
  justifyContent:'space-between',
  flexDirection:'row',
  marginLeft:width(2),
  height:height(8),
  alignItems:'center'
  }}
  >

<Image 
style={{
  marginLeft:width(2),
  width:50,
  height:50
}}
source={item.img}/>

<View style={{
height:height(8),
width:width(15),
justifyContent:'center',

  
  
}}>

<Text  style={{
  fontSize:totalSize(1.8)
}}>
  {item.subjecttitle}
  </Text>

<Text style={{
  marginTop:height(0.4),
  color:"#A0ADCF"
}}>
  {item.Teachername}
  </Text>

</View>

</View >

<View style={styles.rightlist}>

  <TouchableOpacity style={{
    justifyContent:'center',
    alignItems:'center'
  }}
  >

  <Image 
  style={{
    marginBottom:height(0.5)
  }}
  source={ai}/>
  <Text>{item.pages}</Text>

  </TouchableOpacity>

  <TouchableOpacity style={{
    justifyContent:'center',
    alignItems:'center'
  }}>

  <Image style={{
    marginBottom:height(0.5)
  }} source={ai1}/>
  <Text
  
  >{item.Assigneddate}</Text>

  </TouchableOpacity>

  <TouchableOpacity style={{
    justifyContent:'center',
    alignItems:'center'
  }}
  >

  <Image style={{
    marginBottom:height(0.5)
  }}
  source={ai2}/>
  <Text>{item.dueDate}</Text>

  </TouchableOpacity>


<TouchableOpacity style={styles.Button}>
<Text  style={{
  color:'#FFFFFF',
  fontSize:totalSize(1)
}} >{item.button}</Text>
</TouchableOpacity>

</View>
  </View>
</View>
  )
    // this is render function of FEedback list
    const feedback=({item})=>(

      <View style={styles.mainlist}>
      
        <View style={styles.listview}>
      
        <View style={{
        
        width:width(27),
        justifyContent:'space-between',
        flexDirection:'row',
        marginLeft:width(2),
        height:height(8),
        alignItems:'center'
        }}
        >
      
      <Image 
      style={{
        marginLeft:width(2),
        width:50,
        height:50
      }}
      source={item.img}/>
      
      <View style={{
      height:height(8),
      width:width(15),
      justifyContent:'center',
      
        
        
      }}>
      
      <Text  style={{
        fontSize:totalSize(1.8)
      }}>
        {item.subjecttitle}
        </Text>
      
      <Text style={{
        marginTop:height(0.4),
        color:"#A0ADCF"
      }}>
        {item.Teachername}
        </Text>
      
      </View>
      
      </View >
     
      <View style={{...styles.rightlist,width:width(55)} }>
      <TouchableOpacity style={{
          justifyContent:'center',
          alignItems:'center'
        }}
        >
        <Image   style={{
          marginBottom:height(0.5)
        }}
        source={DS} />
        <Text>
          {item.marks}
        </Text>
      </TouchableOpacity>
        <TouchableOpacity style={{
          justifyContent:'center',
          alignItems:'center'
        }}
        >
      
        <Image 
        style={{
          marginBottom:height(0.5)
        }}
        source={ai}/>
        <Text>{item.pages}</Text>
      
        </TouchableOpacity>
      
        <TouchableOpacity style={{
          justifyContent:'center',
          alignItems:'center'
        }}>
      
        <Image style={{
          marginBottom:height(0.5)
        }} source={ai1}/>
        <Text
        
        >{item.Assigneddate}</Text>
      
        </TouchableOpacity>
      
        <TouchableOpacity style={{
          justifyContent:'center',
          alignItems:'center'
        }}
        >
      
        <Image style={{
          marginBottom:height(0.5)
        }}
        source={ai2}/>
        <Text>{item.dueDate}</Text>
      
        </TouchableOpacity>
      
      
      <TouchableOpacity style={styles.Button}>
      <Text  style={{
        color:'#FFFFFF',
        fontSize:totalSize(1)
      }} >{item.button}</Text>
      </TouchableOpacity>
      
      </View>
        </View>
      </View>
        )
  // this is overdue render function
  const overdue=({item})=>(

    <View style={styles.mainlist}>
    
      <View style={styles.listview}>
    
      <View style={{
      
      width:width(27),
      justifyContent:'space-between',
      flexDirection:'row',
      marginLeft:width(2),
      height:height(8),
      alignItems:'center'
      }}
      >
    
    <Image 
    style={{
      marginLeft:width(2),
      width:50,
      height:50
    }}
    source={item.img}/>
    
    <View style={{
    height:height(8),
    width:width(15),
    justifyContent:'center',
    
      
      
    }}>
    
    <Text  style={{
      fontSize:totalSize(1.8)
    }}>
      {item.subjecttitle}
      </Text>
    
    <Text style={{
      marginTop:height(0.4),
      color:"#A0ADCF"
    }}>
      {item.Teachername}
      </Text>
    
    </View>
    
    </View >
    
    <View style={styles.rightlist}>
    
      <TouchableOpacity style={{
        justifyContent:'center',
        alignItems:'center'
      }}
      >
    
      <Image 
      style={{
        marginBottom:height(0.5)
      }}
      source={ai}/>
      <Text>{item.pages}</Text>
    
      </TouchableOpacity>
    
      <TouchableOpacity style={{
        justifyContent:'center',
        alignItems:'center'
      }}>
    
      <Image style={{
        marginBottom:height(0.5)
      }} source={ai1}/>
      <Text
      
      >{item.Assigneddate}</Text>
    
      </TouchableOpacity>
    
      <TouchableOpacity style={{
        justifyContent:'center',
        alignItems:'center'
      }}
      >
    
      <Image style={{
        marginBottom:height(0.5)
      }}
      source={ai2}/>
      <Text>{item.dueDate}</Text>
    
      </TouchableOpacity>
    
    
    <TouchableOpacity style={styles.Button}>
    <Text  style={{
      color:'#FFFFFF',
      fontSize:totalSize(1)
    }} >{item.button}</Text>
    </TouchableOpacity>
    
    </View>
      </View>
    </View>
      )
// this is archive render function
  const archive=({item})=>(

    <View style={styles.mainlist}>
    
      <View style={styles.listview}>
    
      <View style={{
      
      width:width(27),
      justifyContent:'space-between',
      flexDirection:'row',
      marginLeft:width(2),
      height:height(8),
      alignItems:'center'
      }}
      >
    
    <Image 
    style={{
      marginLeft:width(2),
      width:50,
      height:50
    }}
    source={item.img}/>
    
    <View style={{
    height:height(8),
    width:width(15),
    justifyContent:'center',
    
      
      
    }}>
    
    <Text  style={{
      fontSize:totalSize(1.8)
    }}>
      {item.subjecttitle}
      </Text>
    
    <Text style={{
      marginTop:height(0.4),
      color:"#A0ADCF"
    }}>
      {item.Teachername}
      </Text>
    
    </View>
    
    </View >
    
    <View style={styles.rightlist}>
    
      <TouchableOpacity style={{
        justifyContent:'center',
        alignItems:'center'
      }}
      >
    
      <Image 
      style={{
        marginBottom:height(0.5)
      }}
      source={ai}/>
      <Text>{item.pages}</Text>
    
      </TouchableOpacity>
    
      <TouchableOpacity style={{
        justifyContent:'center',
        alignItems:'center'
      }}>
    
      <Image style={{
        marginBottom:height(0.5)
      }} source={ai1}/>
      <Text
      
      >{item.Assigneddate}</Text>
    
      </TouchableOpacity>
    
      <TouchableOpacity style={{
        justifyContent:'center',
        alignItems:'center'
      }}
      >
    
      <Image style={{
        marginBottom:height(0.5)
      }}
      source={ai2}/>
      <Text>{item.dueDate}</Text>
    
      </TouchableOpacity>
    
    
    <TouchableOpacity style={styles.Button}>
    <Text  style={{
      color:'#FFFFFF',
      fontSize:totalSize(1)
    }} >{item.button}</Text>
    </TouchableOpacity>
    
    </View>
      </View>
    </View>
      )
      const Selectcategory=()=>{
        if( R===1 ){
          return(
          <View style={{
            marginTop:height(3)
          }}>
          <FlatList
          data={data}
          keyExtractor={(item, index)=>index.toString()}
          renderItem={assigned}
  
          />
  </View>
          )
        }
        else if(R==2){
          return(
            <View style={{
              marginTop:height(3)
            }}>
            <FlatList
            data={data1}
            keyExtractor={(item, index)=>index.toString()}
            renderItem={feedback}
    
            />
    </View>
          )
        }
        else if (R==3){
          return(
            <View style={{
              marginTop:height(3)
            }}>
            <FlatList
            data={data2}
            keyExtractor={(item, index)=>index.toString()}
            renderItem={overdue}
    
            />
    </View>
          )
        }
        
 else if(R==4){
   return(
 <View style={{
  marginTop:height(3)
}}>
<FlatList
data={data3}
keyExtractor={(item, index)=>index.toString()}
renderItem={archive}

/>
</View>
   )
       
      }
    }

    
  return (
    <View style={styles.mainview}>

      <View style={styles.mainactivity}>

        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          width:width(93)
        }}>

        <Text style={{ fontSize: totalSize(2.5) }}>
          Assigments
       </Text>
<Image  style={{
  width:55,
  height:55
}}
  source={profile}/>
       </View>

        <View style={styles.Row}>

        <TouchableOpacity
                      onPress={()=>setR(1)}
                      style={
                        R==1?
                        {height:height(3.8),shadowColor: "#444",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,width:width(14),
                      borderRadius:18,backgroundColor:'#fff',
                      justifyContent:'center',alignItems:'center'
                    }
                        :
                        {height:height(3.8),width:width(14),
                          borderRadius:18,justifyContent:'center',
                          alignItems:'center'
                        }}
                      >

                       <Text style={
                         R==1?
                          {fontSize:totalSize(1.2),color:'#000'}
                         :
                         {fontSize:totalSize(1.1),color:'#A0ADCF'}}>
                         
                        Assigned
                      
                       </Text>

                      </TouchableOpacity>

                      <TouchableOpacity
                      onPress={()=>setR(2)}
                      style={
                        R==2?
                        {height:height(3.8),shadowColor: "#444",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,width:width(14),
                      borderRadius:18,backgroundColor:'#fff',
                      justifyContent:'center',alignItems:'center'
                    }
                        :
                        {height:height(3.8),width:width(14),
                          borderRadius:18,justifyContent:'center',
                          alignItems:'center'
                        }}
                      >

                       <Text style={
                         R==2?
                          {fontSize:totalSize(1.2),color:'#000'}
                         :
                         {fontSize:totalSize(1.1),color:'#A0ADCF'}}>
                         
                         Feedback
                      
                       </Text>

                      </TouchableOpacity>
                      <TouchableOpacity
                      onPress={()=>setR(3)}
                      style={
                        R==3?
                        {height:height(3.8),shadowColor: "#444",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,width:width(14),
                      borderRadius:18,backgroundColor:'#fff',
                      justifyContent:'center',alignItems:'center'
                    }
                        :
                        {height:height(3.8),width:width(14),
                          borderRadius:18,justifyContent:'center',
                          alignItems:'center'
                        }}
                      >

                       <Text style={
                         R==3?
                          {fontSize:totalSize(1.2),color:'#000'}
                         :
                         {fontSize:totalSize(1.1),color:'#A0ADCF'}}>
                         
                        Overdue
                      
                       </Text>

                      </TouchableOpacity>
                      <TouchableOpacity
                      onPress={()=>setR(4)}
                      style={
                        R==4?
                        {height:height(3.8),shadowColor: "#444",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,width:width(14),
                      borderRadius:18,backgroundColor:'#fff',
                      justifyContent:'center',alignItems:'center'
                    }
                        :
                        {height:height(3.8),width:width(14),
                          borderRadius:18,justifyContent:'center',
                          alignItems:'center'
                        }}
                      >

                       <Text style={
                         R==4?
                          {fontSize:totalSize(1.2),color:'#000'}
                         :
                         {fontSize:totalSize(1.1),color:'#A0ADCF'}}>
                         
                         Archive
                      
                       </Text>

                      </TouchableOpacity>
        </View>
        
       
<Selectcategory/>

       
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: "#F5F7FB",

  },
  mainactivity: {
    marginTop: height(10),
    marginLeft: width(3)

  },
  Row: {
    flexDirection: 'row',
    width: width(58),
   //borderWidth:1,
   borderRadius:20,
    justifyContent: 'space-between',
    marginTop: height(4),
    alignItems: 'center',
  
    backgroundColor: '#EBECF2'
  },
  mainlist:{
   marginTop:height(1.5)
  },
  listview:{
    flexDirection:'row',
   borderRadius:22,
    width:width(93),
    justifyContent:'space-between',

    height:height(8), 
    backgroundColor:"#FFFFFF",
  
  },
  marginvew:{
    marginLeft:width(1),
    marginRight:width(1)
  },
  rightlist:{
    flexDirection:'row',
   // borderWidth:1,
    width:width(43),
    justifyContent:'space-between',
    height:height(8),
    alignItems:'center',
    marginRight:width(3)
  },
  Button:{
   // borderWidth:1,
    width:width(13),
    height:height(3.8),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:18,
    backgroundColor:"#5E81F4"
  }
})