import React, { Component } from 'react';
import { TextInput,View,Text } from 'react-native';

const Seletor = ({nome}) => {
  const [value, onChangeText] = React.useState();

  return (
    <View>
      <Text>{nome}</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={value}
      />

    </View>
  );
}

export default Seletor;



