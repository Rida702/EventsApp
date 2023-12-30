import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Platform, TextInput, Button, Touchable, TouchableOpacity } from 'react-native';

export default function App() {
  const [text , setText ] = useState("")
  return (
    <SafeAreaView >
      <View >
        <Text style={styles.Text1}>hello world!</Text>
        <Text style={styles.Text2}>Platform: {Platform.OS === 'ios' ? 'iOS' : 'Android'}</Text>
        <ScrollView>
          <View style={{ backgroundColor: 'pink', height: 1600 }}>
            <TextInput style={styles.textInput}
              defaultValue={text}
              onChangeText={txt=>setText(txt)}
            />
            <View style={styles.buttonContainer}>
              <Button
                title="Press Me"
                onPress={() => console.log('Hello World!')}
              />
              <TouchableOpacity style={styles.touchMe} onPress={() => console.log('Hello World!')}>
                <Text style={{color:'white'}}>Click me too</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <StatusBar style="dark" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  textInput: {
    padding : 10,
    borderWidth: 1,
    width: '80%', 
    margin: 20, 
  },
  buttonContainer: {
    width: '30%',
    height: '50%',
    marginLeft : 100,
  },
  touchMe :{
    padding:10, 
    backgroundColor:'purple', 
    marginTop:5,
  },
  Text1 :{
    fontSize: 30, 
    paddingTop:25, 
    paddingLeft:6,
  },
  Text2 :{
    fontSize: 23, 
    paddingLeft:6,
  },

});
