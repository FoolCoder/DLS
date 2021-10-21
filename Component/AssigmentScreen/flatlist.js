import React, { useState } from 'react'
import { View, Text, FlatList, SwipeView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function Flatlist() {

  const [data, setdata] = useState([
    {
      title: 'Hello world',
      id: 'hello'
    }, {
      title: 'World says hello',
      id: 'say'
    },
  ])
  var arr = [];
  arr[0] = "Jani";
  arr[1] = "Hege";
  arr[2] = "Stale";
  arr[3] = "Kai Jim";
  arr[4] = "Borge";
  const [flag, setflag] = useState(false)
  const addspecificindex = () => {

    console.log(arr.join());
    arr.splice(2, 1, "Lene");
    console.log(arr.join());

  }

  const deleteItem = (item, index) => {
    let d = data.filter((e, i, a) => {
      return i != index
    })
    setdata(d)
  }
  const pushitem = (index) => {

    let d = { title: 'abdfbkads', id: 'jirjewoqjr' }

    data.push(d)

    setdata(data)

    setflag(!flag)

    // data1.push('My world')
    // console.log(data1)
  }

  const renderItem = ({ item, index }) => {
    return (

      <TouchableOpacity
        onPress={() => deleteItem(item, index)}
      >

        <Text style={{ marginTop: 55 }}>
          {item.title}
        </Text>

      </TouchableOpacity>

    )
  }


  return (
    <View>
      <FlatList
        data={data} // Assuming this is `this.state.data`
        keyExtractor={(item, index) => { return index.toString() }}
        renderItem={renderItem}
        extraData={flag}

      />

      <TouchableOpacity onPress={() => pushitem()}>
        <Text style={{ marginTop: "44%" }}>Click me add</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => addspecificindex()}>
        <Text style={{ marginTop: "44%" }}>Click me</Text>
      </TouchableOpacity>
    </View>

  );

}
