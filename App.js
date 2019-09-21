import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import UniScroll from './UniScroll'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Secret Hello!</Text>

      <UniScroll color='magenta'/>
      <UniScroll color='purple'/>
      <UniScroll color='blue'/>
      <UniScroll color='green'/>
      <UniScroll color='yellow'/>
      <UniScroll color='orange'/>
      <UniScroll color='red'/>

      <Image
          style={{width: 500, height: 500}}
          source={{uri: 'https://i.ytimg.com/vi/lHJN6IO6jYI/maxresdefault.jpg'}}
          />

      <UniScroll color="red" />
      <UniScroll color="orange" />
      <UniScroll color="yellow" />
      <UniScroll color="green" />
      <UniScroll color="blue" />
      <UniScroll color="purple" />
      <UniScroll color="magenta" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
