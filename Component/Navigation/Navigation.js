import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import role from '../roleSelect/roleSelect'
import login from '../LoginNSignup/login'
import signup from '../LoginNSignup/signup'
import avatar from '../selectAvatar/selectAvatar'
import savatar from '../selectedAvatar/selectedAvatar'
import home from '../home/home'
import bookScreen from '../BookScreen/bookScreen'
import pdf from '../PDFtron/PDFtron'
import notebook from '../notebookscreen/notebook'
import pdfNB from '../notebookscreen/PDFtronNotebook'
import assigmentscreen from '../AssigmentScreen/assigmentscreen'
import testprofile from '../AssigmentScreen/testprofile'
import test from '../AssigmentScreen/test'
import testresult from '../AssigmentScreen/testresult'

const loginStack = createStackNavigator()

const LoginScreen = () => (
  <loginStack.Navigator headerMode='none'>
    <loginStack.Screen name='role' component={role} />
    <loginStack.Screen name='login' component={login} />
    <loginStack.Screen name='signup' component={signup} />
    <loginStack.Screen name='avatar' component={avatar} />
    <loginStack.Screen name='savatar' component={savatar} />
    <loginStack.Screen name='home' component={home} />
    <loginStack.Screen name='bookScreen' component={bookScreen} />
    <loginStack.Screen name='pdf' component={pdf} />
    <loginStack.Screen name='notebook' component={notebook} />
    <loginStack.Screen name='pdfNB' component={pdfNB} />
    <loginStack.Screen name='assigmentscreen' component={assigmentscreen} />
    <loginStack.Screen name='testprofile' component={testprofile} />
    <loginStack.Screen name='test' component={test} />
    <loginStack.Screen name='testresult' component={testresult} />
  </loginStack.Navigator>
)


export default function Navigation() {


  return (
    <NavigationContainer>

      <LoginScreen />

    </NavigationContainer>

  )
}