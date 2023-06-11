import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function Map() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
        latitude: 51.9225,
        longitude: 4.4786,
        latitudeDelta: 0.1500,
        longitudeDelta: 0.0800,
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  }
});