import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from "react-native-paper";
import { AntDesign } from '@expo/vector-icons';

export default function StyleProfile({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.close}>
      <AntDesign name="close" size={24} color="black" onPress={() => navigation.pop()} />

      </View>
      <View style={styles.input}>
          <TextInput placeholder="Enter your full name"/>
      </View>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    
  },
  close: {
    position: "absolute",
    top: 45,
    left: 370
  },
  input: {
    marginLeft: 10,
    marginRight: 10
  }
})
