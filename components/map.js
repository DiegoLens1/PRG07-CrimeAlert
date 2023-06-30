import React, { useContext, useState } from "react";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import CrimeDataContext from "../context/crimeDataContext";
import ThemeContext from "../context/themeContext";
import CustomCallout from "./customCallout";

export default function Map({ regionState }) {
  //haal context op om in dit component te gebruiken
  const { theme } = useContext(ThemeContext);
  const { crimeData } = useContext(CrimeDataContext);
  const [followuser, setFollowUser] = useState(false);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        userInterfaceStyle={theme === "light" ? "light" : "dark"}
        initialRegion={regionState}
        region={regionState}
        showsUserLocation={true}
        followsUserLocation={followuser}
      >
        {/* Loop door crimeData om de markers met circels op de map te zetten */}
        {crimeData.map((marker) => (
          <React.Fragment key={marker.id}>
            {/* Plaats een marker op de kaart */}
            <Marker
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.title}
              description={marker.description}
            >
              {/* Custom popup boven marker */}
              <Callout>
                <CustomCallout {...marker} />
              </Callout>
            </Marker>
            {/* Maak een cirkel om de marker heen om een gebied op de map aan te geven */}
            <Circle
              center={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              strokeColor={theme === "light" ? "#000" : "#fff"}
              fillColor={"rgba(255, 69, 58, 0.5)"}
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
  followUserButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
});
