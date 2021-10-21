import React, { useState } from 'react'
import { View, Text, Image, SafeAreaView, TouchableOpacity, FlatList, LayoutAnimation } from 'react-native'
import { height, width, totalSize } from 'react-native-dimension'

import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';


LocaleConfig.locales['en'] = {
  formatAccessibilityLabel: "dddd d 'of' MMMM 'of' yyyy",
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  monthNamesShort: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
};

LocaleConfig.defaultLocale = 'en';

export default function Calender() {



  return (
    <View style={{ flex: 1, marginTop: 20 }}>

      <Calendar
        current={new Date().toLocaleDateString()}
      />

      <Text>
        {new Date().toLocaleDateString()}
      </Text>

    </View>
  )
}