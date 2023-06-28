import React, { useContext } from "react";
import MapView, { Circle, Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import CrimeDataContext from "../context/crimeDataContext";

export default function Map() {
  //haal crimeData context op om in dit component te gebruiken
  const { crimeData } = useContext(CrimeDataContext);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 51.9225,
          longitude: 4.4786,
          latitudeDelta: 0.15,
          longitudeDelta: 0.08,
        }}
      >
        {/* Loop door crimeData om de markers met circels op de map te zetten */}
        {crimeData.map((marker) => (
          <React.Fragment>
            {/* Plaats een marker op de kaart */}
            <Marker
              key={marker.id}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.title}
              description={marker.description}
            />
            {/* Maak een cirkel om de marker heen om een gebied op de map aan te geven */}
            <Circle
              center={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              radius={1000}
            />
          </React.Fragment>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
