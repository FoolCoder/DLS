import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, LayoutAnimation,
ScrollView } from 'react-native'
import { height, totalSize, width } from 'react-native-dimension'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Testprofile1({navigation}) {
  const [select, setselect] = useState(0)

  const [question, setquestion] = useState([
    {
      id: '1',
      stitle:'Biology',
      sdes:'Fundamental of botonics',
      qtype: 'Essay',
      des: 'Write down an essay of 150 words on the topics mentioned below. ',
      flag: false
    },
    {
      id: '2',
      qtype: 'MCQ',
      des: 'In order to formulate a hypothesis, which of the folllowing would be most helpful?',
      flag: false,
      option:{
        option1:'Making a list of many possibble quesses, based on a survay of dorm roommates',
        option2:'Drinking a lot of strong coffee',
        option3:'Going to the library to do some research',
        option4:'All of the above',
        mark:0
      }
    }, {
      id: '3',
      qtype: 'ShortQ',
      des: 'In order to formulate a hypothesis, which of the folllowing would be most helpful? ',
      flag: false,
      option:{
        option1:'Mesha feels',
        option2:'I know this because',
        option3:'She feels this because',
      }
    },
    {
      id: '1',
      qtype: 'Essay',
      des: 'Write down an essay of 150 words on the topics mentioned below. ',
      flag: false
    },
    {
      id: '2',
      qtype: 'MCQ',
      des: 'In order to formulate a hypothesis, which of the folllowing would be most helpful?',
      flag: false,
      option:{
        option1:'Making a list of many possibble quesses, based on a survay of dorm roommates',
        option2:'Drinking a lot of strong coffee',
        option3:'Going to the library to do some research',
        option4:'All of the above',
        mark:0
      }
    }, {
      id: '3',
      qtype: 'ShortQ',
      des: 'In order to formulate a hypothesis which of the following would be most helpful? ',
      flag: false,   
      option:{
        option1:'Mesha feels',
        option2:'I know this because',
        option3:'She feels this because',
      }
    },
    {
      id: '1',
      qtype: 'Essay',
      des: 'Write down an essay of 150 words on the topics mentioned below. ',
      flag: false
    },
    {
      id: '2',
      qtype: 'MCQ',
      des: ' In order to formulate a hypothesis, which of the folllowing would be most helpful?',
      flag: false,
      option:{
        option1:'Making a list of many possibble quesses, based on a survay of dorm roommates',
        option2:'Drinking a lot of strong coffee',
        option3:'Going to the library to do some research',
        option4:'All of the above',
        mark:0
      }
    }, {
      id: '3',
      qtype: 'ShortQ',
      des: 'In order to formulate a hypothesis which of the following would be most helpful? ',
      flag: false,
      option:{
        option1:'Mesha feels',
        option2:'I know this because',
        option3:'She feels this because',
      }
    },
    {
      id: '1',
      qtype: 'Essay',
      des: 'Write down an essay of 150 words on the topics mentioned below. ',
      flag: false
    },
    {
      id: '2',
      qtype: 'MCQ',
      des: 'In order to formulate a hypothesis, which of the folllowing would be most helpful?',
      flag: false,
      option:{
        option1:'Making a list of many possibble quesses, based on a survay of dorm roommates',
        option2:'Drinking a lot of strong coffee',
        option3:'Going to the library to do some research',
        option4:'All of the above',
        mark:0
      }
    }, {
      id: '3',
      qtype: 'ShortQ',
      des: 'In order to formulate a hypothesis, which of the folllowing would be most helpful? ',
      flag: false,
      option:{
        option1:'Mesha feels',
        option2:'I know this because',
        option3:'She feels this because',
      }
    },
    {
      id: '1',
      qtype: 'Essay',
      des: 'Write down an essay of 150 words on the topics mentioned below. ',
      flag: false
    },
    {
      id: '2',
      qtype: 'MCQ',
      des: 'In order to formulate a hypothesis, which of the folllowing would be most helpful?',
      flag: false,
      option:{
        option1:'Making a list of many possibble quesses, based on a survay of dorm roommates',
        option2:'Drinking a lot of strong coffee',
        option3:'Going to the library to do some research',
        option4:'All of the above',
        mark:0
      }
    }, {
      id: '3',
      qtype: 'ShortQ',
      des: 'In order to formulate a hypothesis which of the following would be most helpful? ',
      flag: false,   
      option:{
        option1:'Mesha feels',
        option2:'I know this because',
        option3:'She feels this because',
      }
    },
    {
      id: '1',
      qtype: 'Essay',
      des: 'Write down an essay of 150 words on the topics mentioned below. ',
      flag: false
    },
    {
      id: '2',
      qtype: 'MCQ',
      des: ' In order to formulate a hypothesis, which of the folllowing would be most helpful?',
      flag: false,
      option:{
        option1:'Making a list of many possibble quesses, based on a survay of dorm roommates',
        option2:'Drinking a lot of strong coffee',
        option3:'Going to the library to do some research',
        option4:'All of the above',
        mark:0
      }
    }, {
      id: '3',
      qtype: 'ShortQ',
      des: 'In order to formulate a hypothesis which of the following would be most helpful? ',
      flag: false,
      option:{
        option1:'Mesha feels',
        option2:'I know this because',
        option3:'She feels this because',
      }
    },
    {
      id: '1',
      qtype: 'Essay',
      des: 'Write down an essay of 150 words on the topics mentioned below. ',
      flag: false
    },
    {
      id: '2',
      qtype: 'MCQ',
      des: ' In order to formulate a hypothesis, which of the folllowing would be most helpful?',
      flag: false,
      option:{
        option1:'Making a list of many possibble quesses, based on a survay of dorm roommates',
        option2:'Drinking a lot of strong coffee',
        option3:'Going to the library to do some research',
        option4:'All of the above',
        mark:0
      }
    }, {
      id: '3',
      qtype: 'ShortQ',
      des: 'In order to formulate a hypothesis which of the following would be most helpful? ',
      flag: false,
      option:{
        option1:'Mesha feels',
        option2:'I know this because',
        option3:'She feels this because',
      }
    },

  ])

// return conditional view from function
  
LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
const conditionalview=()=>
{

  
  if(  question[select].qtype=='MCQ' )
  {
  return(
           <View style={{
                 
                  marginTop: height(4),
              }}>
  
  
  
                  <View style={{
  
                      marginTop: height(5),
                      width:width(74),
                      alignSelf:'center',
  
  
                  }}>
  
                      <View style={{
                          marginBottom: height(6)
                      }}>
  
                          <Text  style={{
                      color:'#A0ADCF',
                      fontSize:totalSize(1)
                  }}
                  >
                    Biology
                    
                    </Text>
  
                          <Text  style={{
                      color:'#A0ADCF',
                      fontSize:totalSize(1.2)
                  }}>
                    Fundamental of botonics
                  </Text>
  
                      </View>
  
                      <Text  style={{
                      color:'#A0ADCF',
                      fontSize:totalSize(1.2)
                  }}>
                    Question {select+1}:
                    
                    </Text>
  
                      <Text   
                      
                      style={{
                      fontSize:totalSize(2), 
                      marginTop:height(1)
  
                  }}>
                      {question[select].des}
                           
                           </Text>
  
  
  
                          <TouchableOpacity 
                                                   disabled={question[select].flag}

                          onPress={()=>{
                            
                 question[select].option.mark=1,
                 setquestion([...question])
                        }}
                          
                        
                            style={
                              question[select].option.mark==1 ?
                              {
                              marginTop:height(5),             
                                         borderRadius:15,
                                            height:height(6.5),
                                            justifyContent:'center',
                                        
                                            backgroundColor:'#5E81F4'
                
                                        }
                                        :
                                        {
                                          marginTop:height(5),             
                                                     borderRadius:15,
                                                        height:height(6.5),
                                                        justifyContent:'center',
                                                        backgroundColor:'#FFFFFF'
                            
                                                    }
                          }
                    
                          >
                              <Text style={
                                question[select].option.mark==1 ?
                                {
                                
                                  fontSize:totalSize(1.3),
                                  marginLeft:width(1.5),
                                 
                                  color:'#FFFFFF'
                              }
                              :
                              {
                                
                                fontSize:totalSize(1.3),
                                marginLeft:width(1.5),
                                color:'#000'
                            }
                          }
                              >
                                  {question[select].option.option1}
                               
                               </Text>
  
                          </TouchableOpacity>
  
                          <TouchableOpacity 
                         disabled={question[select].flag}
                          onPress={()=>{
                            question[select].option.mark=2
                            setquestion([...question])
                          }}
                          style={
                            
                            question[select].option.mark==2 ?
                            {
                              marginTop:height(1), 
                              borderRadius:15,
                              height:height(6.5),
                                 justifyContent:'center',
                                 backgroundColor:'#5E81F4'
                            }
                            :
                            {
                              marginTop:height(1), 
                           borderRadius:15,
                           height:height(6.5),
                              justifyContent:'center',
                              backgroundColor:'#FFFFFF'
  
                          }} >
  
                              <Text style={
                                question[select].option.mark==2 ?
                                {
                                  fontSize:totalSize(1.3),
                                  marginLeft:width(1.5),
                                  color:'#FFFFFF'
                                }
                                :
                                {
                                  fontSize:totalSize(1.3),
                                  marginLeft:width(1.5),
                                  color:'#000'
                              }}>
                                {question[select].option.option2}
                              
                              </Text>
                          
                          </TouchableOpacity>
  
                          <TouchableOpacity 
                                                   disabled={question[select].flag}

                          onPress={()=>{
                            question[select].option.mark=3
                            setquestion([...question])
                          }}
                          style={
                            question[select].option.mark==3 ?
                            {
                              marginTop:height(1), 
                              borderRadius:15,
                              height:height(6.5),
                                 justifyContent:'center',
                                 backgroundColor:'#5E81F4'
                            }
                            :
                            {
                            marginTop:height(1), 
                           borderRadius:15,
                           height:height(6.5),
                              justifyContent:'center',
                              backgroundColor:'#FFFFFF'
  
                          }}>
  
                              <Text style={
                                question[select].option.mark==3 ?
                                {
                                  fontSize:totalSize(1.3),
                                  marginLeft:width(1.5),
                                  color:'#FFFFFF'
                                }
                                :
                                {
                                  fontSize:totalSize(1.3),
                                  marginLeft:width(1.5),
                                  color:'#000'
                              }}>
                                  {question[select].option.option3}
                                                          </Text>
  
                          </TouchableOpacity>
  
                          <TouchableOpacity 
                                                   disabled={question[select].flag}

                          onPress={()=>{
                            question[select].option.mark=4
                            setquestion([...question])
                          }}

                          style={
                            question[select].option.mark==4 ?
                            {
                              marginTop:height(1), 
                              borderRadius:15,
                              height:height(6.5),
                                 justifyContent:'center',
                                 backgroundColor:'#5E81F4'
                            }
                      :
                            {
                            marginTop:height(1), 
                           borderRadius:15,
                           height:height(6.5),
                              justifyContent:'center',
                              backgroundColor:'#FFFFFF'
  
                          }}>
  
                              <Text style={
                                question[select].option.mark==4 ?
                                {
                                  fontSize:totalSize(1.3),
                                  marginLeft:width(1.5),
                                  color:'#FFFFFF'
                                }
                                :
                                {
                                  fontSize:totalSize(1.3),
                                  marginLeft:width(1.5),
                                  color:'#000'
                              }}>
                                  {question[select].option.option4}
                                                        </Text>
  
                          </TouchableOpacity>
                          </View>
                         </View>
                          )
                            }
//this second screen
else if(  question[select].qtype=='ShortQ')


{
  return(
  <View style={{
            marginTop: height(4),


        }}>
            <View style={{

                marginTop: height(5),
                width: width(74),
                alignSelf: 'center',


            }}>

                <View style={{
                    marginBottom: height(6)
                }}>

                    <Text style={{
                        color: '#A0ADCF',
                        fontSize: totalSize(1)
                    }}>Biology</Text>

                    <Text style={{
                        color: '#A0ADCF',
                        fontSize: totalSize(1.2)
                    }}>Fundamental of botonics</Text>

                </View>

                <Text style={{
                    color: '#A0ADCF',
                    fontSize: totalSize(1.2)
                }}>Question {select+1}:</Text>

                <Text style={{
                    fontSize: totalSize(2),
                    marginTop: height(1)

                }}>
                    {question[select].des}
                 </Text>
                <View style={{
                    marginTop: height(5),
                    flexDirection: 'row',

                    justifyContent: 'space-between'
                }}>
                    <Text style={{
                        fontSize: totalSize(1.2),
                     
                        width:width(18.5)
                    }}>
                       {question[select].option.option1}
                     </Text>

                    <TextInput
                        placeholder="   Write your answer"
                        multiline
                        editable={!question[select].flag}
                        style={{
fontSize:totalSize(1.2),
                            height: height(13),
                            width: width(55),
                            borderRadius: 15,
                            backgroundColor: '#FFFFFF'
                        }}

                    />

                </View>
                <View style={{
                    marginTop: height(1),
                    flexDirection: 'row',

                    justifyContent: 'space-between'
                }}>
                    <Text style={{
                        fontSize: totalSize(1.2),
                      
                        width:width(18)
                    }}>
                        {question[select].option.option2}
                     </Text>
                    <TextInput placeholder="  Write your answer"
                        multiline
                        editable={!question[select].flag}
                        style={{
                          fontSize:totalSize(1.2),
                            height: height(13),
                            width: width(55),
                            borderRadius: 15,
                            backgroundColor: '#FFFFFF'
                        }}

                    />
                </View>
                <View style={{
                    marginTop: height(1),
                    flexDirection: 'row',

                    justifyContent: 'space-between'
                }}>
                    <Text style={{
                        fontSize: totalSize(1.2),
                       
                        width:width(18.5)
                    }}>
                      {question[select].option.option3}
                     </Text>
                    <TextInput placeholder="  Write your answer"
                        multiline
                        editable={!question[select].flag}
                        style={{
                          fontSize:totalSize(1.2),
                            height: height(13),
                            width: width(55),
                            borderRadius: 15,
                            backgroundColor: '#FFFFFF'
                        }}

                    />
                </View>
            </View>
      </View>
   
  )
}

 if(question[select].qtype='Essay')
{
  return(

  <View style={{
    marginTop: height(4),


  }}>

  
    <View style={{

      marginTop: height(5),
      width: width(74),
      alignSelf: 'center',


    }}>

      <View style={{
        marginBottom: height(6)
      }}>

        <Text style={{
          color: '#A0ADCF',
          fontSize: totalSize(1)
        }}>Biology</Text>

        <Text style={{
          color: '#A0ADCF',
          fontSize: totalSize(1.2)
        }}>Fundamental of botonics</Text>

      </View>

      <Text style={{
        color: '#A0ADCF',
        fontSize: totalSize(1.2)
      }}>Question {select+1}:</Text>

      <Text style={{
        fontSize: totalSize(2),
        marginTop: height(1)

      }}>
        {question[select].des}
         </Text>
      <TextInput
        placeholder="  Write an essay"
        multiline
      
        editable={!question[select].flag}
        style={{
          fontSize:totalSize(1.2),
          marginTop: height(4),
          width: width(74),
          height: height(42),
          backgroundColor: '#FFFFFF', borderRadius: 8
        }}

      />
      
     
    </View>
    
</View>
)
}
}
                          

  return (
<View style={{
  backgroundColor: '#f5f7fb',
  flex:1,
  borderWidth:1
}}>

  
<View style={{ marginTop: height(3), width: width(95),flexDirection:'row',justifyContent:'space-between',alignItems:'center', alignSelf: 'center' }}>

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

<TouchableOpacity
  onPress={() => navigation.navigate('testresult')}
  style={{ width: width(10), flexDirection: 'row', alignItems: 'center' }}
>


  <Text style={{ fontSize: totalSize(1.1), marginLeft: width(1), color: '#5e81f4', fontWeight: 'bold' }}>

    Finish

       </Text>

</TouchableOpacity>

</View>                 

{conditionalview()}


<TouchableOpacity 
    
       onPress={() =>{
         question[select].flag=!question[select].flag,
         setquestion([...question])
       }}
style={{
borderRadius:16,
 alignSelf:'flex-end',
 justifyContent:'center',
 alignItems:'center',
  width:width(8),
  height:height(3.2),
marginTop:height(2),
marginRight:width(13),
backgroundColor:'#5E81F4',

}}
>
  {
    question[select].flag==true ?
    <Text style={{
      color:"#FFFFFF",
      fontSize:totalSize(1.1)
    }}>
      Edit
    </Text>
    :
    <Text style={{
      color:"#FFFFFF",
      fontSize:totalSize(1.1)
    }}>
      Done
    </Text>
  }
</TouchableOpacity>
  
<View   style={{
          flexDirection:'row',
            width:width(74),
       marginTop:height(2),
           justifyContent:'space-between',
            alignSelf:'center',
         
          }}>

    {/* start map here */}
      <ScrollView
       style={{
            flexDirection: 'row',

     height:height(4.5),
     flexGrow:0,
     width:width(50)
            //  justifyContent:'space-between'
          }}
          horizontal
          //showsHorizontalScrollIndicator={false}
      
          >
          
            {
              question.map((e, i) => {
                return (
                  <View style={{
height:height(3),

                  }}>
                  <TouchableOpacity
                    key={i}
                    onPress={() => {
                      // question[i].flag = !question[i].flag
                      // setquestion([...question])
                      setselect(i)
                    }}
                    style={
                      e.flag == true ?
                        {
                          backgroundColor: '#A0ADCF',
                          marginHorizontal: width(0.8),
                          borderRadius: 5,
                          width: 30,
                          height: 30,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }
                        :
                        
                        {
                          marginHorizontal: width(0.8),
                          borderRadius: 5,
                          width: 30,
                          height: 30,
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: '#5E81F4'
                        }
                    }>

                    <Text style={{
                      color: '#fff'
                    }}>{i + 1}</Text>

                  </TouchableOpacity>
                  {
                    i==select?
                    <View style={{
                      height:height(0.5),
                      width:30,
                      marginTop:height(0.5),
                      borderRadius:15,
                      backgroundColor:'#5E81F4',
                      alignSelf:'center'
                    }}
                    key={i+1} />
                    :
                    null
                  }
              
                  </View>
                )
              })
            }
          </ScrollView>
          {/* {/* end here */}
        <View style={{
            flexDirection:'row',
        
            width:width(15),
       height:height(4),
      
       justifyContent:'flex-end'
        }}>
          <TouchableOpacity onPress={()=>{
            setselect(select-1)
          }}
                  style={{
                    backgroundColor: '#5E81F4',
                    marginHorizontal: width(0.8),
                    borderRadius: 9,
                    width: 35,
                    height: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  >
<MaterialIcons
    name='arrow-back-ios'
    size={20}
    color='#fff'
    style={{marginLeft:width(0.8)}}
  />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{
            setselect(select+1)
          }}
                  style={{
                    backgroundColor: '#5E81F4',
                    marginHorizontal: width(0.8),
                    borderRadius: 9,
                    width: 35,
                    height: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  >
<MaterialIcons
    name='arrow-forward-ios'
    size={20}
    color='#fff'
    style={{marginLeft:width(0.2)}}
  />
                  </TouchableOpacity>
                  </View>
                  </View>
</View> 
 )
}