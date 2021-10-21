import React, { useState } from 'react'
import { View, Text, Image, SafeAreaView, TouchableOpacity,FlatList,LayoutAnimation ,StyleSheet,Alert,Modal,TextInput} from 'react-native'
import { height, width, totalSize } from 'react-native-dimension'


import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


import Swipeable from 'react-native-swipeable-patched'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment-timezone'

import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import TimeTableView, { genTimeBlock,addColor } from 'react-native-timetable';

import ButtomMain from '../ButtomMain/ButtomMain'

import { styles } from '../styles/styles'

import sun from '../../assets/sun.png'
import assignment from '../../assets/assignment.png'
import assignments from '../../assets/assignments.png'
import steps from '../../assets/steps.png'
import quiz from '../../assets/quiz.png'
import page from '../../assets/page.png'
import pic from '../../assets/pic.png'
import BookMain from '../../assets/BookMain.png'
import teacher from '../../assets/teacherAvatar.png'
import math from '../../assets/math.png'
import english from '../../assets/english.png'
import biology from '../../assets/biology.png'
import breakpic from '../../assets/break.png'
import visualart from '../../assets/visualarts.png'
import finnish from '../../assets/finnish.png'
import sport from '../../assets/sport.png'
import physics from '../../assets/physics.png'


const Weekly = [
  {
    title: "Math",
    startTime: genTimeBlock("MON", 9),
    endTime: genTimeBlock("MON", 11),
    location: "Assignment",
    extra_descriptions: ["9:00", "- 10:30"],
  },
  {
    title: "Math",
    startTime: genTimeBlock("MON", 13),
    endTime: genTimeBlock("MON", 15),
    location: "Assignment",
    extra_descriptions: ["9:00", "- 10:30"],
  },
  {
  title: "Math",
  startTime: genTimeBlock("MON", 15),
  endTime: genTimeBlock("MON", 17),
  location: "Quiz",
  extra_descriptions: ["9:00", "- 10:30"],
  },
  {
    title: "Math",
    startTime: genTimeBlock("WED", 9),
    endTime: genTimeBlock("WED", 11),
    location: "Assignment",
    extra_descriptions: ["9:00", "- 10:30"],
  },
  {
    title: "Physics",
    startTime: genTimeBlock("MON", 11),
    endTime: genTimeBlock("MON", 12),
    location: "Quiz",
    extra_descriptions: ["9:00", "- 10:30"],
  },
  {
    title: "Physics",
    startTime: genTimeBlock("WED", 11),
    endTime: genTimeBlock("WED", 12),
    location: "Groupwork",
    extra_descriptions: ["9:00", "- 10:30"],
  },
  {
    title: "Biology",
    startTime: genTimeBlock("TUE", 9),
    endTime: genTimeBlock("TUE", 11),
    location: "Quiz",
    extra_descriptions: ["9:00", "- 10:30"],
  },
  {
    title: "Finnish",
    startTime: genTimeBlock("FRI", 9),
    endTime: genTimeBlock("FRI", 11),
    location: "Groupwork",
    extra_descriptions: ["9:00", "- 10:30"],
  },
  {
    title: "Finnish",
    startTime: genTimeBlock("THU", 9),
    endTime: genTimeBlock("THU", 11),
    location: "Groupwork",
    extra_descriptions: ["9:00", "- 10:30"],
  },
  {
    title: "Chemistry",
    startTime: genTimeBlock("FRI", 13, 30),
    endTime: genTimeBlock("FRI", 14, 50),
    location: "Groupwork",
    extra_descriptions: ["9:00", "- 10:30"],
  },
];

