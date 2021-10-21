import React from 'react'
import { ActivityIndicator } from 'react-native'

export default Loader = props => {

  return (
    <ActivityIndicator
      size='large'
      color={props.color}
    />
  )
}