const Timetable = [
  {
    title: "Math",
    startTime: genTimeBlock("MON", 9),
    endTime: genTimeBlock("MON", 10),
    Image:math
  },
  {
    title: "Math",
    startTime: genTimeBlock("MON", 13),
    endTime: genTimeBlock("MON", 15),
    Image:math
  },
  {
  title: "Math",
  startTime: genTimeBlock("MON", 15),
  endTime: genTimeBlock("MON", 17),
  Image:math
  },
  {
    title: "Math",
    startTime: genTimeBlock("WED", 10),
    endTime: genTimeBlock("WED", 11),
    Image:math
  },
  {
    title: "Physics",
    startTime: genTimeBlock("MON", 11),
    endTime: genTimeBlock("MON", 12),
    Image:physics
  },
  {
    title: "Physics",
    startTime: genTimeBlock("WED", 12),
    endTime: genTimeBlock("WED", 13),
    Image:physics
  },
  {
    title: "Biology",
    startTime: genTimeBlock("TUE", 12),
    endTime: genTimeBlock("TUE", 13),
    Image:physics
  },
  {
    title: "Finnish",
    startTime: genTimeBlock("FRI", 11),
    endTime: genTimeBlock("FRI", 12),
    Image:finnish
  },
  {
    title: "Finnish",
    startTime: genTimeBlock("THU", 9),
    endTime: genTimeBlock("THU", 11),
    Image:finnish
  },
  {
    title: "sports",
    startTime: genTimeBlock("FRI", 13, 30),
    endTime: genTimeBlock("FRI", 15),
    Image:sport
  },
];

const MonthlyTask=
{
  '2021-03-02':{marked:true,dotColor:'#ff5e55',type:'Groupwork',course:'Biology'},
  '2021-03-05':{marked:true,dotColor:'#ffae33',type:'Quiz',course:'Finnish'},
  '2021-03-10':{marked:true,dotColor:'#0cc3e7',type:'Assignment',course:'Math'},
  '2021-03-08':{marked:true,dotColor:'#ffae33',type:'Quiz',course:'Physics'},
  '2021-03-15':{marked:true,dotColor:'#ff5e55',type:'Groupwork',course:'English'},
  '2021-03-04':{marked:true,dotColor:'#0cc3e7',type:'Assignment',course:'Biology'},
  '2021-03-04':{marked:true,dotColor:'#0cc3e7',type:'Assignment',course:'art'}
}

export default function Home({ navigation, route }) {
  const [NN,setNN]=useState(1)
  const [CalendarType,setCalendarType]=useState(1)
  const [NNprogress,setNNprogress]=useState([{data:[]},{data:[{title:'Physics',title2:'Study to additional material for exam.',time:'24 nov'},
   {title:'Finnish',title2:'Memorize the new words that we learned in todays class',time:'24 nov'},{title:'Science group work',title2:'Lorem ipsam dolor sit amet concacteter adipiscing elit',time:'24 nov'},
   {title:'Physics',title2:'Study to additional material for exam.',time:'24 nov'},
   {title:'Finnish',title2:'Memorize the new words that we learned in todays class',time:'24 nov'},{title:'Science group work',title2:'Lorem ipsam dolor sit amet concacteter adipiscing elit',time:'24 nov'}]}
  ,{data:[{title:'From teacher',title2:'Math assignment shoud be finished',title3:'Go to assignment',time:'24 nov'},
  {title:'Science group work',title3:'Go to group work',time:'24 nov'},{title:'Teacher shared a resource',title3:'check it out',time:'24 nov'},
  {title:'From teacher',title2:'Math assignment shoud be finished',title3:'Go to assignment',time:'24 nov'},
  {title:'Science group work',title3:'Go to group work',time:'24 nov'},{title:'Teacher shared a resource',title3:'check it out',time:'24 nov'}]}])

  const [EventDetails,setEventDetail]=useState([{title:'Math - Quiz',Detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',Book:'Book of',pages:'Page 11-15',timing:'01 Mon 10:24',teacher:'Mr. Brown'},
  {title:'Math - Quiz',Detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',Book:'Book of',pages:'Page 11-15',timing:'01 Mon 10:24',teacher:'Mr. Brown'},
  {title:'Math - Quiz',Detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',Book:'Book of',pages:'Page 11-15',timing:'01 Mon 10:24',teacher:'Mr. Brown'},
  {title:'Math - Quiz',Detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',Book:'Book of',pages:'Page 11-15',timing:'01 Mon 10:24',teacher:'Mr. Brown'},
  {title:'Math - Quiz',Detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',Book:'Book of',pages:'Page 11-15',timing:'01 Mon 10:24',teacher:'Mr. Brown'}])
  
  const numOfDays = 5;
  const pivotDate = genTimeBlock('mon');

  const [EditModal,setEditModal]=useState(false)
  const [MessageModal,setMessageModal]=useState(false)
  const [LogoutModal,setLogoutModal]=useState(false)
  const [MessageText,setMessageText]=useState('')
  const [EditData,setEditData]=useState('')
  const [IndexEdit,setIndexEdit]=useState(0)
  const [DeleteCheck,setDeleteCheck]=useState(false)
  const [IndexDelete,setIndexDelete]=useState(0)

  const [EventDetailsModal,setEventDetailModal]=useState(false)

  const [ANROEveModal,setANROEveModal]=useState(false)
  const [ANROEve,setANROEve]=useState(1)

  const [date, setDate] = useState(new Date());
  const [time,setTime]=useState(new Date())

  LocaleConfig.locales['en'] = {
    formatAccessibilityLabel: "dddd d 'of' MMMM 'of' yyyy",
    monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    monthNamesShort: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'],
  };
  
  LocaleConfig.defaultLocale = 'en';


    const scrollViewRef = (ref) => {
        timetableRef = ref;
    };

    const onEventPress = (evt) => {
        Alert.alert("onEventPress", JSON.stringify(evt));
    };

  const SelectedCalendar=(num)=>{
    if(num==1)
    {
      return(
        <View style={{height:height(40),width:width(80),marginTop:height(2),alignSelf:'center'}}>
       
            <TimeTableView style={{ backgroundColor: "#fff" }}
             scrollViewRef={scrollViewRef}
             events={Timetable}
             pivotTime={9}
             pivotEndTime={18}
             pivotDate={pivotDate}
             numberOfDays={numOfDays}
             onEventPress={onEventPress}
             headerStyle={styleWeek.headerStyle}
             formatDateHeader="dddd"

                // locale="ur"
            />

        </View>
      )
    }
    else if(num==2)
    {
      return(

        <View style={{height:height(40),width:width(80),marginTop:height(2),alignSelf:'center'}}>
        
           <TimeTableView style={{ backgroundColor: "#fff" }}
             scrollViewRef={scrollViewRef}
             events={Weekly}
             pivotTime={9}
             pivotEndTime={18}
             pivotDate={pivotDate}
             numberOfDays={numOfDays}
             onEventPress={onEventPress}
             headerStyle={styleWeek.headerStyle}
             formatDateHeader="dddd"

                // locale="ur"
            />

       </View>
      )
    }
    else {
      return(
        <Calendar
        style={{marginTop:height(2),width:width(80),alignSelf:'center'}}
        theme={{
          textDayHeaderFontSize:totalSize(1),
          // textSectionTitleColor:'#000',
          textDayFontSize:totalSize(1),
          height:height(4.5),
          borderWidth:1,borderColor:'#eee',
          todayTextColor:'#5e81f4',
          textMonthFontSize:totalSize(1),
          textMonthFontWeight:'bold',
          dotStyle:{height:10,width:10,marginTop:height(0.5),borderRadius:5}
        }}
        current={new Date().toLocaleDateString()}
        // onDayPress={(e)=>setEventDetailModal(true)}
        markedDates={MonthlyTask}
         />

      )
    }
  }

  const _NNFlatlist=({item,index})=>{
    return(
      <Swipeable 
      leftButtonWidth={width(60)}
      leftButtons={[
      <TouchableOpacity 
      onPress={()=>{
        setEditData(item)
        setIndexEdit(index)
        setEditModal(true)
      }}
      style={{flex:1,backgroundColor:'#4a4a68',justifyContent:'center'}}>

        <View style={{width:width(57),alignSelf:'center',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

           <Text style={{fontSize:totalSize(1),color:'#fff'}}>
             Tap to Edit
           </Text>
           
           <AntDesign name='edit' size={20} color='#fff' />

        </View>

      </TouchableOpacity>]}
      rightButtonWidth={width(60)}
      rightButtons={[
      <TouchableOpacity 
      onPress={()=>{
        setMessageText('Do you want to delete this note?')
        setIndexDelete(index)
        setMessageModal(true)
        setDeleteCheck(true)
      }}
      style={{flex:1,backgroundColor:'#ff5e55',justifyContent:'center'}
      }>

        <View style={{width:width(57),alignSelf:'center',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

           <AntDesign name='delete' size={20} color='#fff' />

           <Text style={{fontSize:totalSize(1),color:'#fff',alignSelf:'flex-end'}}>
             Tap to Delete
           </Text>

        </View>

      </TouchableOpacity>]}
      >

      <View style={{maxHeight:height(10),width:width(60),marginTop:height(1)}}>

        <View style={{flexDirection:'row',justifyContent:'space-between'}}>

          <Text style={{fontSize:totalSize(1)}}>

            {item.title}

          </Text>

          <Text style={{fontSize:totalSize(0.8)}}>

            {item.time}

          </Text>

          </View>

          {item.title2?

          <Text
          numberOfLines={2}
          style={{fontSize:totalSize(0.8)}}>

            {item.title2}

          </Text>

          :null}

          {item.title3?

          <TouchableOpacity>

            <Text 
            numberOfLines={2}
            style={{fontSize:totalSize(0.8),color:'#5E81F4'}}>

            {item.title3}

            </Text>

          </TouchableOpacity>

          :null}

          <View style={{height:height(0.1),marginTop:height(1),borderWidth:0.3,borderColor:'#F2F6FA'}} />

      </View>

      </Swipeable>
    )
  }

  const EventDetailsDesign=({item,index})=>{
    return(
      <View style={{width:width(40),marginVertical:height(1.5),alignSelf:'center'}}>

        <Text style={{fontSize:totalSize(1),fontFamily:'Poppins-Bold'}}>

          {item.title}

        </Text>

        <Text
        numberOfLines={2}
        style={{fontSize:totalSize(0.8),marginTop:height(1)}}>

          {item.Detail}

        </Text>

        <View style={{marginTop:height(1),flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

          <View style={{width:width(15),flexDirection:'row',alignItems:'center'}}>

            <Image 
            source={BookMain}
            style={{height:20,width:20}}
            />

            <Text style={{fontSize:totalSize(1),marginLeft:width(1)}}>
              {item.Book}
            </Text>

          </View>

          <View style={{width:width(15),flexDirection:'row',alignItems:'center'}}>

            <Image 
            source={page}
            style={{height:20,width:20}}
            />

            <Text style={{fontSize:totalSize(1),marginLeft:width(1)}}>
              {item.pages}
            </Text>

          </View>

        </View>

        <View style={{marginTop:height(1),flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

          <View style={{width:width(15),flexDirection:'row',alignItems:'center'}}>

            <Image 
            source={BookMain}
            style={{height:20,width:20}}
            />

            <Text style={{fontSize:totalSize(1),marginLeft:width(1)}}>
              {item.timing}
            </Text>

          </View>

          <View style={{width:width(15),flexDirection:'row',alignItems:'center'}}>

            <Image 
            source={teacher}
            style={{height:20,width:20}}
            />

            <Text style={{fontSize:totalSize(1),marginLeft:width(1)}}>
              {item.teacher}
            </Text>

          </View>

        </View>
        
      </View>
    )
  }

  // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)

  return (
    <View style={styles.mainView}>

      <View style={styles.mainActivityView}>

        <View style={{ marginTop: height(4), width: width(90), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

          <View>

            <Text style={{ fontSize: totalSize(2), fontWeight: 'bold' }}>

              Hello Annie,

            </Text>

            <View style={{ width: width(30), marginTop: height(1), flexDirection: 'row', alignItems: 'center' }}>

              <Image
                source={sun}
                style={{ height: 20, width: 20 }} />

              <Text style={{ fontSize: totalSize(1), marginLeft: width(1), color: '#B5B5C4' }}>

                Today weather is sunny

              </Text>

            </View>

            <View style={{ width: width(30), flexDirection: 'row', alignItems: 'center' }}>

              <Image
                source={steps}
                style={{ height: 20, width: 20 }} />
              <Text style={{ fontSize: totalSize(1), marginLeft: width(1), color: '#B5B5C4' }}>

                You took 2356 steps!

              </Text>

            </View>

          </View>

          <View style={{ width: width(32), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

            <View style={{ width: width(25), flexDirection: 'row', alignItems: 'center' }}>

              <Text style={{ fontSize: totalSize(1) }}>

                Live class in

              </Text>

              <View style={{
                height: height(3), shadowColor: "#444",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84, width: width(10), marginLeft: width(2), borderRadius: 10, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'
              }}>

                <Text style={{ fontSize: totalSize(1) }}>

                  45:23

                </Text>

              </View>

            </View>

            <Image
              source={pic}
              style={{ height: 50, width: 50, borderRadius: 25 }}
            />

          </View>

        </View>

        <View style={{ width: width(95), marginTop: height(2.5), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

          <View style={{
            height: height(28), shadowColor: "#444",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84, width: width(65), borderRadius: 20, backgroundColor: '#fff'
          }}>

              <View style={{width:width(60),marginTop:height(2),alignSelf:'center'}}>

                <View style={{width:width(60),flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

                   <View style={{width:width(24),flexDirection:'row',alignItems:'center',borderRadius:10,backgroundColor:'#EEF2FF'}}>

                      <TouchableOpacity
                      onPress={()=>setNN(1)}
                      style={
                        NN==1?
                        {height:height(2),shadowColor: "#444",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,width:width(12),borderRadius:10,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}
                        :
                        {height:height(2),width:width(12),borderRadius:10,justifyContent:'center',alignItems:'center'}}
                      >

                       <Text style={
                         NN==1?
                          {fontSize:totalSize(0.8),color:'#000'}
                         :
                         {fontSize:totalSize(0.8),color:'#B5B5C4'}}>
                         
                          Notes
                      
                       </Text>

                      </TouchableOpacity>

                      <TouchableOpacity
                      onPress={()=>setNN(2)}
                      style={
                        NN==2?
                        {height:height(2),shadowColor: "#444",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,width:width(12),borderRadius:10,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}
                    :
                    {height:height(2),width:width(12),borderRadius:10,justifyContent:'center',alignItems:'center'}
                    }
                      >

                       <Text style={
                         NN==2?
                         {fontSize:totalSize(0.8),color:'#000'}
                         :
                         {fontSize:totalSize(0.8),color:'#B5B5C4'}}>
                      
                         Notification
                      
                       </Text>

                     </TouchableOpacity>

                   </View>

                   {NN==1?

                   <TouchableOpacity
                  //  onPress={()=>setEditModal(true)}
                   >

                    <SimpleLineIcons name='pencil' size={20} color='#000'  />

                   </TouchableOpacity>

                   :null}


                </View>

                <View style={{justifyContent:'flex-end'}}>

                <FlatList
                style={{height:height(23),marginTop:height(1)}}
                data={NNprogress[NN].data}
                keyExtractor={(item,index)=>{return index.toString()}}
                renderItem={_NNFlatlist}
                />

                <View style={{height:height(2),width:width(37),backgroundColor:'#ffffff90',position:'absolute'}} />

                </View>

              </View>

          </View>
          
          <View style={{
          height: height(28), width: width(27.5), borderRadius: 20, backgroundColor: '#ee844450', alignSelf: 'center'
          }}>

          <Image
          source={assignments}
          style={{height:100,width:100,borderRadius:50,alignSelf:'center',marginTop:height(3),}}
          />

          <Text style={{fontSize:totalSize(1.4),marginTop:height(3),alignSelf:'center',fontFamily:'Poppins-SemiBold'}}>
            Assignments
          </Text>

          <Text style={{fontSize:totalSize(1),alignSelf:'center',fontFamily:'Poppins-Medium'}}>
            3 assignment
          </Text>

          <TouchableOpacity 
          style={{height:height(4),shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          
          elevation: 5,width:width(22.5),marginTop:height(4),alignSelf:'center',borderRadius:50,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}
          >

           <Text style={{fontSize:totalSize(1.2),alignSelf:'center',fontFamily:'Poppins-Medium'}}>
            View All
          </Text>

          </TouchableOpacity>
          
        </View>

        </View>

        
        <View style={{
          height: height(47), shadowColor: "#444",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84, width: width(95), borderRadius: 20, backgroundColor: '#fff', alignSelf: 'center', marginTop: height(2)
        }}>

          <View style={{width:width(85),marginTop:height(2),alignSelf:'center',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

           <View style={{width:width(27),flexDirection:'row',alignItems:'center',borderRadius:10,backgroundColor:'#EEF2FF'}}>

                <TouchableOpacity
                 onPress={() => {
                   setCalendarType(1)
                 }}
                 style={
                   CalendarType == 1 ?
                   {height:height(2),shadowColor: "#444",
                   shadowOffset: {
                     width: 0,
                     height: 2,
                   },
                   shadowOpacity: 0.25,
                   shadowRadius: 3.84,width:width(9),borderRadius:10,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}
                 :
                 {height:height(2),width:width(9),borderRadius:10,justifyContent:'center',alignItems:'center'}}
               >

                    <Text style={
                   CalendarType == 1 ?
                   {fontSize:totalSize(0.8),color:'#000'}
                :
                   {fontSize:totalSize(0.8),color:'#B5B5C4'}}>

                   Timetable

                 </Text>

               </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setCalendarType(2)
                }}
                style={
                  CalendarType == 2 ?
                  {height:height(2),shadowColor: "#444",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,width:width(9),borderRadius:10,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}
                :
                {height:height(2),width:width(9),borderRadius:10,justifyContent:'center',alignItems:'center'}}
              >

               <Text style={
                 CalendarType == 2 ?
                 {fontSize:totalSize(0.8),color:'#000'}
                 :
                 {fontSize:totalSize(0.8),color:'#B5B5C4'}}>

                 Weekly

                 </Text>

               </TouchableOpacity>

               <TouchableOpacity
                onPress={() => {
                  setCalendarType(3)
                }}
                style={
                  CalendarType == 3 ?
                  {height:height(2),shadowColor: "#444",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,width:width(9),borderRadius:10,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}
                :
                {height:height(2),width:width(9),borderRadius:10,justifyContent:'center',alignItems:'center'}}
              >

               <Text style={
                 CalendarType == 3 ?
                 {fontSize:totalSize(0.8),color:'#000'}
                 :
                 {fontSize:totalSize(0.8),color:'#B5B5C4'}}>

                 Monthly

                 </Text>

               </TouchableOpacity>

           </View>

           <TouchableOpacity
           onPress={()=>setANROEveModal(true)}
           style={{height:30,width:30,borderRadius:10,backgroundColor:'#5e81f4',justifyContent:'center',alignItems:'center'}}
           >

             <MaterialIcons name='add' size={20} color='#fff' />

           </TouchableOpacity>

          </View>

           {SelectedCalendar(CalendarType)}

        </View>

        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>

          <ButtomMain
          home={()=>navigation.navigate('home')}
          book={()=>navigation.navigate('bookScreen')}
          notebook={()=>navigation.navigate('notebook')}
          assigmentscreen={()=>navigation.navigate('assigmentscreen')}
          />

        </View>

        <Modal
          animationType='fade'
          transparent={true}
          visible={EditModal}
        >
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }}>

            <View style={{ height: height(22), width: width(40), justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: 20 }}>

              <View style={{height:height(13),width:width(38)}}>

                <View style={{width:width(37),alignSelf:'flex-end',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

                  <Text style={{fontSize:totalSize(1)}}>
                    {EditData.title}
                  </Text>

                  <TouchableOpacity
                  onPress={()=>setEditModal(false)}
                  >
                    <FontAwesome name='close' size={20} color='#aaa' />
                  </TouchableOpacity>

                </View>

                <TextInput
                multiline={true}
                // value={EditData.title2}
                defaultValue={EditData.title2}
                onChangeText={(text)=>{
                  console.log(text)
                  let data=EditData
                  data.title2=text
                  setEditData(data)
                }}
                style={{height:height(10),marginTop:height(1),padding:20,borderRadius:15,backgroundColor:'#f4f7fa'}}
                />

              </View>

              <TouchableOpacity
                onPress={() => { 
                  let data=NNprogress
                  data[NN].data[IndexEdit]=EditData
                  setNNprogress(data)
                  setEditModal(false) 
                }}
                style={{ height: height(4), width: width(16), marginTop: height(2), justifyContent: 'center', alignItems: 'center', backgroundColor: '#5e81f4', borderRadius: 20 }}
              >

                <Text style={{ fontSize: totalSize(1.3), color: '#fff' }}>
                  Save
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        </Modal>

        <Modal
          animationType='fade'
          transparent={true}
          visible={MessageModal}
        >
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }}>

            <View style={{ height: height(12), width: width(35), justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: 20 }}>

              <Text style={{ fontSize: totalSize(1) }}>

                {MessageText}

              </Text>

              {LogoutModal==false?

              <TouchableOpacity
                onPress={() => { 
                  if(DeleteCheck==true)
                  {
                    let nn=NNprogress
                    let Idelete = nn.map((e,i)=>{
                        return {data: e.data.filter((e,i)=>{
                        return i!==IndexDelete
                      })}
                    })
                    setNNprogress(Idelete)
                    setMessageModal(false)
                    setDeleteCheck(false)
                  }
                  else{
                  setMessageModal(false) 
                  }
                }}
                style={{ height: height(4), width: width(16), marginTop: height(2), justifyContent: 'center', alignItems: 'center', backgroundColor: '#5e81f4', borderRadius: 20 }}
              >
                
                {DeleteCheck==true?
                <Text style={{ fontSize: totalSize(1.3), color: '#fff' }}>
                Yes
                </Text>
                :
                <Text style={{ fontSize: totalSize(1.3), color: '#fff' }}>
                  Ok
                </Text>
                }

              </TouchableOpacity>

              :

              <View style={{flexDirection:'row'}}>

              <TouchableOpacity
                onPress={() => { setMessageModal(false) }}
                style={{ height: height(4), width: width(16), marginTop: height(2), justifyContent: 'center', alignItems: 'center', backgroundColor: '#5e81f4', borderRadius: 20 }}
              >

                <Text style={{ fontSize: totalSize(1.3), color: '#fff' }}>
                  No
                </Text>

              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => { setMessageModal(false) }}
                style={{ height: height(4), width: width(16), marginTop: height(2), justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: 20 }}
              >

                <Text style={{ fontSize: totalSize(1.3), color: '#5e81f4' }}>
                  Logout
                </Text>

              </TouchableOpacity>

              </View>

             }

            </View>

          </View>

        </Modal>


        <Modal
          animationType='fade'
          transparent={true}
          visible={EventDetailsModal}
        >
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }}>

            <View style={{ height: height(20), width: width(45), justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: 20 }}>

              <View style={{width:width(40),marginTop:height(1),alignSelf:'center',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

              <Text style={{ fontSize: totalSize(1) }}>

                Event Details

              </Text>

              <TouchableOpacity
              onPress={()=>setEventDetailModal(false)}
              style={{height:30,width:30,borderRadius:15,backgroundColor:'#5e81f4',justifyContent:'center',alignItems:'center'}}
              >

                <Text style={{ fontSize: totalSize(1) ,color:'#fff'}}>

                  x

                </Text>

              </TouchableOpacity>

              </View>

              <FlatList
              data={EventDetails}
              keyExtractor={(item,index)=>{return index.toString()}}
              renderItem={EventDetailsDesign}
              />

             

            </View>

          </View>

        </Modal>


        <Modal
          animationType='fade'
          transparent={true}
          visible={ANROEveModal}
        >
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }}>

            <View style={
              ANROEve==1
              ?
              { height:height(55), width: width(85), justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: 20 }
              :
              { height:height(60), width: width(85), justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: 20 }
              }>

              <View style={{width:width(75),alignSelf:'center'}}>

                <TouchableOpacity
                onPress={()=>setANROEveModal(false)}
                style={{height:30,width:30,borderRadius:15,backgroundColor:'#5e81f4',alignSelf:'flex-end',justifyContent:'center',alignItems:'center'}}
                >

                  <Text style={{ fontSize: totalSize(1) ,color:'#fff'}}>

                    x

                  </Text>

                </TouchableOpacity>

                <View style={{marginTop:height(1),flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

                  <Text style={{fontSize:totalSize(1.4),fontFamily:'Poppins-SemiBold'}}>
                    Add New {ANROEve==1?'Reminder':'Event'}
                  </Text>

                  <View style={{width:width(24),flexDirection:'row',alignItems:'center',borderRadius:10,backgroundColor:'#EEF2FF'}}>

                     <TouchableOpacity
                     onPress={()=>{
                      // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
                      setANROEve(1)}}
                     style={
                      ANROEve==1?
                       {height:height(2),shadowColor: "#444",
                     shadowOffset: {
                       width: 0,
                       height: 2,
                     },
                     shadowOpacity: 0.25,
                     shadowRadius: 3.84,width:width(12),borderRadius:10,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}
                       :
                       {height:height(2),width:width(12),borderRadius:10,justifyContent:'center',alignItems:'center'}}
                     >

                        <Text style={
                          ANROEve==1?
                        {fontSize:totalSize(0.8),color:'#000'}
                          :
                          {fontSize:totalSize(0.8),color:'#B5B5C4'}}>
                      
                           Reminder
                      
                        </Text>

                    </TouchableOpacity>

                     <TouchableOpacity
                       onPress={()=>{
                        // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
                        setANROEve(2)}}
                         style={
                          ANROEve==2?
                              {height:height(2),shadowColor: "#444",
                            shadowOffset: {
                              width: 0,
                              height: 2,
                            },
                            shadowOpacity: 0.25,
                      shadowRadius: 3.84,width:width(12),borderRadius:10,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}
                         :
                         {height:height(2),width:width(12),borderRadius:10,justifyContent:'center',alignItems:'center'}
                         }
                           >

                         <Text style={
                         ANROEve==2?
                          {fontSize:totalSize(0.8),color:'#000'}
                          :
                          {fontSize:totalSize(0.8),color:'#B5B5C4'}}>
                          
                         Event

                       </Text>

                       </TouchableOpacity>

                    </View>

                </View>

                <Text style={{fontSize:totalSize(1),marginTop:height(1),fontFamily:'Poppins-Medium'}}>
                  Start Date
                </Text>
                
                <View style={{flexDirection:'row',alignItems:'center'}}>

                 <View
                 style={{width:width(30),marginTop:height(1),borderWidth:1,borderRadius:5,borderColor:'#ebecf2'}}
                 >
                   <View style={{height:height(3),width:width(28),alignSelf:'center',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

                     <DateTimePicker
                     testID="dateTimePicker"
                     style={{width:width(25)}}
                     value={date}
                     mode='date'
                     is24Hour={true}
                     display="default"
                     onChange = {(event, selectedDate) => {
                      const currentDate = selectedDate || date;
                      setDate(currentDate);
                    }}
                    />

                     <Image
                     source={BookMain}
                    style={{height:20,width:20}}
                    />

                  </View>

                </View>

                </View>

               <Text style={{fontSize:totalSize(1),marginTop:height(1),fontFamily:'Poppins-Medium'}}>
                  Start Time
                </Text>

                 <View
                style={{width:width(30),marginTop:height(1),borderWidth:1,borderRadius:5,borderColor:'#ebecf2'}}
                 >
                   <View style={{height:height(3),width:width(28),alignSelf:'center',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

                   <DateTimePicker
                     testID="dateTimePicker"
                     style={{width:width(25)}}
                     value={time}
                     mode='time'
                     is24Hour={true}
                     display="default"
                     onChange = {(event, selectedDate) => {
                      const currentDate = selectedDate || time;
                      setTime(currentDate);
                    }}
                    />

                     <Image
                     source={BookMain}
                    style={{height:20,width:20}}
                    />

                  </View>

                 </View>

               <Text style={{fontSize:totalSize(1),marginTop:height(1),fontFamily:'Poppins-Medium'}}>
                  Event Name
                </Text>

               <TextInput
               placeholder='Give a name to your event'
               style={{height:height(3),width:width(30),marginTop:height(1),paddingHorizontal:width(1),borderWidth:1,borderRadius:5,borderColor:'#ebecf2'}}
               />

               {ANROEve==2?
               <View>

                  <Text style={{fontSize:totalSize(1),marginTop:height(1),fontFamily:'Poppins-Medium'}}>
                  Add Participant
                </Text>

                 <TextInput
                 placeholder='Give a name to your event'
                 style={{height:height(3),width:width(30),marginTop:height(1),paddingHorizontal:width(1),borderWidth:1,borderRadius:5,borderColor:'#ebecf2'}}
                 />

              </View>
               :null 
               }

               <View>

                <Text style={{fontSize:totalSize(1),marginTop:height(1),fontFamily:'Poppins-Medium'}}>
                  Description
                </Text>

               <TextInput
               placeholder='Please enter your description.'
               multiline={true}
               style={{height:height(10),width:width(45),marginTop:height(1),paddingHorizontal:width(1),borderWidth:1,borderRadius:5,borderColor:'#ebecf2'}}
               />

               </View>

              <TouchableOpacity
                onPress={() => { 
                  setANROEveModal(false)
                  if(ANROEve==1){
                  setMessageText('Reminder has added to your calender')
                  }
                  else{
                    setMessageText('Event has added to your calender')
                    }
                  setMessageModal(true)
                 }}
                style={{ height: height(4), width: width(16), marginTop: height(2), justifyContent: 'center', alignItems: 'center', backgroundColor: '#5e81f4', borderRadius: 20 }}
              >

                <Text style={{ fontSize: totalSize(1.3), color: '#fff' }}>
                  Save
                </Text>

              </TouchableOpacity>

              </View>

            </View>

          </View>

        </Modal>


      </View>

    </View>
  )
}


const styleWeek = StyleSheet.create({
  headerStyle: {
      backgroundColor: '#fff',
      color:'#000'
  },
  container: {
      flex: 1,
      backgroundColor: '#F8F8F8',
  },

});